# Commands & Permissions

This page covers every command available in AetherUHC, who can use it, and what permission node is required.

## Permission Nodes Summary

| Permission | Description |
| :--- | :--- |
| `aetheruhc.host` | Access to all match hosting, configuration, and scenario management |
| `aetheruhc.admin` | Server-level administration (reload, setlobby, debug tools) |
| `aetheruhc.stats.others` | Allows viewing another player's stats with `/stats <player>` |
| *(none required)* | Default player commands accessible to all players |

---

## Host Commands

These commands require the `aetheruhc.host` permission and are used to configure and run the match. The primary interface is the **Host GUI** accessible via `/host`.

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/host` | Opens the main Host configuration GUI. | `aetheruhc.host` |
| `/scenarios` | Opens the Scenario Manager GUI. | `aetheruhc.host` |
| `/scenario enable <name>` | Enables a specific scenario by alias. | `aetheruhc.host` |
| `/scenario disable <name>` | Disables a specific scenario by alias. | `aetheruhc.host` |
| `/scenarios off` | Disables all currently active scenarios. | `aetheruhc.host` |
| `/start` | Starts the UHC match (triggers scatter and countdown). | `aetheruhc.host` |
| `/end` | Forcibly ends the current match. | `aetheruhc.host` |
| `/heal [player\|all]` | Heals a specific player or all players to full health. | `aetheruhc.host` |
| `/feed [player\|all]` | Fills the hunger bar of a specific player or all players. | `aetheruhc.host` |
| `/revive <player>` | Revives a dead/spectating player and teleports them to their death location. | `aetheruhc.host` |
| `/freeze [player\|all]` | Freezes one or all players in place (useful before scatter). | `aetheruhc.host` |
| `/config` | Opens the match configuration panel (border, grace period, etc.). | `aetheruhc.host` |
| `/config admin` | Opens the advanced host admin panel (meetup time, deathmatch settings). | `aetheruhc.host` |

---

## Player Commands

These commands are available to all connected players by default, regardless of permissions.

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/scenarios` | View all currently active scenarios (read-only). | *(none)* |
| `/stats` | View your own all-time UHC statistics (kills, deaths, wins, KDR). | *(none)* |
| `/stats <player>` | View another player's statistics. | `aetheruhc.stats.others` |
| `/leaderboard` | View the top players on the server by kills or wins. | *(none)* |
| `/rules` | Read the current match rules and any host notes. | *(none)* |
| `/ping` | Check your connection latency to the server. | *(none)* |
| `/helpop <message>` | Send a private help message to all online hosts and moderators. | *(none)* |
| `/teaminventory` | Open the shared team inventory *(requires Back Packs scenario)*. | *(none)* |
| `/backpack` | Open your personal extra inventory *(requires Extra Inventory scenario)*. | *(none)* |
| `/recon` | Spend a recon charge to view an enemy's inventory *(requires Enemy Recon scenario)*. | *(none)* |
| `/genie wish <reward>` | Redeem a genie wish for a reward *(requires Genie scenario)*. | *(none)* |

---

## Admin Commands

These commands are intended for server administrators who manage the plugin installation, not for match hosts.

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/aetheruhc reload` | Reloads all configuration files and language files without a server restart. | `aetheruhc.admin` |
| `/aetheruhc setlobby` | Sets the global lobby spawn point to your current location. | `aetheruhc.admin` |
| `/aetheruhc debug` | Prints internal plugin state to console for troubleshooting. | `aetheruhc.admin` |
| `/aetheruhc version` | Displays the current plugin version and build info. | `aetheruhc.admin` |
| `/aetheruhc pregen status` | Shows the current pre-generation progress (chunks complete, ETA). | `aetheruhc.admin` |
| `/aetheruhc pregen cancel` | Cancels an in-progress pre-generation run. | `aetheruhc.admin` |

---

## Command Aliases

Several frequently-used commands have shorter aliases:

| Full Command | Alias |
| :--- | :--- |
| `/aetheruhc` | `/auhc` |
| `/scenarios` | `/s` *(if enabled in config)* |
| `/leaderboard` | `/lb` |
| `/teaminventory` | `/ti` |

---

## Configuring Command Access

By default, all permissions are configured to work with LuckPerms, but any compatible permissions plugin (PermissionsEx, GroupManager) will work. To grant host access to a player:

```bash
# LuckPerms
/lp user <player> permission set aetheruhc.host true

# PermissionsEx
/pex user <player> add aetheruhc.host
```

To create a persistent "Host" group:
```bash
/lp group host permission set aetheruhc.host true
/lp user <player> parent add host
```
