# World Generation

AetherUHC features a highly optimized, fully integrated World Pre-Generation engine. Rather than relying on external plugins like FastAsyncWorldEdit or Chunky, AetherUHC automatically handles everything.

Map pre-generation ensures that all chunks within your configured border are generated and saved to disk *before* players drop in, completely eliminating server lag from on-the-fly chunk loading.

## Configuring the Generator

In `plugins/AetherUHC/worldmanagement.yml`, you will find the `CHUNK-PREGENERATION` section:

```yaml
CHUNK-PREGENERATION:
  PREGEN-MODE: async
  SAVE-INTERVAL-SECONDS: 30
```

- **`PREGEN-MODE: async`**: (Recommended for Modern 1.20+ servers). This uses Paper's multithreaded chunk loader to generate chunks across all CPU cores incredibly fast without crashing the main thread.
- **`PREGEN-MODE: sync`**: (Recommended for Legacy 1.8 servers). This runs a linear row-scan over the map on the main thread, constrained by a strict milliseconds-per-tick budget to keep the server online.

## Setting the Border Size

The pre-generator determines how many chunks to generate based on the `BORDER.START` configuration in your `uhcconfiguration.yml`. 

> [!TIP]
> A standard UHC border is **2000 blocks** (radius). This gives a perfectly clean 125-chunk radius, meaning exactly 63,001 chunks will be generated. We highly recommend using borders divisible by 16 to prevent math rounding issues.

## Custom Generators

AetherUHC supports custom chunk generation plugins! If you specify a generator in the config, AetherUHC will automatically hook it and use it during the pre-gen phase.

### Beta 1.7.3 Generation
For authentic legacy terrain (with crazy mountains, unpredictable caves, and large flat plains), you can enable the included Beta 1.7.3 terrain engine.
```yaml
WORLD-GENERATOR: "BETA173"
```

### CityWorld
If you have the `CityWorld` plugin installed alongside AetherUHC, you can force the map to generate as an abandoned concrete metropolis.
```yaml
WORLD-GENERATOR: "CityWorld"
```

### Vanilla
For standard Minecraft terrain (with the No-Oceans datapack injected on modern versions):
```yaml
WORLD-GENERATOR: "VANILLA"
```

## How to Pregen a Map

1. Stop your server.
2. Delete the old `world/` folder (or your specific UHC world folder).
3. Ensure `UHC-WORLD-USED: true` is set in `uhcconfiguration.yml`. (This tells the plugin it's a fresh deployment).
4. Start the server. The console will automatically begin logging the pregen progress.

> [!WARNING]
> Do NOT let players join while the pre-generation is running, as it will drastically slow down the process and create severe lag.
