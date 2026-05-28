# Placeholders & Variables

AetherUHC integrates natively with **PlaceholderAPI (PAPI)** to expose UHC game data anywhere on your server — from holographic displays to external scoreboard plugins, tab-list formatters, or chat prefixes.

> [!NOTE]
> To use `%aetheruhc_*%` placeholders, ensure **PlaceholderAPI** is installed on your server. Download it from [PlaceholderAPI's SpigotMC page](https://www.spigotmc.org/resources/placeholderapi.6245/).

---

## Global Placeholders

These placeholders return information about the **current state of the match** and return the same value for all players.

| Placeholder | Description | Example Output |
| :--- | :--- | :--- |
| `%aetheruhc_state%` | Current game state. | `LOBBY`, `SCATTERING`, `PLAYING`, `DEATHMATCH`, `ENDED` |
| `%aetheruhc_timer%` | Formatted countdown or elapsed match time. | `45:00` |
| `%aetheruhc_alive_players%` | Number of players currently alive. | `24` |
| `%aetheruhc_dead_players%` | Number of eliminated players. | `8` |
| `%aetheruhc_spectators%` | Number of players currently spectating. | `5` |
| `%aetheruhc_border%` | Current world border radius in blocks. | `1000` |
| `%aetheruhc_scenarios%` | Comma-separated list of all active scenarios. | `CutClean, Timebomb` |
| `%aetheruhc_scenario_count%` | Number of currently active scenarios. | `3` |
| `%aetheruhc_grace_active%` | Whether PvP grace period is currently active. | `true` or `false` |
| `%aetheruhc_grace_timer%` | Remaining time in the grace period. | `12:30` |
| `%aetheruhc_host%` | Display name of the current match host. | `Steve` |
| `%aetheruhc_teams_enabled%` | Whether team mode is enabled. | `true` or `false` |

---

## Player Placeholders

These placeholders return **statistics specific to the player** who is viewing the element (e.g., their own kill count in their own scoreboard line).

| Placeholder | Description | Example Output |
| :--- | :--- | :--- |
| `%aetheruhc_kills%` | Player's kill count in the current match. | `3` |
| `%aetheruhc_team_kills%` | Combined kill count of the player's team. | `5` |
| `%aetheruhc_alltime_kills%` | Player's all-time total kills. | `142` |
| `%aetheruhc_alltime_wins%` | Player's all-time total wins. | `12` |
| `%aetheruhc_alltime_deaths%` | Player's all-time total deaths. | `89` |
| `%aetheruhc_alltime_kdr%` | Player's all-time Kill/Death Ratio. | `1.59` |
| `%aetheruhc_alltime_games%` | Total number of games the player has participated in. | `64` |
| `%aetheruhc_team%` | The name/color of the player's current team. | `Red` |
| `%aetheruhc_is_alive%` | Whether the player is currently alive. | `true` or `false` |

---

## Scenario State Placeholders

Check whether a specific scenario is currently active using its alias:

```
%aetheruhc_scenario_<ALIAS>%
```

**Examples:**

| Placeholder | Returns |
| :--- | :--- |
| `%aetheruhc_scenario_CUT_CLEAN%` | `true` or `false` |
| `%aetheruhc_scenario_TIMEBOMB%` | `true` or `false` |
| `%aetheruhc_scenario_BIG_CRACK%` | `true` or `false` |

This is useful for conditional display in holograms or custom scoreboards — only show relevant information when a specific scenario is active.

---

## Internal Message Variables

Inside `lang.yml` and internal plugin messages, AetherUHC uses its own lightweight variable parser (faster than PAPI for hot-path messages). Variables use `<angle_bracket>` syntax:

| Variable | Description | Used In |
| :--- | :--- | :--- |
| `<player>` | The relevant player's display name | Kill messages, death messages, teleport notices |
| `<killer>` | The name of the player who secured the kill | Kill messages |
| `<time>` | A formatted time string (e.g., `45:00`) | Grace period, countdown messages |
| `<border>` | Current border radius | Border shrink messages |
| `<team>` | The player's team name/color | Team messages |
| `<server>` | Server name (for Bungee announce) | Bungee announce messages |
| `<distance>` | Distance in blocks | Tracker scenario |
| `<item>` | Item display name | CutClean auto-smelt message |
| `<reward>` | Reward name | Genie wish message |
| `<kills>` | Kill count | In-game action bar |
| `<alive>` | Alive player count | In-game action bar |

> [!WARNING]
> These internal variables (`<player>`, `<killer>`, etc.) only work inside AetherUHC's own message system. Do not use them in external plugins like CMI or EssentialsX — those use different syntax.

---

## Example Integrations

### TAB List Plugin (TAB by NEZNAMY)

```yaml
header: "&3AetherUHC &7| %aetheruhc_state%"
footer: "&7Alive: &b%aetheruhc_alive_players% &7| Border: &b%aetheruhc_border%"
```

### FeatherBoard Scoreboard

```yaml
lines:
  - "&7Kills: &b%aetheruhc_kills%"
  - "&7Alive: &b%aetheruhc_alive_players%"
  - "&7Border: &b%aetheruhc_border%"
  - "&7Scenarios: &b%aetheruhc_scenario_count%"
```

### CMI Hologram

```
/cmi hologram addline UHC_Status %aetheruhc_state% | %aetheruhc_alive_players% alive
```
