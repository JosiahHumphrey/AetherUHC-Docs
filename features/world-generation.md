# World Generation

AetherUHC features a highly optimized, fully integrated **World Pre-Generation engine**. Rather than relying on external plugins like FastAsyncWorldEdit, Chunky, or WorldBorder, AetherUHC automatically handles everything natively.

Map pre-generation ensures that all chunks within your configured border are generated and saved to disk **before** players drop in, completely eliminating server lag from on-the-fly chunk loading during the match.

---

## How It Works

1. When a new match is configured and the host triggers world setup, AetherUHC begins generating chunks in a **square spiral** pattern starting from (0, 0).
2. On **Modern (1.20+)** servers, chunk generation is dispatched to **Paper's async chunk loader** — using all available CPU cores simultaneously.
3. On **Legacy (1.8)** servers, chunks are generated in batches on the main thread, constrained by a strict milliseconds-per-tick budget to keep the server responsive.
4. Progress is logged to console every 1,000 chunks. When pregen finishes, Post-Gen mutations (if any) run automatically.

---

## Pregen Modes

Configure the mode in `plugins/AetherUHC/worldmanagement.yml`:

```yaml
CHUNK-PREGENERATION:
  PREGEN-MODE: async
  SAVE-INTERVAL-SECONDS: 30
  SKIP-GENERATED-CHUNKS: true
  MAX-WORKING-COUNT: 96
  MAX-STARTS-PER-TICK: 12
```

| Key | Description |
| :--- | :--- |
| `PREGEN-MODE` | `async` (Modern) or `sync` (Legacy 1.8) |
| `SAVE-INTERVAL-SECONDS` | How often the world is saved during pregen. `30` is recommended. |
| `SKIP-GENERATED-CHUNKS` | If `true`, already-generated chunks are skipped. Useful for resuming. |
| `MAX-WORKING-COUNT` | Max concurrent chunk tickets in async mode. Higher = faster on multi-core CPUs. |
| `MAX-STARTS-PER-TICK` | Max new chunk loads per tick in async mode. Tune if experiencing TPS drops. |

### `async` Mode *(Recommended for Modern 1.20+ servers)*

Uses Paper's multithreaded chunk loader. Chunks are dispatched in batches across all CPU cores. On a modern 8-core server, typical generation speeds are **200–500 chunks/second**, allowing a 2000-block border map (~63,000 chunks) to generate in under 5 minutes.

### `sync` Mode *(Recommended for Legacy 1.8 servers)*

Runs chunk generation on the main thread in a row-scan pattern. Each tick is capped by `TIME-BUDGET-MS` (default: 30ms) to prevent the server from becoming unresponsive during pregen. Typical speeds on legacy servers are **100–300 chunks/second**.

### `headless` Mode *(Experimental — Modern only)*

Bypasses Bukkit's chunk pipeline entirely and writes raw `.mca` region files directly to disk using a custom multi-threaded MCA writer. This is the fastest mode available but is considered experimental. Only compatible with the Beta 1.7.3 generator.

---

## Setting the Border Size

The pre-generator determines how many chunks to generate based on `BORDER.START` in `uhcconfiguration.yml`:

```yaml
BORDER:
  START: 2000    # Radius in blocks
  FINAL: 200     # Final border after shrinking
```

> [!TIP]
> A standard UHC border is **2000 blocks** (radius). This gives a 125-chunk radius — exactly **63,001 chunks** to generate. Borders divisible by 16 prevent rounding issues in chunk math.

---

## Custom World Generators

AetherUHC supports custom chunk generation modules. Set the generator in `worldmanagement.yml`:

```yaml
WORLD-GENERATOR: "BETA173"
```

### Beta 1.7.3 Generation
Authentic legacy terrain engine recreating the exact noise functions from Beta 1.7.3 Minecraft. Features massive mountain ranges, wide flat plains, chaotic cave systems, and no oceans.

```yaml
WORLD-GENERATOR: "BETA173"
```

### CityWorld
The world generates as a sprawling, abandoned concrete metropolis filled with roads, skyscrapers, and ruins. Requires the `CityWorld` generator module bundled with AetherUHC.

```yaml
WORLD-GENERATOR: "CityWorld"
```

### Vanilla
Standard modern Minecraft terrain. On 1.20+ servers, AetherUHC automatically injects a **No Oceans** data pack to remove water biomes entirely for fair UHC gameplay.

```yaml
WORLD-GENERATOR: "VANILLA"
```

---

## Ocean Removal

Oceans are universally removed in AetherUHC UHC matches to avoid unfair spawn locations. This is implemented differently per version:

- **1.8 Legacy**: A runtime NMS BiomeProvider proxy is injected to replace ocean biomes with Plains at the chunk level.
- **Modern 1.20+**: A bundled `no_oceans` data pack prevents ocean biomes from generating at world creation time.

> [!NOTE]
> Ocean removal is always applied regardless of which generator is active.

---

## How to Pregen a Map

1. **Stop the server.**
2. **Delete the old world** (or your configured UHC world folder). On Linux: `rm -rf world/`
3. Ensure `UHC-WORLD-USED: true` is set in `uhcconfiguration.yml`.
4. **Start the server.** The console will automatically begin logging pregen progress:
   ```
   [AetherUHC] Map pregen: 12000/63001 (19.0%) — 220 chunks/sec, ETA ~230s
   ```
5. Wait for the "Pre-generation complete!" message before allowing players to join.

> [!WARNING]
> Do **NOT** let players join while pre-generation is running. Player activity forces chunk loads outside the pregen area, dramatically slowing the process and creating TPS spikes.

---

## Monitoring Pregen Progress

While pregen is running, you can check progress at any time:

```
/aetheruhc pregen status
```

Output example:
```
[AetherUHC] Pregen: 41,250 / 63,001 chunks (65.5%) | 312 chunks/sec | ETA: ~68s
```

To cancel an ongoing pregen:
```
/aetheruhc pregen cancel
```

> [!CAUTION]
> Cancelling pregen mid-way leaves the world partially generated. Players in ungenerated areas will see chunk loading lag. It is recommended to either complete pregen or delete and restart the world entirely.

---

## Performance Tuning

### Modern Servers (1.20+)

For the fastest possible generation on a high-core-count server:

```yaml
CHUNK-PREGENERATION:
  PREGEN-MODE: async
  MAX-WORKING-COUNT: 256
  MAX-STARTS-PER-TICK: 24
  TICKET-BATCH-SIZE: 64
  USE-URGENT-PRIORITY: true
```

### Legacy Servers (1.8)

For the best balance of speed and server stability:

```yaml
CHUNK-PREGENERATION:
  PREGEN-MODE: sync
  CHUNKS-PER-TICK: 4
  TIME-BUDGET-MS: 30
  MAX-SKIP-PER-TICK: 128
  CHUNK-BUFFER: 4
  SAVE-INTERVAL-SECONDS: 60
```

Increase `CHUNKS-PER-TICK` carefully — if your server TPS drops below 18 during pregen, reduce it.
