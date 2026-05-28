# World Mutation

Some of AetherUHC's most exciting gamemodes (like **Big Crack** or **Chunk Apocalypse**) require physically altering millions of blocks across the generated map. Doing this in standard Minecraft would instantly crash the server.

AetherUHC solves this via its proprietary **Post-Gen Mutation Engine**, a tick-budgeted, memory-safe runner that applies these heavy block operations right after the world has finished pre-generating.

## How it Works

1. Once pre-generation completes, the mutation engine kicks in.
2. It calculates which chunks need to be altered (e.g., a massive 15-chunk wide X-shape across the map for Big Crack).
3. It asynchronously loads only those chunks into a sliding "warmup window" memory cache using Paper ticket scopes.
4. It directly modifies the raw chunk data arrays (bypassing block-physics lag) while monitoring the server's TPS/MSPT (Milliseconds Per Tick).
5. If the server starts lagging, the engine automatically yields and pauses its work until the next tick.

## Configuring the Budget

You can tweak how fast mutations apply in your `plugins/AetherUHC/worldmanagement.yml`:

```yaml
WORLD-MUTATION:
  BLOCKS-PER-TICK: 12000          # The maximum number of blocks modified per tick.
  MAX-MSPT: 50                    # The mutation pauses if server tick time exceeds this.
  ASYNC-CHUNK-WARMUP: true        # Highly recommended to leave true on 1.20+
  WARMUP-CHUNKS-AHEAD: 48         # The chunk cache size.
```

If you have a high-end CPU, you can safely increase `BLOCKS-PER-TICK` to `24000` or higher to speed up post-gen mutations.

## Popular Mutation Scenarios

- **Big Crack**: Carves an immense, cross-shaped ravine all the way down to bedrock intersecting at the exact center (0,0) of the map.
- **Chunk Apocalypse**: Erases vertical columns of random chunks across the map, creating a dangerous, parkour-like fractured environment.
- **Underground Parallel**: Clones a slice of the surface world and mirrors it upside-down near bedrock level, creating a surreal subterranean ceiling.
- **Dragon Rush**: Pastes End Portal room schematics across various coordinates on the map.
