# Scenarios

AetherUHC ships with **139+ fully implemented, highly configurable scenarios** out of the box. Scenarios modify the base rules of Ultra Hardcore to create unique, varied, and exciting gameplay experiences. Every scenario listed here can be toggled live from the in-game GUI or via commands.

## Managing Scenarios

| Action | Method |
| :--- | :--- |
| Open Scenario Manager | `/scenarios` (requires `aetheruhc.host`) |
| Enable a specific scenario | Click the scenario icon in the GUI, or `/scenario enable <name>` |
| Disable all scenarios | `/scenarios off` |
| View active scenarios | `/scenarios` (read-only for regular players) |

> [!TIP]
> Scenarios marked **Lobby Only** apply post-generation world mutations (e.g., carving a crack through the map). These must be set **before** starting the game and require a fresh map to reverse.

> [!NOTE]
> Scenarios marked **Teams Required** expect players to be in teams before the match starts. Make sure to configure teams in the Host menu.

---

## Scenario Categories

- [World Modifiers](#world-modifiers) — Scenarios that physically alter the map
- [Ore Tweaks](#ore-tweaks) — Changes to ore mining, drops, and costs
- [Loot & Drops](#loot--drops) — Death drops, kill rewards, and item drops
- [Combat](#combat) — PvP and PvE rule changes
- [Enchanting & Crafting](#enchanting--crafting) — Recipe and enchantment modifiers
- [Hazards & Events](#hazards--events) — Environmental dangers and timed events
- [Health & Healing](#health--healing) — Max health, regeneration, and survival tweaks
- [Abilities & Buffs](#abilities--buffs) — Starting kits, permanent buffs, and special powers
- [Team Scenarios](#team-scenarios) — Designed specifically for team play
- [Restriction Scenarios](#restriction-scenarios) — Banning items, playstyles, or mechanics
- [Special Mechanics](#special-mechanics) — Unique, one-of-a-kind rule overhauls

---

## World Modifiers

These scenarios run a **Post-Generation World Mutation** after the map has been pre-generated. They physically alter the terrain and are **Lobby Only** — the map must be regenerated to reverse them.

### Big Crack <Badge type="warning" text="Lobby Only" />

Carves an immense **cross-shaped ravine** from the world's maximum build height all the way down to bedrock, intersecting precisely at coordinate (0, 0). The crack is 15 chunks wide and creates a dramatic, map-splitting obstacle for all players.

---

### Slimy Crack <Badge type="warning" text="Lobby Only" />

Similar to Big Crack, but runs along the **Z axis** only. The bottom-most solid layer of the crack is coated in **slime blocks**, creating a bouncy, chaotic floor that makes traversal treacherous.

---

### Chunk Apocalypse <Badge type="warning" text="Lobby Only" />

Randomly deletes vertical columns (chunks) of terrain across the entire map, creating a **fractured, parkour-like landscape** full of deadly voids. Approximately 10% of chunks are removed.

> [!TIP]
> The removal percentage is configurable in `worldmanagement.yml` under `SCENARIO-TWEAKS.CHUNK-APOCALYPSE.DELETE-PERCENT`.

---

### Underground Parallel <Badge type="warning" text="Lobby Only" />

Clones a horizontal slice of the overworld surface and **mirrors it upside-down** near bedrock level, creating a surreal subterranean ceiling that rewards brave underground explorers with above-ground resources.

---

### Dragon Rush <Badge type="warning" text="Lobby Only" />

Places **End Portal room structures** at scattered coordinates across the map, allowing players to reach The End and fight the Ender Dragon without ever building a portal. An End Portal is also placed at (0, 0).

---

### City World

The world generates as a massive, sprawling **ruined city**. Every chunk is dense with concrete, glass, and abandoned structures rather than natural terrain. Requires the `CityWorld` generator module.

---

### Bedrockless

All **bedrock** in the world (the floor layer) is replaced with smooth stone, opening up the void below. Falling off the edge of the map results in instant death.

---

### Dungeoneering

Ores near the surface are **significantly reduced**, but dungeon spawner rates underground are dramatically increased. Encourages deep exploration over simple branch mining.

---

## Ore Tweaks

### CutClean

All ores and animal drops are **automatically smelted on pickup**. Iron ore becomes iron ingots, gold ore becomes gold ingots, and cooked meat drops instead of raw meat. No furnace required.

---

### Double Ores

Mining any ore **doubles the yield**. Mine one diamond ore, receive two diamonds.

---

### Triple Ores

Mining any ore **triples the yield**. Mine one diamond ore, receive three diamonds.

---

### Half Ores

Only **every second ore** of each type that you mine drops its loot. Alternate ores drop nothing.

---

### Double or Nothing

When mining iron, diamond, or gold ore, there is a **50% chance** of receiving double the ore — and a 50% chance of receiving nothing at all. High risk, high reward.

---

### Blood Diamonds

Mining diamond ore costs **half a heart of health** per ore. The price of power.

---

### Blood Gold

Mining gold ore costs **half a heart of health** per ore.

---

### Blood Cycle

Every **10 minutes**, a random ore type is selected. Mining that ore deals half a heart of damage until the next cycle.

---

### Diamondless

Diamond ore **cannot be mined**. However, killing a player will reward you with **1 diamond**.

---

### Goldless

Gold ore **cannot be mined**. However, killing a player rewards you with **1 gold ingot**.

---

### Ironless

Iron ore **cannot be mined** (including via Blast Mining). Killing a player drops **8 iron ingots**.

---

### Limitations

A cap is placed on how much of each ore you can mine across the entire game:
- Maximum **16 diamonds**
- Maximum **32 gold**
- Maximum **64 iron**

> [!NOTE]
> These limits are configurable via `SCENARIO-TWEAKS.LIMITATIONS` in `worldmanagement.yml`.

---

### Broadcaster

When you mine **gold or diamonds**, there is a **15% chance** your exact coordinates are broadcast to the entire server. Mine at your own risk.

---

### Blast Mining

Mining ores has two dangers:
- **5%** chance of spawning a Slowness II Creeper.
- **3%** chance of summoning primed TNT.

---

### Wood Life

Coal ore drops **nothing**. Every torch must come from crafting with wood, or not at all.

---

### Randomizer

Every block in the world drops a **completely random item or material** when broken, based on configurable loot tables.

---

## Loot & Drops

### Timebomb

When a player is killed, their loot is placed into a **chest at their death location** that **explodes after 30 seconds**. Loot must be collected before the timer runs out.

---

### Chest

When a player is killed, their loot is placed into a **permanent chest** at their death location. No explosion — the chest stays until someone loots it.

---

### Safe Loot

When used alongside **Timebomb**, the spawned chest is **locked** to the killer only. Other players cannot access it.

---

### Golden Retriever

All players drop **1 golden head** upon death. Golden heads can be right-clicked to gain regeneration effects.

---

### Bleeding Sweets

When a player dies, they drop:
- 1 Diamond
- 5 Gold Ingots
- 16 Arrows
- 1 String

---

### Bookception

When a player dies, a **random enchanted book** spawns at their death location.

---

### Tree Drops

Leaves have a small random chance of dropping rare items:
- **0.5%** chance of a Golden Apple
- **0.1%** chance of a Diamond
- **10%** chance of a Feather

---

### Lucky Leaves

There is a **0.5% chance** that a Golden Apple drops from any leaf block that decays or is broken.

---

### Flower Power

Every flower broken will drop a **random item** from the game's loot pool.

---

### Loot Crate

At periodic intervals, a **random loot crate** drops to every player, containing randomly selected gear.

---

### Genie

Each player receives **3 wishes**. As players secure kills, higher kill tiers unlock better wish rewards. Use `/genie wish <reward>` to redeem a wish.

---

### Double Drops

Killing animals or mobs yields **double** the normal drops.

---

### Triple Drops

Killing animals or mobs yields **triple** the normal drops.

---

### Vengeful Spirits

When a player dies, a **Ghast spawns** at their location. Killing the ghast drops the dead player's head. Name tags on all mobs are disabled.

---

## Combat

### NoClean

After killing a player, the killer receives **20 seconds of invulnerability** — protecting them from being cleaned immediately after a fight.

---

### Assassins <Badge type="tip" text="Teams Required" />

At the start of PvP, each player is assigned a **secret target**. Only killing your assigned target produces loot. When you eliminate your target, you inherit their target. The last survivor wins.

---

### Killswitch

On kill, the **inventories of the killer and victim are swapped** immediately.

---

### Kill Reveal <Badge type="tip" text="Teams Required" />

All teams are **anonymous** — names are hidden — until a player on that team secures their first kill.

---

### Enemy Recon

Kills grant **recon charges**. Use `/recon` to secretly and temporarily view any enemy player's inventory.

---

### Switcheroo

Every time you **shoot a player with a bow**, your positions are instantly swapped with theirs.

---

### Long Shots

Arrow shots from more than **50 blocks away** heal you for 1 heart and deal **1.5× damage**.

---

### Three Arrows (3x Arrows)

Bows fire **three arrows simultaneously** in a spread pattern instead of one.

---

### BowFighters

All players **start with an Infinity bow**. Swords stronger than wood and axes stronger than stone cannot be crafted.

---

### Do Not Disturb (DND)

When a player enters combat, they are **locked into fighting only that opponent**. They cannot attack or be attacked by anyone else until the duel ends.

---

### Damage Dodgers

The **first 5% of players** to take any damage of any kind are instantly eliminated from the match.

---

### Melee Fun

Removes **hit invulnerability** (i-frames) between players, restoring classic 1.8-style PvP with no hit cooldown.

---

### Old Combat

Removes **1.9+ combat cooldowns**, sweep attacks, and scales weapon damage back to 1.8 values.

---

### Passive Monsters

All **hostile mobs become passive** — they will not target or attack players.

---

### Nightmare Mode

PvE becomes dramatically harder:
- Creepers spawn silverfish on explosion.
- Skeletons shoot **poison arrows**.
- Zombies and spiders have buffed stats.

---

### Risky Fall

Fall damage is a **coin toss**:
- **50%** chance of taking zero damage.
- **50%** chance of taking **double** the normal fall damage.

---

### Gap Zap

Taking any damage while the **Regeneration** effect is active **immediately removes** the regeneration buff.

---

## Enchanting & Crafting

### Limited Enchants

Crafting enchantment tables is **disabled**. Instead, unbreakable enchantment tables are placed at (0, 0) and in each map quadrant, creating contested hot spots.

---

### Infinite Enchant

Enchanting is **completely uncapped** — no level limit, no resource cost. Players receive:
- 64 Enchantment Tables
- 64 Anvils
- 128 Bookshelves
- 30,000 XP levels

---

### Blood Enchants

Every enchantment level applied costs **half a heart of health**. Enchanting is literally painful.

---

### No Enchant

Enchantment tables and anvils **cannot be used**.

---

### Better Enchant

Left-clicking with an enchanted book on any item **strips the enchantment** off the book and applies it directly, with no anvil required.

---

### Limited P4

Players can only enchant **one item** with Protection IV. Subsequent P4 applications are blocked.

---

### Hastey Boys

All crafted mining tools receive **Efficiency III** automatically.

---

### Hastey Boys Lite

All crafted mining tools receive **Efficiency I** automatically.

---

### Hastey Babies (OP Hastey Boys)

All crafted mining tools receive **Efficiency V** automatically.

---

### Upside Down Recipes

All standard crafting recipes are **vertically mirrored** — the pattern must be placed upside-down in the crafting grid to work.

---

### Bench Blitz <Badge type="tip" text="Teams Required" />

At the start of the game, each player receives **exactly 1 crafting table** and cannot craft more. Protect it!

---

### Carrot Combo

Crafting any sword also produces a **golden carrot** with an Sharpness enchantment scaled to the sword tier:
- Wood → Sharpness II Carrot
- Gold → Sharpness II Carrot
- Stone → Sharpness III Carrot
- Iron → Sharpness V Carrot
- Diamond → Sharpness VI Carrot

---

### Fast Smelting

All furnaces smelt items and burn fuel approximately **10× faster** than normal.

---

## Hazards & Events

### Armageddon

Random **hazards fall from the sky**: TNT, lava buckets, and splash potions bombard random areas of the map throughout the game.

---

### Raining TNT

Every minute, **TNT rains down** on 2 randomly selected unlucky players. Begins 2 minutes after the game starts.

---

### Grass Explosion

Walking on grass has a **25% chance** of triggering an explosion. Begins immediately upon scatter — watch every step.

---

### Astrophobia

**Meteors** periodically strike the earth, creating craters. Additionally, **supercharged Creepers** and buffed **alien Skeletons** spawn throughout the game.

---

### Pyrophobia

A world increasingly hostile to water:
- Water blocks transform into **obsidian**, then **lava**.
- Lapis and Redstone ore become obsidian.
- All mobs spawn with **Fire Resistance**.

---

### Cryophobia

**Ice slowly floods the world** from the surface downward. Winter mobs (Strays, Polar Bears) spawn across all biomes.

---

### Coronavirus

Every **5 minutes**, a randomly selected player receives **Nausea** and **Poison** effects for a random duration between 5 and 60 seconds.

---

### Mystery Scenarios

Every **10 minutes**, all non-Mystery Scenarios are automatically disabled and **2–3 new random scenarios** are enabled. The meta never stays the same.

---

### Random Scenarios

Enabling this causes **random scenarios to be enabled automatically** at the start of the match. Use `/scenarios off` to clear all active scenarios first.

---

### Go to Hell

After **30 minutes**, any player still in the Overworld begins taking damage **every 30 seconds** until they enter the Nether.

---

### Sky High

If a player's **Y coordinate falls below a configurable limit**, they take **1 heart of damage every 30 seconds** until they climb above it.

---

### Meetup

At a configurable time, all players are **forced to the surface** (if below Y=35) and ore mining is disabled — forcing final PvP confrontation. Configure the time via `/config admin`.

---

### Actually Monsters Inc

All **placed doors** become **random teleporters** to other doors in the world. Every door is a mystery.

---

## Health & Healing

### Enable Natural Regeneration

**Natural health regeneration** is enabled, allowing players to regenerate health by keeping their hunger bar full. Normally disabled in UHC.

---

### Double Health

Players can regenerate up to a maximum of **20 hearts** (40 HP), double the normal UHC cap.

---

### One Hundred Hearts (100 Hearts)

All players start the match with a **100-heart health pool** (200 HP). Fights last significantly longer.

---

### 9 Lives

Players start with **10 hearts**. Upon death, they **respawn** but permanently lose 1 max heart. Once all lives are exhausted, they are eliminated. *(Requires 1.11+)*

---

### Second Chance

Each player may **respawn once** after their first death. The second death is permanent. Does not apply during deathmatch.

---

### Lifesteal

Securing a kill **permanently increases** the killer's maximum health by a set amount.

---

### Siphon

Kills grant the killer:
- A **permanent max health boost**
- Bonus **XP levels**
- A **random enchanted book**

---

### Shared Health <Badge type="tip" text="Teams Required" />

All teammates share **one global health pool**. Any damage dealt to one player reduces the shared pool for the entire team.

---

### Compensation <Badge type="tip" text="Teams Required" />

When a teammate dies, their **maximum health** is evenly distributed among the surviving teammates.

---

### Best PvE

All players start on a list and gain **+1 max heart every 10 minutes**. Taking any damage removes you from the list. Getting a kill re-adds you.

---

### Soup

Right-clicking **mushroom stew** restores **3.5 hearts** instantly, enabling rapid combat regen without potions.

---

### Hypixel Heads

Right-clicking a **player head** grants:
- Regeneration III for 4 seconds
- Speed II for 20 seconds

---

## Abilities & Buffs

### Eclipse Protocol

At game start, all players receive **Night Vision, Saturation, and Resistance** for the first **13 minutes** of the match.

---

### Cats Eyes

All players **start with permanent Night Vision** for the entire game.

---

### Birds <Badge type="tip" text="Lobby Only" />

All players can **fly freely** throughout the match.

---

### Noodle Jump

All players receive a **permanent Jump Boost** effect from game start.

---

### Nuzlocke

Each player is **randomly assigned a Pokémon type** at game start. Each type grants unique passive abilities, resistances, and effects.

---

### Superheroes

Each player is assigned a **random special ability** at game start, including:
- Speed, Strength, Resistance, Jump Boost, or extra hearts.

Fall damage is disabled for all players.

---

### Pyro <Badge type="tip" text="Teams Required" />

All players begin the match with a **Flame I** book and a **Fire Aspect I** book.

---

### Puppy Power <Badge type="tip" text="Teams Required" />

All players start with:
- 64 Bones
- 64 Rotten Flesh
- 64 Wolf Spawn Eggs

---

### Every Rose <Badge type="tip" text="Teams Required" />

All players receive a **golden chestplate with Thorns III** at game start.

---

### Build UHC

All players receive a **preset starting kit** of tools and materials, shifting the meta from resource gathering to pure combat.

---

### Gone Fishing

Players receive an **Unbreaking 200, Luck of the Sea 200** fishing rod and 64 anvils. Crafting enchantment tables is disabled.

---

### Vein Miner

While **sneaking**, breaking any block causes all adjacent blocks of the **same type** to break in a chain reaction. Essential for fast mining.

---

### Tracker

All players receive a **compass** at game start that can be right-clicked to track the nearest enemy player.

---

### Backpacks (Extra Inventory)

Unlocks a **private team backpack** accessible via `/backpack`, providing additional shared storage.

---

### Biome Paranoia

Player **nametag colors dynamically change** based on the biome they are currently standing in, making it possible to determine where enemies are hiding.

---

### Lights Out

Players **cannot place torches** at any point during the match. Coordinate your light sources carefully.

---

### Nine Slots

Only **9 inventory slots** are accessible to each player. All other slots are permanently locked.

---

### Disable Shields *(1.9+ Only)*

Players cannot use **shields**. Any shield placed in the offhand is forcibly removed on activation.

---

### Disable Offhand *(1.9+ Only)*

Players cannot place any item in their **offhand slot**.

---

## Team Scenarios

### Red vs Blue <Badge type="tip" text="Teams Required" />

Players are randomly split into **two teams — Red and Blue** — at game start, regardless of pre-set team configurations.

---

### Love at First Sight (LAFS) <Badge type="tip" text="Teams Required" />

Teams are formed **organically during the match**: the first time two unpaired players hit each other, damage is cancelled and they become permanent teammates. Unpaired players cannot harm each other.

---

### Kings <Badge type="tip" text="Teams Required" />

Each team has a designated **King**, identifiable by a gold crown item. If the King is eliminated, the **entire team is instantly eliminated**. Protect your King at all costs.

---

### Moles <Badge type="tip" text="Teams Required" />

One player per team is secretly designated as a **Mole**. All Moles form a hidden team and can communicate privately, working to eliminate their own teammates. Non-Mole players must identify and eliminate the Mole before being betrayed.

---

### Children Left Unattended <Badge type="tip" text="Teams Required" />

When a teammate dies, all surviving teammates receive:
- A **Speed buff**
- A **tamed wolf**

---

### Anonymous <Badge type="tip" text="Teams Required" />

All player **usernames are hidden** — no one can see who anyone is. Teams play completely anonymously.

---

## Restriction Scenarios

### Barebones

A major ruleset restriction that forces raw, fundamental PvP:
- Enchantment tables and anvils cannot be crafted or used.
- Golden apples cannot be crafted.
- The Nether is disabled.
- Dead players drop: 1 Diamond, 2 Golden Apples, 32 Arrows, 2 String.

---

### Swordless

Crafting **swords of any type** is completely disabled. Axes, bows, and other weapons only.

---

### Bowless

**Bows cannot be used**. All ranged combat is disabled.

---

### Rodless

**Fishing rods cannot be used**, removing the classic rod-and-sword combo mechanic.

---

### Horseless

Players **cannot tame horses or donkeys**.

---

### No Diamond Armor

Crafting **diamond armor** is completely disabled.

---

### Fireless

Players take **no fire damage** of any kind — lava, fire, and burning deal zero damage.

---

### No Fall

Players take **no fall damage** of any kind.

---

### Web Limit

Players can hold a maximum of **8 cobwebs** in their inventory at any time. Additional cobwebs are removed.

---

### Web Cage

After killing a player, a **sphere of cobwebs** instantly materializes around the killer.

---

### Cripple

Taking **any fall damage** inflicts **Slowness II for 30 seconds**.

---

### Bald Chicken

Chickens drop **no feathers**. Skeletons drop **3–5 arrows** each, making arrows the only feather alternative.

---

### Beta Zombies

Zombies drop **feathers** when killed, referencing classic Beta-era Minecraft behavior.

---

### No Clean

See [Combat > NoClean](#noclean).

---

## Special Mechanics

### Timber

Breaking **any log block** causes the entire connected tree to instantly fall as drops. Efficient tree farming; chaotic in forests.

---

### Lucky Roulette <Badge type="tip" text="Lobby Only" />

Every **2 minutes**, all players receive a **random item** from a curated loot table. Nobody knows what they'll get next.

---

### Bombers <Badge type="tip" text="Lobby Only" />

All players start with an **unbreakable Flint and Steel**. Most animals and monsters drop **TNT** upon death.

---

### Blood Cycle

*(See [Ore Tweaks > Blood Cycle](#blood-cycle))*

---

### Double XP

Mining ores grants **2× the normal experience points**.

---

### Triple XP

Mining ores grants **3× the normal experience points**.

---

### Back Packs (Team Inventory) <Badge type="tip" text="Teams Required" />

All teammates share a **common team inventory** accessible via `/teaminventory`.

---

### Zombies

When any player **dies**, a zombie immediately **spawns at their death location**.

---

### Exposure

Crafting an **enchantment table** teleports the crafter to the surface and inflicts **Mining Fatigue I for 1 minute** — a significant penalty for rushing enchants.

---

### Bats

Killing a **bat** has:
- **95%** chance of dropping a Golden Apple.
- **5%** chance of instantly killing the player who struck the final blow.

---

### No Enchant

Enchantment tables and anvils **cannot be used**.

---

### Coronavirus

*(See [Hazards & Events > Coronavirus](#coronavirus))*
