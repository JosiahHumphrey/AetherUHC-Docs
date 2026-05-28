# Minecraft Ultra Hardcore (UHC) — Comprehensive Knowledge Base

> **Last Updated:** May 2026
> **Scope:** History, game design, programming architecture, scenario catalog (150+), PvP mechanics, server infrastructure, community ecosystem, open-source resources, and AetherUHC-specific reference.

---

## Table of Contents

1. [What is UHC?](#1-what-is-uhc)
2. [History & Origins](#2-history--origins)
3. [Game Lifecycle & Phases](#3-game-lifecycle--phases)
4. [Core Mechanics](#4-core-mechanics)
5. [PvP Combat Mechanics](#5-pvp-combat-mechanics)
6. [Gear Progression & Enchanting Strategy](#6-gear-progression--enchanting-strategy)
7. [Team Modes](#7-team-modes)
8. [Scenario Catalog (150+)](#8-scenario-catalog-150)
9. [Programming Architecture](#9-programming-architecture)
10. [Key Bukkit/Spigot Events for UHC](#10-key-bukkitspigot-events-for-uhc)
11. [World Generation & Map Management](#11-world-generation--map-management)
12. [Hosting Configuration & Best Practices](#12-hosting-configuration--best-practices)
13. [Anti-Cheat & Moderation](#13-anti-cheat--moderation)
14. [UI, Scoreboard & Information Display](#14-ui-scoreboard--information-display)
15. [Nether & Potion Management](#15-nether--potion-management)
16. [UHC Terminology Glossary](#16-uhc-terminology-glossary)
17. [Notable UHC Networks & Servers](#17-notable-uhc-networks--servers)
18. [Open-Source Projects & Resources](#18-open-source-projects--resources)
19. [Hypixel UHC Champions — Progression System](#19-hypixel-uhc-champions--progression-system)
20. [Recorded Rounds & YouTube Culture](#20-recorded-rounds--youtube-culture)
21. [Skript-Based UHC Development](#21-skript-based-uhc-development)
22. [AetherUHC-Specific Reference](#22-aetheruhc-specific-reference)
23. [Quick Reference Appendix](#23-quick-reference-appendix)

---

## 1. What is UHC?

**Ultra Hardcore (UHC)** is a competitive Minecraft survival game mode where the core rule is simple but transformative: **natural health regeneration is disabled**. Players cannot heal from a full hunger bar. Instead, they must rely on:

- **Golden Apples** (8 gold ingots + 1 apple → heals 2 hearts + 2 absorption)
- **Golden Heads** (8 gold ingots + 1 player head → heals 4 hearts + 2 absorption)
- **Health/Regeneration Potions** (require Nether access for brewing)
- **Notch Apples** (usually disabled or uncraftable in competitive play)

This single rule change transforms Minecraft into a high-stakes survival PvP game where **every point of damage is permanent**, creating tension that persists from the first moments of resource gathering through to the final combat encounters.

### Core Gameplay Loop

```
Mine → Craft → Enchant → Brew → Hunt Players → Win
```

Players are scattered across a large map, must gather resources, craft weapons and armor, and ultimately fight to be the last player (or team) standing. A shrinking world border forces encounters over time.

### Influence on Gaming

Mindcrack UHC is often cited as a major influence on the **Battle Royale** genre. Its combination of resource gathering, tension-building, and a shrinking map established a gameplay loop that predated mainstream Battle Royale titles like PUBG and Fortnite.

---

## 2. History & Origins

### The Birth of UHC (2012)

UHC was born from the **Mindcrack** server community. On **February 3, 2012**, while playing a hardcore series, Mindcrack member **Guude** took fall damage and remarked:

> *"You know what they should do is make a mode where you never gain hearts back."*

This inspired **VintageBeef** to contact developer **Jack Beardmore** (SBK_x_SiiLeNcE), who created the **"xxxHardcorexxx Mod"** — a custom mod that disabled natural regeneration and modified healing item recipes.

### First UHC Season

The first Mindcrack UHC season was released on **February 22, 2012**. It featured four players:
- Guude
- VintageBeef
- PauseUnpause
- W92Baj

The objective was to kill the Ender Dragon without natural health regeneration — the rule that would define the entire game mode.

### Timeline

| Year | Milestone |
|------|-----------|
| **Feb 2012** | Mindcrack UHC Season 1 debuts (4 players: Guude, VintageBeef, PauseUnpause, Baj) |
| **Mar 2012** | Season 3 shifts from PvE (kill the dragon) to PvP free-for-all format |
| **2013** | r/ultrahardcore subreddit forms; community-run "Recorded Rounds" begin |
| **2013** | Badlion Network launches, evolving from a PvP clan into a competitive UHC hub |
| **2013–2016** | "Golden Era" of Recorded Rounds (WMC, Ambition, Cynical, Phobia, Aureus Pupillam) |
| **2014** | Hypixel launches UHC Champions with progression/perk systems |
| **2015** | ArcticMC UHC network founded |
| **2016** | Badlion at peak — hosting 250–750 player UHC games; partners with ESL esports |
| **2016** | PlayUHC network established |
| **2017** | Minecraft 1.9 combat update splits the PvP community (1.8 vs 1.9+ meta) |
| **2018** | Badlion Network closes; Badlion Client continues as a standalone launcher |
| **2025** | Lunar Client acquires Badlion; modern UHC thrives on ArcticMC, Hoplite, MoxMC |
| **Mar 2026** | Standalone Badlion Client effectively shut down |

### The Impact of 1.9 Combat

The Minecraft 1.9 combat update (2016) introduced attack cooldowns and dual-wielding, fundamentally changing PvP. This created a permanent schism:

- **1.8 PvP**: Fast-paced click-spam combat, no cooldowns, sword blocking — preferred by competitive UHC players
- **1.9+ PvP**: Strategic timing, shields, sweep attacks — embraced by some servers but rejected by the traditional community

Most dedicated UHC servers continued running 1.8 or used ViaVersion to allow 1.8 clients on newer server software.

---

## 3. Game Lifecycle & Phases

A typical UHC match follows a structured lifecycle managed by a **Game State Machine**:

```mermaid
graph LR
    A[LOBBY] --> B[STARTING]
    B --> C[SCATTER]
    C --> D[GRACE_PERIOD]
    D --> E[PVP_ENABLED]
    E --> F[BORDER_SHRINK]
    F --> G[MEETUP / DEATHMATCH]
    G --> H[GAME_OVER]
```

### Phase Details

| Phase | Duration | Description |
|-------|----------|-------------|
| **Lobby** | Until host starts | Players join, teams form, scenarios are voted on/configured. Players may use practice arenas to warm up PvP. |
| **Starting** | 5–30 seconds | Countdown, world preparation, final checks |
| **Scatter** | ~30 seconds | Players teleported to random safe locations across the map. Validates: solid ground, 3-block air clearance, no ocean biomes. Team scatter uses single location per team. |
| **Grace Period** | 10–20 minutes | PvP disabled; players mine, craft, and prepare. Priority is iron armor, gold for healing, diamonds for enchanting. |
| **PvP Enabled** | 30–60+ minutes | Full combat enabled; border may begin shrinking. Meta shifts from pure gathering to strategic positioning. |
| **Final Heal** | (Optional) | At a configured time (20–30 min), all players heal to full health. Resets levels before late-game PvP. |
| **Border Shrink** | 10–30 minutes | World border contracts toward center (0,0), forcing encounters. Players outside take 0.5–1 heart/sec damage. |
| **Meetup/Deathmatch** | Until winner | Border at minimum size (25–75 block radius); final fights. Meetup protocol: players must head to 0,0 — hiding/BTCing prohibited. Mining ores may be disabled; players forced to surface. Permaday often enabled. |
| **Game Over** | — | Winner announced, stats displayed, server resets |

### Typical Game Configurations

| Setting | Common Value |
|---------|-------------|
| Initial border | 1000–2500 block radius |
| Final border | 25–75 block radius |
| Grace period | 10–20 minutes |
| PvP to meetup | 45–75 minutes |
| Total game time | 60–120 minutes |
| Golden apple heal | 2 hearts |
| Golden head heal | 3–4 hearts |
| Absorption | On or Off (configurable) |
| Nether | On or Off |
| Enchanted golden apples | Usually disabled |
| Horses | Often disabled |
| Potions (Strength II, etc.) | Often nerfed |

---

## 4. Core Mechanics

### 4.1 Healing Mechanics

Since natural regeneration is disabled, healing is **the** strategic resource in UHC.

#### Golden Heads

The **Golden Head** is UHC's signature custom item. When a player dies, they drop their head, which can be crafted into a powerful healing item.

**Recipe:**
```
[Gold] [Gold] [Gold]
[Gold] [Head] [Gold]
[Gold] [Gold] [Gold]
```

| Item | Health Restored | Absorption | Notes |
|------|----------------|------------|-------|
| Golden Apple | 2 hearts | 2 hearts | Standard healing; 8 gold ingots + 1 apple |
| Golden Head | 4 hearts | 2 hearts | Custom UHC item; rewards kills |
| Notch Apple | 4 hearts + Regen | 4 hearts | Usually disabled; uncraftable since 1.9 |
| Health Potion II | 4 hearts instant | — | Requires Nether access |
| Soup (scenario) | 3.5 hearts | — | Mushroom stew on right-click |

**Hypixel Head variant:** Regeneration III for 4 seconds + Speed II for 20 seconds (AetherUHC's `HYPIXEL_HEADS` scenario).

#### Absorption Hearts
- Yellow hearts that act as a damage buffer
- Do not stack indefinitely — eating another golden item refreshes/replaces the effect
- Last ~2 minutes typically
- Configurable on/off per game

### 4.2 World Border

The world border is the primary pacing mechanism:

```java
WorldBorder border = world.getWorldBorder();
border.setCenter(0, 0);
border.setSize(initialDiameter);          // Start large
border.setSize(finalDiameter, seconds);   // Shrink over time
border.setDamageBuffer(5.0);              // Buffer before damage
border.setDamageAmount(0.2);              // Damage per block outside
border.setWarningDistance(20);            // Red tint distance
```

### 4.3 Scatter Algorithm

Safe player scattering requires:
1. Generate random (X, Z) within border radius
2. Check minimum distance from other players/teams (≥200 blocks typical)
3. Find highest safe block at location (not lava, water, cactus, void)
4. Ensure 2–3 blocks of air above for the player
5. Teleport player to center of block, 1 block above surface

```java
public List<Location> generateScatterLocations(World world, int count,
                                                 int radius, int minDist) {
    List<Location> locations = new ArrayList<>();
    int maxAttempts = 1000;

    for (int i = 0; i < count; i++) {
        for (int attempt = 0; attempt < maxAttempts; attempt++) {
            int x = random.nextInt(radius * 2) - radius;
            int z = random.nextInt(radius * 2) - radius;

            // Check minimum distance from existing locations
            boolean tooClose = locations.stream()
                .anyMatch(loc -> distance2D(loc, x, z) < minDist);
            if (tooClose) continue;

            // Find safe Y coordinate
            int y = world.getHighestBlockYAt(x, z);
            Block block = world.getBlockAt(x, y, z);

            if (isSafe(block)) {
                locations.add(new Location(world, x + 0.5, y + 1, z + 0.5));
                break;
            }
        }
    }
    return locations;
}

private boolean isSafe(Block block) {
    Material type = block.getType();
    return type != Material.LAVA && type != Material.WATER
        && type != Material.FIRE && type != Material.CACTUS
        && block.getRelative(BlockFace.UP).getType() == Material.AIR
        && block.getRelative(BlockFace.UP, 2).getType() == Material.AIR;
}
```

### 4.4 Team Management

Teams are tracked via:
- `HashMap<UUID, Team>` for player→team mapping
- Bukkit Scoreboard Teams for name colors and friendly fire control
- Team sizes: FFA (solo), To2, To3, To4, To5, rTo2–rTo5 (random teams)

### 4.5 Nether Rules

| Rule | Common Setting |
|------|---------------|
| Nether enabled | Configurable (on/off) |
| Portal trapping | Usually prohibited |
| Portal camping | Usually prohibited |
| Strength II nerf | Often halved or disabled |
| Tier 2 potions | Sometimes disabled entirely |

---

## 5. PvP Combat Mechanics

### 5.1 1.8 Combat System (Legacy)

The 1.8 combat system is the standard for competitive UHC. It has no attack cooldowns and relies on movement, timing, and mechanical skill.

#### Sprint Resetting
The key to 1.8 PvP — your hit must register while sprinting for maximum knockback.

| Technique | Method | Purpose |
|-----------|--------|---------|
| **W-Tapping** | Release and re-press W after each hit | Resets sprint for consistent knockback |
| **S-Tapping** | Tap S after hitting | Resets sprint + creates distance (riskier) |
| **Block-Hitting** | Right-click to block after attacking | Sprint reset + damage reduction (classic) |

#### Strafing
- Moving side-to-side (A/D) during combat
- Makes you harder to hit
- Randomize patterns to be unpredictable

#### Rodding (Fishing Rod PvP)
- Landing a rod hit halts opponent's sprint and temporarily stuns them
- Creates openings for first-hit advantage
- Essential tool for "breaking" opponent momentum

#### Click Speed (CPS)
- Typically 6–12+ CPS via jitter or butterfly clicking
- Maintains combos and reduces knockback taken
- **Movement and aim are more important than raw CPS**

#### Combos
- Landing consecutive hits while preventing opponent from hitting back
- Created by sprint-resetting and maintaining forward momentum
- "3+ combo" = landing 3+ consecutive hits = usually fight-winning

### 5.2 1.9+ Combat System (Modern)

| Feature | 1.8 | 1.9+ |
|---------|-----|------|
| Attack cooldown | ❌ None | ✅ Yes — must wait for full charge |
| Shields | ❌ | ✅ Can block all frontal damage |
| Dual wielding | ❌ | ✅ Offhand slot available |
| Sweep attacks | ❌ | ✅ Swords hit multiple entities |
| Axes disable shields | N/A | ✅ For 5 seconds |
| Click speed importance | High | Low — timing matters more |

#### 1.9+ Key Strategies
- **Attack Timing:** Wait for full charge indicator before swinging
- **Shield Management:** Block attacks; watch for axe-wielding opponents
- **Critical Hits:** Jump and hit while falling for bonus damage
- **Axes vs Swords:** Axes deal more damage per hit but slower; swords are faster with sweep
- **Item Utility:** Ender pearls, tipped arrows, potions become more strategic

### 5.3 Universal PvP Strategies
- **Water Bucket:** Always in hotbar for lava/fall damage protection
- **Bow Usage:** Essential for softening targets before melee engagement
- **High Ground:** Seek elevated positions for critical hit advantage
- **Sneaking:** Hide name tag for stealthy approaches
- **Terrain Advantage:** Use blocks, lava, and environment offensively

---

## 6. Gear Progression & Enchanting Strategy

### Early Game Priority Order
1. **Wood tools** → immediate crafting
2. **Stone tools** → upgrade pickaxe and sword
3. **Food** → hunt animals early; full hunger bar required for sprinting
4. **Iron armor set** → full protection ASAP
5. **Iron sword + bucket** → combat readiness and lava/fall protection
6. **Gold** → highest priority ore; every ingot = potential healing
7. **Diamonds** → armor, enchanting table, sword upgrade

### Optimal Caving Strategy
- Find surface caves and follow to deepest point
- Sprint through caves placing torches behind you to prevent mob spawns
- Listen for ambient sounds (lava, mobs) indicating hidden cave systems
- **Never** dig straight down without escape plan
- Carry a water bucket at all times
- Mine diamond at Y: -50 to -64 (modern) or Y: 10–14 (legacy 1.8)
- Avoid unnecessary mob combat — every heart counts

### Enchanting Strategy

UHC games are fast — perfect gear is rarely achievable.

| Priority | Target | Enchantment | Level |
|----------|--------|-------------|-------|
| 1 | Sword | Sharpness | I (minimum) |
| 2 | Armor (all pieces) | Protection | I (minimum) |
| 3 | Bow | Power | I (minimum) |
| 4 | Bow | Infinity | I (if available) |
| 5 | Armor | Projectile Protection | I (if available) |

#### Enchanting Tips
- **Level 1 enchants** on all gear is the standard "fast" strategy
- Level 1 enchants are massively impactful vs unenchanted opponents
- Use **anvils** to combine: 2× Power I bows → Power II
- Dungeon/mineshaft books can provide critical enchants
- Avoid chasing Level 30 enchants unless game pace allows
- Watch for "Too Expensive" anvil penalty on over-combined items

### Diamond Armor Decision
- **Full diamond armor** provides ~80% damage reduction (vs 60% for iron)
- **Diamond sword** has higher damage than iron
- If diamonds are limited, prioritize: **Chest → Helmet → Legs → Boots**
- Some players enchant iron armor rather than saving for diamond

---

## 7. Team Modes

### Standard Formats

| Mode | Abbreviation | Description |
|------|-------------|-------------|
| **Free-For-All** | FFA | Every player is solo — last standing wins |
| **Team of 2** | To2 | 2 players per team |
| **Team of 3** | To3 | 3 players per team |
| **Team of 4** | To4 | 4 players per team |
| **Team of 5+** | To5+ | Larger teams (less common) |
| **Red vs Blue** | RvB | Two large teams, randomly assigned |

### Team Assignment Methods

| Method | Description |
|--------|-------------|
| **Random Teams (rToX)** | Server randomly assigns teams at game start |
| **Chosen Teams** | Players enter with pre-formed teams (friends) |
| **Captains Picked** | Designated captains take turns drafting players (snake draft) |
| **Drafters** | Captains restricted to picking from random lists of 5 |
| **LAFS (Love at First Sight)** | Teams form when two unpaired players hit each other — damage is cancelled and they become teammates |

### Team Mechanics
- **Friendly Fire:** Configurable — can teammates damage each other?
- **Team Chat:** `/tc` or similar for private team communication
- **Name Colors:** Teammates' names are typically colored the same
- **Shared Scatter:** Teammates teleported to the same location
- **Team Inventory:** Some scenarios add shared team storage (AetherUHC `BACK_PACKS`)
- **External Comms:** Many competitive events use Discord or TeamSpeak

### Team Elimination
- A team is eliminated when **all members** are dead
- In **Kings** mode, the entire team dies if the King dies
- In **Compensation**, dead teammate's max health is redistributed to survivors
- In **Shared Health**, all teammates share one global health pool

---

## 8. Scenario Catalog (150+)

Scenarios are game modifiers that alter standard UHC rules. They are the backbone of UHC's replayability. Below is a comprehensive catalog organized by category.

> **Legend:** **(H)** = High impact on gameplay | **(L)** = Low impact

### 8.1 Resource & Ore Modifiers

| Scenario | Description |
|----------|-------------|
| **CutClean** (L) | All ores and food auto-smelted/cooked upon mining/killing |
| **Triple Ores** (L) | All mined ores drop 3× the normal amount |
| **Double Ores** (L) | All mined ores drop 2× the normal amount |
| **1/2 Ores** (L) | Only 1 of every 2 ores mined drops an item |
| **Double or Nothing** (L) | Mining iron/gold/diamond has 50% chance to drop double or nothing |
| **Vein Miner** (L) | Sneak-mining an ore breaks all connected ores of the same type |
| **Hastey Boys** (L) | All crafted tools come pre-enchanted with Efficiency III + Unbreaking I |
| **Hastey Babies** (OP Hastey Boys) (L) | Crafted mining tools get Efficiency V |
| **Hastey Boys Lite** (L) | Crafted mining tools get Efficiency I |
| **Timber** (H) | Breaking one log destroys the entire tree instantly |
| **Diamondless** (H) | Diamond ore drops iron instead; receive 1 diamond per player kill |
| **Goldless** (H) | Gold ore cannot be mined; receive 1 gold per player kill |
| **Ironless** (H) | Iron ore cannot be mined; killed players drop 8 iron ingots |
| **Barebones** (H) | Iron is max tier; no gold/diamond mining; kills drop 1 diamond, 1 gapple, 32 arrows, 2 string. Nether disabled. |
| **Blood Diamonds** (L) | Mining diamond ore costs ½ heart of damage |
| **Blood Diamonds+** (L) | Progressive damage: Nth diamond costs N% damage |
| **Blood Gold** (L) | Mining gold ore costs ½ heart of damage |
| **Blood Lapis** (H) | Mining lapis ore costs ½ heart; only drops 1–2 lapis |
| **Blood Enchants** (L) | Enchanting an item costs ½ heart per level |
| **Blood Cycle** (H) | Every 10 minutes, a random ore type deals ½ heart when mined |
| **Bloody Diamonds** (L) | Mining diamond ore deals 1 heart of damage |
| **Balance** (L) | After 8 diamonds and 48 gold, mining more becomes harder |
| **Balance+** (L) | Hard caps on diamonds (8) and gold (48); kills grant +2 diamond / +8 gold allowance |
| **Diamond Limit** (L) | Fixed maximum diamonds mineable (configurable) |
| **Limitations** (L) | Max minable: 16 diamonds, 32 gold, 64 iron |
| **Flower Power** (H) | Breaking flowers drops random items from the entire game item pool |
| **Lucky Leaves** (L) | Leaves have 0.5% chance to drop a Golden Apple |
| **Tree Drops** (L) | Leaves drop gold (0.5%), diamonds (0.1%), feathers (10%) |
| **Block Rush** (L) | Mining a new unique block type rewards 1 gold ingot |
| **Apple Famine** (L) | Apples do not drop from trees |
| **Apple & Flint Switch** (L) | Flint drops from leaves; apples drop from gravel |
| **Bald Chicken** (L) | Chickens drop no feathers; skeletons drop 10–20 arrows |
| **Beta Zombies** (L) | Zombies drop 0–2 feathers instead of rotten flesh |
| **CraftClean** (L) | Placing coal + smeltable items in crafting table gives smelted result |
| **Bleeding Sweets** (L) | Player death drops: 1 diamond, 5 gold, 1 book, 1 string, 16 arrows |
| **Wood Life** (L) | Coal ore drops nothing |
| **Randomizer** (H) | Each block drops a random item based on config |
| **Blast Mining** (H) | 5% chance mining ores spawns a creeper; 3% chance spawns ignited TNT |
| **Fast Smelting** (L) | Furnaces smelt ~10× faster |

### 8.2 Health & Combat Modifiers

| Scenario | Description |
|----------|-------------|
| **100 Hearts** (H) | Everyone starts with 100 hearts; golden apples heal 20% of max health |
| **Double Health** (L) | Everyone starts with 20 hearts |
| **9 Lives** (H) | Players start with 10 hearts; each death respawns with 2 gapples but loses 1 permanent heart |
| **Second Chance** (L) | Each player may respawn once after death (not during deathmatch) |
| **Compensation** (H) | Dead teammate's hearts are divided among surviving team members |
| **Potential Hearts** (L) | Healing at full health adds permanent extra hearts (up to a cap) |
| **Armor vs. Health** (H) | Every ½ armor point removes ½ heart of max health permanently |
| **Best PvE** (L) | Players on a list heal 1 heart every 10 minutes; taking damage removes you; killing adds you back |
| **Damage Cycle** (H) | Every 10 minutes, a damage type changes; that damage type deals 3× damage |
| **Damage Dodgers** (H) | First X players (5%) to take any damage are instantly eliminated |
| **Shared Health** (H) | All team members share a single health pool |
| **Lifesteal** (L) | Kills permanently increase your max health |
| **Siphon** (L) | Kills provide permanent health boost, extra XP, and a random enchanted book |
| **Blood Brothers** (H) | Eating a gapple heals your teammate instead of you (To2 only) |
| **Absorption Partner** (L) | Eating a gapple gives your teammate an absorption heart |
| **Golden Retriever** (L) | Players drop 1 golden head on death |
| **Double Healing** (H) | All healing items heal twice as much |
| **Chump Charity** (L) | Every 10 minutes, the lowest-health player is fully healed |
| **Cannibalism** (L) | Eating a player head grants 1 permanent extra heart |
| **Cupid** (L) | Bow hits heal the archer for 1% of their health |
| **Fireless** (L) | Fire and lava damage disabled |
| **NoFall** (L) | Fall damage disabled |
| **Risky Fall** (L) | 50% chance of 0 fall damage, 50% chance of double |
| **Cripple** (L) | Fall damage gives Slowness for 30 seconds |
| **Blitz** (H) | Players start with low health; everyone healed at deathmatch |
| **Berserk** (H) | Fatal damage triggers temporary strength/speed/heal but health drains over time |
| **Gap Zap** (L) | Taking damage while regenerating removes the regen effect |
| **Soup** (L) | Mushroom stew heals 3.5 hearts on right-click |
| **Hypixel Heads** (L) | Right-clicking a head gives Regen III (4s) + Speed II (20s) |
| **Enable Natural Regen** (H) | Re-enables natural regeneration (removes UHC's core restriction) |

### 8.3 Combat & PvP Modifiers

| Scenario | Description |
|----------|-------------|
| **NoClean** (L) | 20-second invulnerability after getting a kill |
| **Bowless** (L) | Bows cannot be crafted or used |
| **Rodless** (L) | Fishing rods cannot be crafted |
| **Swordless** (L) | Swords cannot be crafted |
| **Horseless** (L) | Horses cannot be ridden |
| **Axeless** (L) | Axes are disabled |
| **Melee Fun** (L) | Removes hit invulnerability between players (no hit-delay PvP) |
| **Switcheroo** (H) | Hitting an enemy with an arrow swaps your positions |
| **3x Arrows** (L) | Bows fire three arrows per shot |
| **BowFighters** (H) | Start with infinity bow; max melee weapon is stone axe or wood sword |
| **Long Shots** (L) | 50+ block bow shots heal 1 heart and deal 1.5× damage |
| **Carrot Combo** (H) | Swords are replaced by carrots with equivalent sharpness enchants |
| **Kill Switch** (H) | On kill, killer and victim inventories are swapped |
| **Assault and Battery** (H) | One teammate can only melee; the other can only use ranged (To2) |
| **Creeper Pong** (H) | Start with charged creeper eggs, Knockback X stick, and unbreaking flint & steel |
| **DND (Do Not Disturb)** (L) | At small borders, hitting a player locks you into 1v1 for 15 seconds |
| **Web Cage** (L) | Cobwebs spawn around killed players |
| **Web Limit** (L) | Max 8 cobwebs in inventory at once |
| **Disable Shields** (L) | Shields removed from inventory on use (1.9+ only) |
| **Disable Offhand** (L) | Offhand slot is disabled (1.9+ only) |

### 8.4 World & Environmental Modifiers

| Scenario | Description |
|----------|-------------|
| **Amplified Terrain** (H) | Giant mountains; amplified world type |
| **Chunk Apocalypse** (H) | 10% of chunks have all blocks replaced with air (can fall to void) |
| **Chunk Biomes** (H) | Each chunk has its own random biome, separated by slime blocks |
| **Big Crack** (L) | Giant void crack at X:0 or Z:0, 25-block radius |
| **Slimy Crack** (L) | Crack along Z axis with slime bottom |
| **Double Big Crack** (L) | Giant void cracks at both X:0 and Z:0 |
| **Underground Parallel** (H) | Underground mirror layer replicating the surface |
| **City World** (H) | Entire world is a generated city with buildings, mineshafts, sewers |
| **Bedrockless** (L) | Bedrock replaced with stone |
| **Dungeoneering** (H) | Surface ores replaced; extremely high dungeon rates underground |
| **Aquaphobia** (H) | Abandoned city with water rising from Y:32 to Y:80 |
| **Cryophobia** (H) | Icy/snowy world with ice rising from Y:0 over time; winter mobs spawn |
| **Demolition** (H) | Most ores replaced with TNT; deeper = more TNT; no bedrock |
| **Desert Flat World** (H) | Desert superflat with high village/temple rates + 20 villager eggs |
| **Catacombs** (H) | Multiple underground layers that replicate the surface |
| **Cherry World** (L) | Entire world is cherry blossom biome (1.21+) |
| **Beta 1.7 Terrain** (H) | World generated with Beta 1.7 terrain generator |
| **Biome Bundle** (H) | Custom terrain and structures from the Biome Bundle mod |
| **Custom 0,0** (H) | Host-customized terrain at coordinates 0,0 |
| **Dead Biomes** (L) | Every 10 minutes, a biome becomes "dead" (slowness, weakness, heart drain) |
| **Dragon Rush** (H) | End portal at 0,0; race to kill the Ender Dragon |

### 8.5 Special / Role-Based Scenarios

| Scenario | Description |
|----------|-------------|
| **Moles** (H) | One player per team is secretly a traitor working with other moles |
| **Double Moles** (H) | Two moles per team |
| **Assassins** (H) | Each player gets a target; only target kills drop loot; killing your target assigns you their target |
| **Kings** (H) | Each team has a King with buffs; if King dies, team is eliminated |
| **Corrupt Kings** (H) | Unknown King absorbs dead teammates' hearts; gains strength when alone |
| **Superheroes** (H) | Each player gets a random superpower (speed, strength, resistance, jump boost, extra hearts). Fall damage disabled. |
| **Nuzlocke** (H) | Pokémon-inspired; players assigned types with resistances/weaknesses |
| **Sky High** (H) | After 45 minutes, players below Y:100 take periodic damage |
| **Gone Fishing** (H) | Start with infinite XP, anvils, and enchanted rod (Unbreaking 200, Luck of the Sea 200); enchanting tables disabled |
| **Dragon Rush** (H) | Race to kill the Ender Dragon; portal at 0,0 missing 3 eyes |
| **Backpacks** (L) | Extra 27-slot inventory via `/bp`; drops on death |
| **Team Inventory** (L) | Shared team inventory via `/teaminventory` |
| **Battle Royale** (H) | FFA with no chat/messages; corpses remain; death reports every 20 min |
| **Birds** (H) | All players can fly; fall damage disabled |
| **Bombers** (H) | Unbreakable flint & steel; mob kills drop TNT |
| **Australia** (H) | Players assigned Australian animals with unique powers |
| **Captains** (L) | Snake-draft team picking by captains |
| **Drafters** (L) | Captains restricted to picking from random lists of 5 |
| **Eclipse Protocol** (L) | Night Vision + Saturation + Resistance for 13 minutes at game start |
| **Vengeful Spirits** (L) | On death, a ghast spawns; killing it drops the player's head |
| **Actually Monsters Inc** (H) | All doors act as random teleporters to other placed doors |
| **Genie** (L) | 3 wishes per player; kill tiers unlock better rewards. Use `/genie wish <reward>` |

### 8.6 Information & Paranoia Modifiers

| Scenario | Description |
|----------|-------------|
| **Achievement Paranoia** (L) | Achievements broadcast player name and coordinates |
| **Biome Paranoia** (L) | Tab list name color changes based on current biome |
| **Broadcaster** (L) | Mining gold/diamonds has 15% chance to broadcast your location |
| **Battle Siren** (L) | Fighting broadcasts approximate coordinates of the fight |
| **Anonymous** (L) | All players disguised as "Unknown"; health on tab disabled |
| **Alone Together** (L) | Teammates are invisible to each other and hidden from tab |
| **Armor Reveal** (L) | Armor hidden until you get a kill |
| **Kill Reveal** (L) | Teams are anonymous until a player gets a kill |
| **Anvil Arrows** (L) | Player death spawns a giant arrow of falling anvils in the sky |
| **Corpses** (L) | Dead player's body remains on the ground |
| **Tracker** (L) | Receive a compass at game start to track nearest player |
| **Enemy Recon** (L) | Kills grant 'recon' charges; use `/recon` to spy on enemy inventory |
| **Mystery Scenarios** (H) | Every 10 min, active scenarios are swapped for 2–3 random ones |
| **Random Scenarios** (L) | Random scenarios enabled at game start |

### 8.7 Progression & Economy Modifiers

| Scenario | Description |
|----------|-------------|
| **1.7 Enchants** (L) | Enchanting reverted to 1.7 mechanics (no preview, no lapis, costs all levels) |
| **Infinite Enchanter** (H) | Start with 10,000+ XP levels, enchanting tables, anvils, bookshelves |
| **Biome Enchanters** (H) | Can only enchant 1 item per biome visited |
| **Anvil Progression** (L) | Each kill grants 1 anvil use |
| **Altitude Anvils** (L) | Anvils only usable above Y:60 |
| **Bookception** (L) | Players drop a random enchanted book on death |
| **Armor Compensation** (L) | Diamond armor slots determined by team size |
| **Achievement Hunters** (H) | Achievements reward or penalize players |
| **Achievements** (H) | Achievements grant attack/speed buffs or +1 heart |
| **Block Battle** (L) | Every 10 minutes, most unique blocks in inventory wins 4 diamonds |
| **No Enchant** (H) | Can't use enchanting tables or anvils |
| **Limited Enchants** (H) | No crafting enchanting tables; unbreakable tables placed at 0,0 and quadrants |
| **Limited P4** (L) | Only one item can be enchanted with Protection 4 |
| **Better Enchant** (L) | Left-click enchant with a book removes the enchant from the book |
| **Triple EXP** (L) | Mining ores grants 3× XP |
| **Double EXP** (L) | Mining ores grants 2× XP |
| **Exposure** (L) | Crafting an enchanting table teleports you to surface + Mining Fatigue 1 min |

### 8.8 Team & Social Modifiers

| Scenario | Description |
|----------|-------------|
| **LAFS** (H) | Teams form when two unpaired players hit each other (damage cancelled) |
| **Red vs Blue** (H) | Two teams randomly selected at game start |
| **Blind Dates** (H) | Start as To2; at PvP, receive colored item to find your To4 partners |
| **BAFB** (L) | "Block at First Break" — first block you break determines your team |
| **Breakup** (L) | Large teams split into smaller teams before start |
| **Double Dates** (L) | Two To2 teams randomly paired into To4 |
| **Children Left Unattended** (L) | Teammate death gives survivors speed potion + tamed wolf |
| **Blood Market** (H) | Captains bid health points for players; remaining health = their max HP |

### 8.9 Environmental Hazards

| Scenario | Description |
|----------|-------------|
| **Astrophobia** (H) | Meteors fall creating craters; supercharged creepers; alien skeletons; permanent night |
| **Pyrophobia** (H) | Water → obsidian → lava; lapis/redstone → obsidian; mobs have Fire Resistance |
| **Armageddon** (L) | Random blocks, lava, splash potions fall from the sky |
| **Black Plague** (H) | Land becomes diseased over time; kills passive mobs; buffs hostiles |
| **Doomsday Clock** (H) | Nuclear clock counts down with each death; at midnight: permanent night + exploding squids |
| **Depths** (L) | Lower Y-level = stronger monsters |
| **Nightmare Mode** (H) | Mobs massively buffed (creepers spawn silverfish, skeletons have poison arrows, zombies/spiders buffed) |
| **Passive Monsters** (L) | Hostile mobs don't target players |
| **Raining TNT** (H) | Every minute TNT rains on 2 unlucky players (starts 2 min in) |
| **Grass Explosion** (H) | Walking on grass has 25% chance to explode |
| **Go To Hell** (H) | After 30 min, overworld players take damage every 30s until entering Nether |
| **Lights Out** (L) | Players cannot place torches |
| **Coronavirus** (L) | Every 5 min, a random player gets nausea + poison for 5–60 seconds |

### 8.10 Miscellaneous / Quality of Life

| Scenario | Description |
|----------|-------------|
| **Time Bomb** (H) | Dead player's items placed in chest that explodes after 30 seconds |
| **Chest** (L) | Dead player's items placed in a chest (no explosion) |
| **Safe Loot** (L) | Only the killer can access the spawned chest (when Timebomb active) |
| **WebCage** (L) | Cobwebs spawn around dead players |
| **Bench Blitz** (H) | Only one crafting table can be crafted per game |
| **Companion Bench** (L) | Start with a crafting table; can't craft more |
| **Upside Down Recipes** (L) | All crafting recipes are vertically mirrored |
| **Craftable TP** (L) | Start with 1 ender pearl; rename it in anvil to a player's IGN to teleport near them |
| **Craftable Absorption** (L) | Absorption off by default; surround gapple with 4 more gold for absorption version |
| **Absorption Switch** (L) | Left-click golden apple to toggle absorption on/off |
| **Bats** (L) | Killing a bat: 95% chance golden apple, 5% chance instant death |
| **Circus** (L) | Killing a mob: 25% chance its spawn egg drops |
| **Dolphins** (L) | Swimming grants dolphin-speed; no drowning |
| **Drop** (L) | Start at 0,0; `/drop <quadrant>` teleports to 500,500 in that quadrant for first 5 min |
| **Chameleons** (L) | Player disguised based on their skin in certain biomes |
| **Build UHC** (L) | All players receive a kit |
| **No Diamond Armor** (L) | Can't craft diamond armor |
| **Nine Slots** (L) | Only 9 inventory slots usable |
| **Loot Crate** (L) | Periodic random loot drops to all players |
| **Lucky Roulette** (L) | Every 2 min, players get a random item |
| **Zombies** (L) | Dead player spawns a zombie at their death location |
| **Puppy Power** (L) | Players get 64 bones, 64 rotten flesh, 64 wolf spawn eggs |
| **Cat's Eyes** (L) | Permanent night vision |
| **Noodle Jump** (L) | Permanent jump boost |
| **Every Rose** (L) | Golden chestplate with Thorns 3 at game start |
| **Pyro** (L) | Start with Flame 1 + Fire Aspect 1 books |
| **Meetup** (H) | At configured time, mining disabled, players forced to surface |
| **Triple Drops** (L) | Animal/mob kills drop 3× items |
| **Double Drops** (L) | Animal/mob kills drop 2× items |

---

## 9. Programming Architecture

### 9.1 Plugin Structure (Java)

A well-architected UHC plugin uses a modular design:

```
src/main/java/com/example/uhc/
├── UHCPlugin.java              // Main class (extends JavaPlugin)
├── managers/
│   ├── GameManager.java        // Game state machine, timers, lifecycle
│   ├── TeamManager.java        // Team creation, tracking, disbanding
│   ├── BorderManager.java      // World border control
│   ├── ScenarioManager.java    // Scenario registration, toggling
│   ├── ScatterManager.java     // Safe scatter algorithm
│   ├── WorldManager.java       // World creation, deletion, pregeneration
│   └── StatsManager.java       // Kill/death/win tracking (DB-backed)
├── scenarios/
│   ├── Scenario.java           // Interface or abstract class
│   ├── impl/
│   │   ├── CutCleanScenario.java
│   │   ├── TimeBombScenario.java
│   │   ├── TimberScenario.java
│   │   └── ... (one class per scenario)
├── listeners/
│   ├── GameListener.java       // Core game events (damage, death, join/quit)
│   ├── LobbyListener.java      // Lobby-specific events
│   ├── WorldListener.java      // World-related events
│   └── ChatListener.java       // Chat formatting, team chat
├── commands/
│   ├── UHCCommand.java         // Main command handler
│   ├── TeamCommand.java        // /team create/invite/leave
│   ├── ScenarioCommand.java    // /scenario list/toggle
│   └── ConfigCommand.java      // /config set/get
├── gui/
│   ├── ScenariosMenu.java      // Scenario voting/config GUI
│   ├── TeamMenu.java           // Team selection GUI
│   └── ConfigMenu.java         // Game configuration GUI
├── models/
│   ├── UHCPlayer.java          // Player wrapper (UUID, team, kills, state)
│   ├── UHCTeam.java            // Team wrapper
│   └── GameState.java          // Enum: LOBBY, STARTING, GAME, DEATHMATCH, ENDED
└── utils/
    ├── Utilities.java          // Color codes, messaging, math helpers
    └── LocationUtil.java       // Safe location finding
```

### 9.2 Game State Machine

```java
public enum GameState {
    LOBBY,      // Players joining, configuring
    STARTING,   // Countdown, scatter preparation
    SCATTER,    // Teleporting players
    GRACE,      // PvP disabled, resource gathering
    GAME,       // PvP enabled, full gameplay
    DEATHMATCH, // Final border, meetup
    ENDED       // Winner declared
}
```

### 9.3 Scenario Interface Pattern

```java
public interface Scenario {
    String getName();
    String getDescription();
    Material getIcon();         // For GUI display

    void onEnable();            // Register listeners
    void onDisable();           // Unregister listeners
    void onGameStart();         // Game-start initialization
    void onGameEnd();           // Cleanup

    boolean isActive();
    void setActive(boolean active);
}
```

Dynamic listener registration/unregistration:
```java
// Enable scenario
Bukkit.getPluginManager().registerEvents(scenarioListener, plugin);

// Disable scenario
HandlerList.unregisterAll(scenarioListener);
```

### 9.4 Recommended Design Patterns

| Pattern | Use Case |
|---------|----------|
| **State Pattern** | Game phase management — each state handles its own logic |
| **Observer Pattern** | Notify systems on state changes (scoreboard, Discord, etc.) |
| **Command Pattern** | Map each command to a separate handler class |
| **Singleton Pattern** | GameManager, ConfigManager — single instance guaranteed |
| **Strategy Pattern** | Scenario implementations — pluggable behavior |

### 9.5 Performance Guidelines
- Offload heavy computation to async tasks via `Bukkit.getScheduler()`
- Never block the main thread with world generation or I/O
- Use Paper's async APIs where available
- Minimize per-tick listeners; prefer event-driven updates
- Clean up world, entities, and scoreboard data between matches
- Separate concerns: logic (game mechanics), data (player stats), and presentation (scoreboard/UI)

---

## 10. Key Bukkit/Spigot Events for UHC

### Critical Events

| Event | UHC Usage |
|-------|-----------|
| `PlayerDeathEvent` | Drop golden heads, custom death messages, kill tracking, spectator mode, team elimination |
| `BlockBreakEvent` | CutClean auto-smelt, Timber, Vein Miner, Blood Diamonds damage, ore limits |
| `EntityDamageEvent` | Grace period PvP prevention, NoFall, Fireless, damage tracking |
| `EntityDamageByEntityEvent` | Switcheroo position swap, PvP toggling, combat logging detection |
| `PlayerJoinEvent` / `PlayerQuitEvent` | Lobby management, combat logging penalties |
| `FoodLevelChangeEvent` | Can be used to control saturation mechanics |
| `EntityRegainHealthEvent` | Cancel natural regeneration (the core UHC rule) |
| `PrepareItemCraftEvent` | Block Notch Apple crafting, disable specific recipes |
| `PlayerInteractEvent` | Custom item abilities (backpack opening, etc.) |
| `PlayerMoveEvent` | Sky High Y-level checks, border teleportation |
| `WorldInitEvent` | Attach custom block populators for world generation scenarios |
| `ChunkPopulateEvent` | Ore overhaul, custom structure generation |

### Example: Disabling Natural Regeneration
```java
@EventHandler
public void onRegainHealth(EntityRegainHealthEvent event) {
    if (event.getRegainReason() == RegainReason.SATIATED
        || event.getRegainReason() == RegainReason.REGEN) {
        event.setCancelled(true);
    }
}
```

### Example: CutClean Implementation
```java
@EventHandler
public void onBlockBreak(BlockBreakEvent event) {
    Block block = event.getBlock();
    if (block.getType() == Material.IRON_ORE) {
        event.setDropItems(false);
        block.getWorld().dropItemNaturally(
            block.getLocation(), new ItemStack(Material.IRON_INGOT));
    } else if (block.getType() == Material.GOLD_ORE) {
        event.setDropItems(false);
        block.getWorld().dropItemNaturally(
            block.getLocation(), new ItemStack(Material.GOLD_INGOT));
    }
}
```

### Example: Grace Period PvP Prevention
```java
@EventHandler
public void onDamage(EntityDamageByEntityEvent event) {
    if (gameManager.getState() == GameState.GRACE) {
        if (event.getDamager() instanceof Player
            && event.getEntity() instanceof Player) {
            event.setCancelled(true);
            event.getDamager().sendMessage("§cPvP is disabled during grace period!");
        }
    }
}
```

---

## 11. World Generation & Map Management

### 11.1 Why Custom World Generation Matters

UHC maps need to be:
- **Playable** — no massive oceans dividing the map
- **Fair** — balanced biome distribution
- **Performant** — pre-generated to prevent lag during gameplay
- **Bounded** — within the world border

### 11.2 Ocean Removal

Most UHC servers remove ocean biomes to maximize usable land:

| Minecraft Version | Technique |
|-------------------|-----------|
| **1.8.x** | NMS WorldChunkManager wrapper (Javassist-generated subclass) swaps OCEAN/DEEP_OCEAN/FROZEN_OCEAN/BEACH/SHORE biomes for PLAINS/FOREST/BIRCH_FOREST/FLOWER_FOREST |
| **1.17+** | BiomeProvider proxy replaces ocean biomes |
| **1.9–1.16** | Scatter avoidance only (no biome replacement) |
| **1.18+ Datapacks** | Custom datapack that modifies biome placement rules. Simply replacing biomes isn't enough — must modify terrain shaping splines/density functions to prevent ocean-depth terrain. |

### 11.3 River Thinning
- Configurable `RIVER-REDUCTION-PERCENT`
- Drops a percentage of river cells
- 4-block hash clumps maintain river connectivity
- Reduces water obstacles without eliminating rivers entirely

### 11.4 Spawn Open Zone
- Forces tree-light biome ring around (0,0)
- Ensures scatter area is immediately usable
- Modes:
  - `plains_only` (default) — fully treeless
  - `no_dense` — forest OK, drops FLOWER/DARK/ROOFED variants

### 11.5 Map Pre-Generation

Pre-generating chunks is critical for smooth gameplay:

| Tool | Platform | Notes |
|------|----------|-------|
| **AetherMap (Built-in)** | AetherUHC | Square fill; configurable concurrency (`PREGEN-MAX-CONCURRENT`) |
| **Chunky** | Paper/Spigot/Fabric | Industry standard; square/circular; pause/resume |
| **WorldBorder /wb fill** | Spigot | Legacy approach for 1.8 servers |
| **Custom async generators** | — | Some plugins implement their own using `getChunkAtAsync()` |

### 11.6 Ore Overhaul

Many UHC servers modify ore distribution:

| Preset | Extra Diamond | Extra Gold | Extra Iron | Description |
|--------|--------------|------------|------------|-------------|
| **Vanilla** | — | — | — | No modifications |
| **Standard UHC** (default) | +2 veins/chunk | +3 veins/chunk | +2 veins/chunk | Moderate extra ores |
| **Hard UHC** | +1 vein/chunk | +1 vein/chunk | — | Fewer extra ores; resource pressure |
| **High Ore** | +3 veins/chunk | +6 veins/chunk | +5 veins/chunk | Abundant; faster-paced games |

Ore overhaul is applied per-chunk via `ChunkPopulateEvent`, seeded from `worldSeed XOR (cx * 341873128712 + cz * 132897987541)`.

### 11.7 Vanilla Ore Distribution (1.18+)

| Ore | Y Range | Peak Y | Notes |
|-----|---------|--------|-------|
| **Diamond** | -64 to 16 | -58 | Reduced by air exposure |
| **Gold** | -64 to 32 | -16 | Badlands biomes have increased rates up to Y 256 |
| **Iron** | -64 to 320 | 16 (underground), 232 (mountains) | Two distinct peaks |
| **Lapis** | -64 to 64 | 0 | Concentrated around Y 0 |
| **Redstone** | -64 to 16 | -58 | Similar to diamond |
| **Emerald** | -16 to 320 | 232 | Mountain biomes only |
| **Copper** | -16 to 112 | 48 | Common; large veins |
| **Coal** | 0 to 320 | 96 (primary), 136 (secondary) | Very common |

### 11.8 World Lifecycle

```
Server Start → Delete old UHC world → Create new world →
Apply ocean removal → Pre-generate chunks → Apply ore overhaul →
Post-generation transforms (optional: BigCrack, ChunkApocalypse, etc.) → Ready for game
```

---

## 12. Hosting Configuration & Best Practices

### Hardware Requirements
- **CPU:** High single-core clock speed (GHz) over core count
- **Storage:** NVMe SSD for fast chunk loading/unloading
- **Software:** Use Paper or Purpur (not vanilla/Spigot)

### Recommended Server Software

| Version | Recommended Software |
|---------|---------------------|
| 1.8.x | PaperSpigot 1.8.8 |
| 1.12.2 | Paper 1.12.2 |
| 1.20+ | Paper or Purpur |
| 1.21+ | Paper or Purpur |

### RAM Recommendations

| Player Count | Recommended RAM |
|-------------|----------------|
| 10–30 | 4 GB |
| 30–60 | 6 GB |
| 60–150 | 8 GB |
| 150–300 | 12 GB |
| 300+ | 16+ GB |

> **Warning:** Over-allocating RAM can increase garbage collection pauses. Don't set Xmx higher than necessary.

### Map Size Guidelines

| Player Count | Recommended Map Size |
|-------------|---------------------|
| 1–24 | 1,000 × 1,000 blocks |
| 25–48 | 2,000 × 2,000 blocks |
| 49–80 | 2,500 × 2,500 blocks |
| 80+ | 3,000 × 3,000 blocks |

### Key Performance Settings

```yaml
# server.properties
view-distance=8
simulation-distance=4
sync-chunk-writes=false
max-players=80
difficulty=hard

# spigot.yml
mob-spawn-range: 4
entity-activation-range:
  animals: 16
  monsters: 24
  misc: 8
entity-tracking-range:
  players: 64
  animals: 48
  monsters: 48

# paper-world-defaults.yml
delay-chunk-unloads-by: 10s
max-auto-save-chunks-per-tick: 12
```

### Border Configuration

| Setting | Typical Value | Notes |
|---------|--------------|-------|
| Initial size | 2,000–5,000 blocks | Based on player count |
| Final size | 50–200 blocks | Forces meetup |
| Shrink duration | 30–120 minutes | Usually starts after grace period |
| Center | (0, 0) | Standard; consistent meetup point |
| Border damage | 0.2–1.0 hearts/sec/block | Discourages border hugging |

### Scatter Configuration
- Minimum distance between players: 200–500 blocks
- Validate: solid ground, 3-block air clearance, no ocean biomes
- Team scatter: single location per team, all members teleported together
- Post-teleport block-below failsafe for safety

---

## 13. Anti-Cheat & Moderation

### 13.1 Ore Obfuscation (Anti-Xray)

PaperMC includes built-in anti-xray:

```yaml
# paper-world-defaults.yml
anti-xray:
  enabled: true
  engine-mode: 2    # Recommended for UHC
```

| Engine Mode | Behavior |
|-------------|----------|
| **Mode 1** | Replaces hidden ores with stone — lightweight |
| **Mode 2** | Replaces hidden ores with random fake ores — more effective; impossible for x-ray users to distinguish real from decoy |

External alternative: **Orebfuscator** (uses ProtocolLib)

### 13.2 Stripmining Prevention
- Many UHC servers **ban stripmining** — it allows safe gear acquisition without caving risk
- **CoreProtect** tracks block placement/destruction for staff review
- Staff can inspect mines for suspiciously efficient, non-caving patterns
- Some servers use custom world gen to discourage strip mining

### 13.3 Combat Anti-Cheat

| Cheat Type | Detection Method |
|-----------|-----------------|
| **Kill Aura** | Detect hits while looking away; unnatural target switching |
| **Reach** | Measure hit distances beyond legitimate range |
| **Auto-Clicker** | Analyze click patterns for inhuman consistency |
| **Fly/Speed** | Track movement for impossible positions or velocities |
| **Fast Break** | Monitor block-breaking speed vs tool capability |

#### Recommended Anti-Cheat Plugins

| Plugin | Coverage |
|--------|----------|
| **Spartan** | Combat, movement, inventory |
| **Grim** | Modern packet-level detection |
| **Vulcan** | Modern, actively maintained |
| **NoCheatPlus (NCP)** | Legacy, widely used |
| **Matrix** | Combat, speed, fly hacks |

### 13.4 Moderation Tools

- **Freeze command**: Stops a suspected cheater in place for inspection
- **Spectator mode**: Staff can observe players invisibly
- **Replay systems**: Record and review gameplay
- **Report systems**: Player-submitted reports with evidence
- **CoreProtect logs**: Objective evidence for block/interaction history

### 13.5 Staff Best Practices
- Active staff monitoring in spectator mode is irreplaceable
- Use CoreProtect logs for objective evidence
- Gradual punishment: flag suspicious activity → review → ban if confirmed
- Record evidence for appeals

---

## 14. UI, Scoreboard & Information Display

### Sidebar Scoreboard
Typically displays during gameplay:
- Game timer / episode timer
- Player count (alive / total)
- Kill count
- Current border size
- Active scenarios
- Team information
- Server branding

### Tab List (Player List)
- Player names with team colors
- Health display (hearts or numeric)
- Kill count per player
- Ping indicators

### Action Bar
- Real-time information displayed above hotbar
- Common: coordinates, border distance, compass direction
- Can show scenario-specific info

### Health Display Options
```
/scoreboard objectives add Hearts health
/scoreboard objectives setdisplay list Hearts
/scoreboard objectives modify Hearts rendertype hearts    # Heart icons
# OR
/scoreboard objectives modify Hearts rendertype integer   # Numeric
```

### Player Tracking Compass
- Provided by many UHC plugins (AetherUHC `TRACKER` scenario)
- Points toward nearest player or assigned target
- Can be configured for team-based tracking
- Essential for games with large maps

### Death Messages
- Custom death messages display killer, weapon, health remaining
- Can include distance for bow kills
- Often customizable per scenario

---

## 15. Nether & Potion Management

### Nether Configuration Options

| Setting | Description | Use Case |
|---------|-------------|----------|
| **Enabled** | Full Nether access | Standard competitive UHC |
| **Disabled** | No portal activation | Barebones; simplified games |
| **Speed restricted** | Must mine obsidian (no bucket casting) | Slows Nether rush |
| **Portal trapping banned** | Traps around portals prohibited by rules | Fair play enforcement |

### Strength Potion Balancing

Strength potions are the most controversial UHC mechanic — they can instantly decide fights.

| Approach | Description |
|----------|-------------|
| **Full disable** | No strength potions at all |
| **Tier 1 only** | Strength I allowed; Strength II banned |
| **Nerfed** | Custom flat damage bonus instead of percentage |
| **No restriction** | Full vanilla behavior |

### Other Potion Restrictions (Common)
- **Invisibility:** Often banned — enables "cheap" kills and combat avoidance
- **Splash Health:** Sometimes limited to prevent healing during combat
- **Speed:** Rarely restricted but considered strong

### Why Nether Restrictions Exist
- **Power Creep:** Player with Strength + Speed potions dominates unequipped opponents
- **Game Pacing:** Quick Nether access → "stacked" players within 10–15 minutes
- **Skill Balance:** Game should be decided by PvP skill, not who found a fortress first

---

## 16. UHC Terminology Glossary

| Term | Definition |
|------|-----------|
| **BTC** | "BlameTheController" — passive playstyle; avoiding combat until forced meetup |
| **iPvP** | Indirect PvP — damaging players via environment (lava, fire, cactus) often before PvP is enabled |
| **Cleaning** | Attacking someone immediately after they finish a fight (they're low HP) |
| **Stalking** | Following/tracking a specific player persistently |
| **Snowballing** | Aggressively seeking early kills to accumulate gear exponentially |
| **Portal Trapping** | Building traps around Nether portals to kill players on entry |
| **Cross Teaming** | Players from different teams cooperating — generally banned |
| **Gapple** | Golden Apple (8 gold ingots + apple) |
| **GHead** | Golden Head (8 gold ingots + player head) |
| **Notch Apple** | Enchanted Golden Apple (found in chests only; formerly craftable) |
| **Stacked** | Having full enchanted armor, weapons, potions, and healing |
| **Caving** | Mining underground in natural cave systems (the intended UHC resource method) |
| **Stripmining** | Digging systematic tunnels (often banned in UHC) |
| **Rod** | Using a fishing rod to disrupt opponent's sprint in PvP |
| **Combo** | Landing consecutive hits while preventing opponent from hitting back |
| **Meetup** | Forced convergence at (0,0) — all players must fight |
| **Grace Period** | Initial time where PvP is disabled |
| **Final Heal** | All players healed to full at a set time |
| **Permaday** | Permanent daylight; no night cycle |
| **Scatter** | Random teleportation of players to starting positions |
| **Pregen** | Pre-generation of world chunks before gameplay |
| **Postgen** | Post-generation mutations applied to pre-generated world |
| **FFA** | Free-For-All — solo play |
| **ToX** | Team of X (e.g., To2 = teams of 2) |
| **rToX** | Random team of X |
| **CPS** | Clicks Per Second |
| **KB** | Knockback |
| **RR** | Recorded Round |
| **UBL** | Universal Ban List — community-maintained ban list for cheaters |
| **TPS** | Ticks Per Second — server performance metric (20 = perfect) |

---

## 17. Notable UHC Networks & Servers

### Active (2025–2026)

| Server | Specialty | Version |
|--------|-----------|---------|
| **ArcticMC** | 120+ scenarios, competitive ranked, RR hosting | 1.8–1.21 |
| **PlayUHC** | Custom hosting, Speed UHC, FFA arenas | Multi-version |
| **Hoplite** | Modern competitive UHC, successor to Hypixel UHC | — |
| **MoxMC** | Active player base, fast matchmaking | — |
| **Minemen Club** | Elite competitive PvP, smooth hit registration | 1.8 |
| **CraftMC** | Classic feel with modern updates | — |

### Historical

| Server | Era | Significance |
|--------|-----|-------------|
| **Badlion Network** | 2013–2018 | Premier competitive UHC hub; 250–750 player games; ESL partnership |
| **Hypixel** | 2014–present | UHC Champions mode with progression system (declining activity) |
| **Kohi** | 2014–2016 | Ranked UHC and practice |
| **UHCGG** | 2015–2018 | Popular community-run UHC host |

### Current Community Platforms
- **Community Discord servers** — where most organized UHC events happen
- **Reddit (r/ultrahardcore)** — historical hub; less active but wiki remains a reference
- **Reddit (r/UHCHosts)** — hosting resources and scenario documentation

---

## 18. Open-Source Projects & Resources

### GitHub / GitLab Repositories

| Project | Platform | Description |
|---------|----------|-------------|
| **[UhcCore](https://gitlab.com/UhcCore/UhcCore)** | GitLab | Feature-rich automated UHC; 40+ scenarios; 1.8.8–1.21 support; Gradle build |
| **[HelixOW/UHC-Spigot](https://github.com/HelixOW/UHC-Spigot)** | GitHub | 99 scenarios, stats system, BungeeCord support |
| **[CrimsonWarpedcraft/UHC](https://github.com/CrimsonWarpedcraft/UHC)** | GitHub | Lightweight, minimalist UHC plugin for Paper |
| **[KovuTheHusky/SimplyUHC](https://github.com/KovuTheHusky/SimplyUHC)** | GitHub | Basic UHC rules (older project) |
| **[ArcticMC/Scenarios](https://github.com/ArcticMC/Scenarios)** | GitHub | Complete scenario descriptions with impact ratings |

### Skript Resources

| Source | Description |
|--------|-------------|
| **[skUnity](https://skunity.com)** | Central hub for Skript resources; search "UHC" |
| **GitHub Gists** | Search `"UHC skript" .sk"` for individual scenario scripts |
| **r/ultrahardcore** | Historical wiki with scenario documentation |

### Key Dependencies

| Library | Purpose |
|---------|---------|
| **XSeries (XMaterial, XSound)** | Cross-version Material/Sound/Particle compatibility |
| **ProtocolLib** | Packet manipulation for advanced features |
| **FastBoard** | Lightweight scoreboard API |
| **Adventure API** | Modern text component and formatting |
| **Lombok** | Boilerplate reduction (@Getter, @Setter) |
| **HikariCP** | High-performance database connection pooling |
| **MongoDB Java Driver** | NoSQL database for stats and player data |

---

## 19. Hypixel UHC Champions — Progression System

Hypixel's implementation added RPG-like progression on top of standard UHC:

### Stars & Score

| Action | Score |
|--------|-------|
| 1 Kill | +1 Score |
| 1 Win | +10 Score |
| Star progression | Cosmetic title based on total score |

### Kit System (10 Kits)

Each kit has 3 upgrade levels + a Prestige level. Popular kits:

- **Stone Tool Kit**: Stone tools to start (speeds up early game)
- **Archer Kit**: String + feathers for early bow
- **Loot Kit**: Enhanced chest loot

### Profession System

Professions unlock **Perks** (passive abilities) and **Crafting Recipes** using coins. Key professions:

| Profession | Key Unlocks |
|-----------|-------------|
| **Engineering** | Iron Pack recipe, Speed Mining (Haste) perk |
| **Weaponsmithing** | Better weapon recipes, combat perks |
| **Armor Smithing** | Better armor recipes, Resistance perk |
| **Cooking** | Efficient Golden Apple crafting |

### Extra Ultimates

High-tier recipes requiring multiple maxed professions + large coin investment.

---

## 20. Recorded Rounds & YouTube Culture

### What Are Recorded Rounds?

**Recorded Rounds (RRs)** are private, organized UHC events where every participant records their perspective. Videos are edited and released on a synchronized schedule, creating a serialized tournament viewing experience.

### Landmark Recorded Rounds

| Name | Significance |
|------|-------------|
| **Mindcrack UHC** | The original; popularized the format |
| **WMC (When Miners Cry)** | "OG" Reddit round; set the standard for RR organization |
| **Ambition** | Long-running, large roster; maintained classic UHC feel |
| **Phobia** | Known for creative, complex game modes each season (Pyrophobia, Astrophobia, etc.) |
| **Cynical** | High-skill competitive players |
| **Aureus Pupillam** | Major community round |
| **RnR (Risk & Reward)** | Highly regarded classic RR |
| **Out of Orbit** | Themed seasons (Mars terrain, etc.) |

### RR Culture Elements

- **Custom intro videos** for each season
- **Montage makers** who created highlight compilations
- **Stat trackers** for kills, deaths, and win rates
- **Community Discord servers** for organization
- **~20–30 minute episode format** (synchronized recording with server timer)
- **Cross-community events** like "RR Clash" — different groups compete against each other

### Legacy

The RR format peaked 2013–2016, declined with the 1.9 combat update and shifting creator trends, but remains a nostalgic cultural touchstone. Many current UHC server communities trace their origins to RR groups.

---

## 21. Skript-Based UHC Development

### What is Skript?

**Skript** is a Bukkit plugin that allows server administrators to write gameplay modifiers in an English-like syntax without Java knowledge. It's widely used for prototyping UHC scenarios.

### Example: CutClean in Skript

```
on mine of iron ore:
    cancel event
    drop 1 iron ingot at location of event-block
    set event-block to air

on mine of gold ore:
    cancel event
    drop 1 gold ingot at location of event-block
    set event-block to air
```

### Example: Timber in Skript

```
on break of oak log:
    loop all blocks in radius 10 of event-block:
        loop-block is oak log
        break loop-block naturally using player's tool
```

### Required Addons

| Addon | Purpose |
|-------|---------|
| **skQuery** | Extended conditions and effects |
| **SkBee** | NBT manipulation, custom recipes |
| **Skellett** | Advanced player/entity manipulation |
| **skript-reflect** | Access to raw Java from within Skript |

### Installation

1. Install the **Skript** plugin on your Spigot/Paper server
2. Place `.sk` files in `plugins/Skript/scripts/`
3. Run `/skript reload <filename>` to activate

> **Tip:** Skript is ideal for rapid prototyping and simple servers, but Java plugins are strongly recommended for production UHC servers due to performance and reliability advantages.

---

## 22. AetherUHC-Specific Reference

### Module Architecture

| Module | Purpose |
|--------|---------|
| **API** | Public API surface (events, scenarios, configuration enums) |
| **Base (AetherCore)** | Shared UHC game logic library |
| **WorldGenCore** | Platform-independent world pre-generation and mutation |
| **AetherMapLegacy** | Legacy pregen fill engine (1.8, Java 8) |
| **AetherMapModern** | Modern async/forceload pregen (1.13+, Java 21) |
| **AetherWorldGen** | Standalone world gen plugin (Java 8) |
| **AetherWorldGenModern** | Modern standalone world gen wrapper (Java 21) |
| **Legacy** | Game plugin for 1.8.x–1.12.x |
| **Modern** | Game plugin for 1.13+ Paper |

### Deployment Modes
1. **Integrated:** UHC game plugin includes world generation
2. **Standalone:** Lightweight world-gen-only plugin for staging servers

### Game States (AetherUHC)
```java
public enum GameState { LOBBY, STARTING, GAME, DEATHMATCH, ENDING }
```

### Player States (AetherUHC)
```java
public enum PlayerState { LOBBY, PRACTICE, SCATTERING, SCATTERED, GAME, WINNER, SPECTATING, ALL }
```

### AetherUHC Implemented Scenarios (80+)
As of the current codebase, AetherUHC implements **80+** scenarios covering every major category:
- Resource modification (CutClean, Triple/Double Ores, Blood Diamonds/Gold, Vein Miner, Blast Mining)
- Combat alteration (NoClean, Bowless, Rodless, Melee Fun, Switcheroo, Bow Fighters, 3x Arrows)
- Health mechanics (Best PvE, Lifesteal, Siphon, 100 Hearts, Shared Health, Nine Lives, Gap Zap)
- Team-based (Moles, Kings, LAFS, Red vs Blue, Compensation, Children Left Unattended)
- World mutations (Big Crack, Slimy Crack, Chunk Apocalypse, Underground Parallel, City World, Dragon Rush, Bedrockless, Dungeoneering)
- Phobias (Astrophobia, Pyrophobia, Cryophobia, Armageddon)
- Special modes (Superheroes, Nuzlocke, Assassins, Anonymous, Nightmare Mode, Damage Dodgers)
- QoL (Timber, Hastey Boys variants, Gone Fishing, Infinite Enchant, Tracker, Loot Crate, Genie)

### Configuration Files

All under `Base/src/main/resources/`:

| File | Purpose |
|------|---------|
| `uhcconfiguration.yml` | Gameplay, border, scenarios, voting, sounds |
| `worldmanagement.yml` | World seed, ocean replacement, river thinning, ore overhaul, pregen |
| `border.yml` | Playable border enforcement |
| `language.yml` | Message customization |
| `scoreboard.yml` | Sidebar display configuration |
| `actionbar.yml` | Action bar display |
| `deathmessages.yml` | Custom death messages |
| `discord.yml` | Discord integration |
| `practice.yml` | Practice arena settings |
| `randomizer.yml` | Randomizer scenario configuration |
| `items.yml` | Item configuration |
| `gui.yml` | GUI menu settings |
| `data.yml` | Persistent data |
| `cosmetics.yml` | Cosmetic shop |
| `leaderboards.yml` | Leaderboard display |
| `configmanagement.yml` | Meta-configuration |

### Key Manager Classes
- `ScatterManager` → `ScatterTask` — handles player distribution
- `RandomLocationTask` — async retry for valid scatter positions
- `OreOverhaulManager` — per-chunk ore injection
- `SpawnOpenZone` — tree-light biome ring enforcement
- `OceanBiomeNmsEight` — 1.8 ocean biome replacement (Javassist)
- `NewScenarioManager` — scenario toggle and lifecycle management
- `DragonRushScenarioService` — Dragon Rush post-gen setup
- `Phase1ScenarioService` — initial scenario application

---

## 23. Quick Reference Appendix

### Common UHC Commands

| Command | Purpose |
|---------|---------|
| `/uhc start` | Begin the game |
| `/uhc scatter` | Scatter players |
| `/uhc heal <player>` | Heal a player |
| `/uhc border <size>` | Set border size |
| `/scenario <name>` | Toggle a scenario |
| `/team create <name>` | Create a team |
| `/team invite <player>` | Invite to team |
| `/helpop <message>` | Request staff help |
| `/freeze <player>` | Freeze suspected cheater |

### Essential Gamerules

```
/gamerule naturalRegeneration false    # THE core UHC rule
/gamerule doDaylightCycle true/false   # Control day/night (permaday)
/gamerule doMobSpawning true          # Mob spawning
/gamerule doFireTick false            # Prevent fire spread
/gamerule mobGriefing true/false      # Creeper explosions
/gamerule keepInventory false         # Items drop on death
/gamerule showDeathMessages true      # Broadcast deaths
```

### Golden Apple Math

| Material | Cost | Heal |
|----------|------|------|
| Golden Apple | 8 gold ingots + 1 apple | 2 hearts + 2 absorption |
| Golden Head | 8 gold ingots + 1 player head | 4 hearts + 2 absorption |
| Health Potion II | Nether access + brewing | 4 hearts instant |

### Resource Equivalencies

- 1 diamond ≈ 64 iron (in relative value)
- 8 gold = 1 golden apple = 2 hearts of healing
- 1 player kill = 1 golden head opportunity = 4 hearts potential healing
- Full iron armor = ~60% damage reduction
- Full diamond armor = ~80% damage reduction

---

> *This document was compiled from extensive web research including GitHub repositories, SpigotMC forums, Reddit r/ultrahardcore, PlayUHC documentation, ArcticMC scenario databases, Hypixel community guides, historical Badlion Network archives, and the AetherUHC codebase.*

*Last updated: May 2026*
