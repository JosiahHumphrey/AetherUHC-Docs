# Commands & Permissions

Below is a list of commands and their associated permissions for AetherUHC.

## Host Commands

These commands require the `aetheruhc.host` permission and are used to configure and run the match.

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/host` | Opens the main Host configuration GUI. | `aetheruhc.host` |
| `/scenarios` | Opens the Scenarios manager GUI. | `aetheruhc.host` |
| `/start` | Starts the UHC match (if configured). | `aetheruhc.host` |
| `/heal <player>` | Heals a specific player or all players. | `aetheruhc.host` |
| `/feed <player>` | Feeds a specific player or all players. | `aetheruhc.host` |
| `/revive <player>` | Revives a dead player and teleports them to their death location. | `aetheruhc.host` |

## Player Commands

These commands are available to all players by default.

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/helpop <msg>` | Sends a message to online moderators/hosts. | None |
| `/scenarios` | View the currently active scenarios (read-only for players). | None |
| `/stats` | View your all-time UHC statistics. | None |
| `/leaderboard` | View the top players on the server. | None |
| `/rules` | Read the match rules. | None |
| `/ping` | Check your connection latency to the server. | None |

## Admin Commands

These commands are strictly for server administrators managing the world/plugin.

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/aetheruhc reload` | Reloads the configuration and language files. | `aetheruhc.admin` |
| `/aetheruhc setlobby` | Sets the central lobby spawn location. | `aetheruhc.admin` |
