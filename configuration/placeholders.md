# Placeholders & Variables

AetherUHC integrates natively with **PlaceholderAPI** (PAPI) to allow you to display UHC statistics, states, and timers anywhere on your server—from holograms to external scoreboard plugins or chat prefixes!

To use these placeholders, ensure you have PlaceholderAPI installed on your server.

## Global Placeholders

These placeholders return information about the current state of the UHC match and are the same for all players.

| Placeholder | Description | Example Output |
| :--- | :--- | :--- |
| `%aetheruhc_state%` | The current game state. | `LOBBY`, `SCATTERING`, `PLAYING`, `DEATHMATCH`, `ENDED` |
| `%aetheruhc_timer%` | The formatted countdown or elapsed match time. | `45:00` |
| `%aetheruhc_alive_players%` | The number of players currently alive. | `24` |
| `%aetheruhc_spectators%` | The number of players currently spectating. | `5` |
| `%aetheruhc_border%` | The current size of the world border. | `1000` |
| `%aetheruhc_scenarios%` | A comma-separated list of active scenarios. | `CutClean, Timebomb` |

## Player Placeholders

These placeholders return statistics specific to the player viewing them.

| Placeholder | Description | Example Output |
| :--- | :--- | :--- |
| `%aetheruhc_kills%` | The player's kill count in the current match. | `3` |
| `%aetheruhc_team_kills%` | The combined kill count of the player's team. | `5` |
| `%aetheruhc_alltime_kills%` | The player's all-time total kill count. | `142` |
| `%aetheruhc_alltime_wins%` | The player's all-time total wins. | `12` |
| `%aetheruhc_alltime_deaths%` | The player's all-time total deaths. | `89` |
| `%aetheruhc_alltime_kdr%` | The player's all-time Kill/Death Ratio. | `1.59` |

## Internal Variables
Inside of `Language.java` and internal plugin messages, AetherUHC uses its own fast parsing system instead of PlaceholderAPI. You will often see variables wrapped in `< >`. 
- `<player>`: The relevant player's name.
- `<killer>`: The name of the player who killed them.
- `<time>`: A formatted time string. 
