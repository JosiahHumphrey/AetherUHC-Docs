# Installation

Welcome to AetherUHC! This guide walks you through everything needed to get the plugin running on your Minecraft server — from downloading the JAR to launching your first match.

## Supported Versions

AetherUHC is built as a multi-module project supporting two primary Minecraft eras:

| Edition | Minecraft Version | Java Version |
| :--- | :--- | :--- |
| **Legacy** | `1.8.8` | Java 8+ |
| **Modern** | `1.20+` | Java 21 |

> [!TIP]
> We strongly recommend using **Paper** or a Paper fork (Purpur, Pufferfish) for the best performance. AetherUHC takes advantage of Paper-specific APIs for async chunk loading, world borders, and event optimizations that are unavailable on vanilla Spigot.

---

## Choosing Your JAR

There are two plugin JARs depending on your server version:

| JAR | Target Server | Notes |
| :--- | :--- | :--- |
| `AetherUHC-Legacy.jar` | 1.8.8 CraftBukkit / SpigotMC | Includes NMS-based ocean removal, 1.8 crack populators |
| `AetherUHC.jar` | 1.20+ Paper / Purpur | Full async pregen engine, modern data pack support |

Place the appropriate JAR in your `plugins/` directory. **Do not load both simultaneously.**

---

## Step-by-Step Installation

### 1. Download the Plugin
Obtain the latest release JAR from the releases page. Confirm you have the correct edition (Legacy vs Modern).

### 2. Place in Plugins Folder
Move the `.jar` file into your server's `plugins/` directory.

### 3. First Boot
Start the server. AetherUHC will generate all default configuration files in `plugins/AetherUHC/`:
- `uhcconfiguration.yml` — Main configuration
- `worldmanagement.yml` — Pre-generation and world settings
- `settings.yml` — Database and Redis settings
- `lang.yml` — All player-facing messages

### 4. Configure Database
By default, AetherUHC uses SQLite and works immediately with no setup. For networked deployments requiring shared stats, see the [Database Setup](./database) guide.

### 5. Set the Lobby Spawn
Join the server, navigate to where you want the lobby, and run:
```
/aetheruhc setlobby
```

### 6. Set a Host
Grant host permissions to a player so they can use the configuration GUI:
```
/lp user <player> permission set aetheruhc.host true
```

### 7. Start Your First Match
- Type `/host` to open the Host Configuration menu.
- Configure your border size, grace period, and other match settings.
- Toggle scenarios with `/scenarios`.
- When ready, type `/start` to begin the pre-scatter countdown.

---

## Recommended Server Properties

Configure `server.properties` for the best UHC experience:

```properties
spawn-protection=0
generate-structures=true
hardcore=false
difficulty=hard
pvp=true
max-players=100
view-distance=10
```

---

## Recommended Paper Configuration

In `paper.yml` or `paper-global.yml`, consider these settings:

```yaml
# Allow async chunk generation (Modern only)
async-chunks:
  enable: true
  load-threads: -1  # Use all available CPU cores

# Prevent automatic mob spawning during pregen
entity-per-chunk-save-limit:
  monster: 70
  animal: 20
```

---

## Permissions Overview

| Permission | Description |
| :--- | :--- |
| `aetheruhc.host` | Full access to match configuration, scenarios, and start commands |
| `aetheruhc.admin` | Server-level admin commands (reload, setlobby, debug) |
| *(none)* | Default player commands (stats, rules, ping, helpop) |

---

## Troubleshooting Installation

**The plugin doesn't load / throws errors on startup:**
- Ensure you are running the correct JAR for your server version.
- Check that Java 21 is installed if using the Modern JAR (`java -version`).
- Look for `[AetherUHC]` lines in `logs/latest.log` for specific error messages.

**Commands don't appear / players can't use `/host`:**
- Make sure the player has the `aetheruhc.host` permission node.
- If using LuckPerms: `/lp user <name> permission set aetheruhc.host true`.

**Map generation is very slow:**
- See the [World Generation](../features/world-generation) guide for tuning options.
- Consider increasing `PREGEN-MAX-WORKING-COUNT` in `worldmanagement.yml`.

---

## Next Steps

- Configure your [Database](./database) for networked stat tracking.
- Review all [Commands & Permissions](../configuration/commands-permissions).
- Configure [World Generation](../features/world-generation) for your map.
- Browse the [Scenario List](../features/scenarios) to plan your match.
