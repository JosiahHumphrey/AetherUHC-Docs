# World Mutation

Some of AetherUHC's most visually dramatic scenarios — like **Big Crack**, **Chunk Apocalypse**, and **Underground Parallel** — require physically altering **millions of blocks** across the entire pre-generated map. Doing this naively in Bukkit would lag the server for hours or crash it entirely.

AetherUHC solves this with its proprietary **Post-Gen Mutation Engine**: a tick-budgeted, TPS-aware, memory-safe block runner that applies heavy terrain operations right after pre-generation completes.

---

## How the Mutation Engine Works

1. **Pregen completes** — all chunks within the border are on disk.
2. The engine detects which **mutation scenarios** are active (Big Crack, Chunk Apocalypse, etc.).
3. For each mutation, the engine calculates which chunks need to be modified (e.g., a cross-shaped 15-chunk-wide strip for Big Crack).
4. Chunks are loaded in a **sliding window cache** — only a small number of chunks are held in memory at once, preventing RAM exhaustion.
5. Block operations are applied directly to the **raw chunk data arrays**, bypassing physics, lighting recalculation, and block update propagation (for speed).
6. On each tick, the engine monitors **server MSPT (milliseconds per tick)**. If the server starts to lag, the engine yields automatically and resumes next tick.
7. When all mutations are complete, the engine saves and unloads modified chunks, and announces to console.

---

## Mutation Scenarios

### Big Crack <Badge type="warning" text="Lobby Only" />

Carves an immense **cross-shaped ravine** from the maximum build height down to the void, centered precisely at (0, 0). The crack is 15 chunks wide on each arm.

**Configuration** (`worldmanagement.yml`):
```yaml
SCENARIO-TWEAKS:
  BIG-CRACK:
    WIDTH-CHUNKS: 15         # Width of each arm of the cross
    FULL-WORLD-HEIGHT: true  # Carve full height (y=0 to max) vs y=0 to y=64 only
```

---

### Slimy Crack <Badge type="warning" text="Lobby Only" />

A crack running along the **Z axis only** (not a full cross). The bottom layer of the crack is lined with **slime blocks**, creating a bouncy, chaotic floor.

**Configuration** (`worldmanagement.yml`):
```yaml
SCENARIO-TWEAKS:
  SLIMY-CRACK:
    WIDTH-CHUNKS: 10
```

---

### Chunk Apocalypse <Badge type="warning" text="Lobby Only" />

Randomly deletes approximately 10% of chunk columns across the entire map, creating voids that form a fractured, parkour-like terrain.

**Configuration** (`worldmanagement.yml`):
```yaml
SCENARIO-TWEAKS:
  CHUNK-APOCALYPSE:
    DELETE-PERCENT: 10        # Percentage of chunks to delete (default: 10)
    STEP-SIZE: 16             # Chunk column step size for sampling
```

> [!TIP]
> Lowering `DELETE-PERCENT` to 5% creates a more subtle effect. Raising it above 20% creates a nearly impassable void-scape — use with caution.

---

### Underground Parallel <Badge type="warning" text="Lobby Only" />

Clones a horizontal slice of the surface terrain and **mirrors it upside-down** near bedrock level, creating a surreal subterranean ceiling. Players who dig deep enough encounter an inverted copy of the surface world above them.

---

### Dragon Rush <Badge type="warning" text="Lobby Only" />

Places **End Portal room structures** at distributed map coordinates during post-gen, allowing players to find portals and reach The End without building a portal manually. Always places one portal at (0, 0).

**Modes** (configurable in Host menu):
- **Standard**: Portal at (0, 0) plus scattered satellite portals.
- **PvE**: More portals, designed for a cooperative playstyle.
- **Vanilla**: Only the (0, 0) portal.

---

## Configuring the Mutation Budget

The mutation engine's performance profile is tunable in `worldmanagement.yml`:

```yaml
WORLD-MUTATION:
  BLOCKS-PER-TICK: 12000        # Maximum blocks modified per server tick
  MAX-MSPT: 50                  # Pause mutation if server tick time exceeds this (ms)
  ASYNC-CHUNK-WARMUP: true      # Pre-load chunks asynchronously before modifying
  WARMUP-CHUNKS-AHEAD: 48       # Number of chunks to pre-warm in the cache window
```

| Key | Description | Recommended |
| :--- | :--- | :--- |
| `BLOCKS-PER-TICK` | Blocks mutated per tick. Higher = faster but may lag. | `12000` (standard), `24000` (high-end) |
| `MAX-MSPT` | MSPT threshold to auto-pause mutation. | `45`–`50` |
| `ASYNC-CHUNK-WARMUP` | Loads the next batch of chunks async before modifying. | `true` |
| `WARMUP-CHUNKS-AHEAD` | Cache window size. Higher uses more RAM. | `48` |

### Tuning for High-End Hardware

If your server has a fast CPU and ample RAM, increase the throughput:

```yaml
WORLD-MUTATION:
  BLOCKS-PER-TICK: 32000
  MAX-MSPT: 45
  WARMUP-CHUNKS-AHEAD: 96
```

### Tuning for Budget Servers

If your server struggles during mutation (TPS drops to 15), reduce the budget:

```yaml
WORLD-MUTATION:
  BLOCKS-PER-TICK: 6000
  MAX-MSPT: 40
  WARMUP-CHUNKS-AHEAD: 24
```

---

## Monitoring Mutation Progress

Mutation progress is automatically reported to console every 1,000 chunks processed:

```
[AetherUHC] [Post-Gen] Big Crack: 8,400/15,000 slices (56.0%) — 210 slices/sec, ETA ~31s
```

You can also check the current mutation status in-game with:
```
/aetheruhc postgen status
```

---

## Important Notes

> [!WARNING]
> Mutation scenarios are **applied once** immediately after pre-generation completes. They permanently alter the world file. If you disable a mutation scenario after it has already been applied (e.g., you no longer want Big Crack), the terrain **will not be restored**. A new map must be generated.

> [!CAUTION]
> Do **not** let players join the server while a post-gen mutation is running. Joining during mutation can cause chunks in an inconsistent state to be sent to clients, resulting in visual glitches or crashes.

> [!NOTE]
> On **Legacy 1.8** servers, the mutation engine calls `Chunk#initLighting()` via NMS reflection after block operations to fix floating trees, incorrect heightmaps, and lighting artifacts that result from bypassing the normal block update pipeline.
