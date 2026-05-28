# Scoreboards & Menus

AetherUHC features a fully custom, **anti-flicker packet-based scoreboard** system. The scoreboard updates every second and dynamically changes depending on the current phase of the game (Lobby → Scattering → Grace Period → Playing → Deathmatch → Ended).

---

## How It Works

The scoreboard is implemented using raw NMS/Paper packets instead of Bukkit's ScoreboardManager. This prevents the classic "flicker" effect seen in plugins that update scoreboards by clearing and re-adding entries every tick. Each line is a stable scoreboard team entry that only updates its prefix/suffix string when the value actually changes.

---

## Enabling & Disabling

In `uhcconfiguration.yml`:

```yaml
SCOREBOARD:
  ENABLED: true
```

Set to `false` if you prefer to use an external scoreboard plugin (AnimatedScoreboard, FeatherBoard, TAB, etc.) and want to feed it data via [PlaceholderAPI](./placeholders).

---

## Configuring the Scoreboard

Each game phase has its own independently configured scoreboard. Open `plugins/AetherUHC/uhcconfiguration.yml` and find the `SCOREBOARD` section:

```yaml
SCOREBOARD:
  ENABLED: true

  LOBBY:
    TITLE: "&3&lAetherUHC"
    LINES:
      - "&7-----------------"
      - " "
      - "&7Players: &b<players>"
      - "&7Host: &b<host>"
      - " "
      - "&7Server: &bNA-1"
      - " "
      - "&7-----------------"

  PLAYING:
    TITLE: "&c&lUHC"
    LINES:
      - "&7-----------------"
      - " "
      - "&7Kills: &b<kills>"
      - "&7Alive: &b<alive>"
      - "&7Border: &b<border>"
      - "&7Timer: &b<timer>"
      - " "
      - "&7-----------------"

  DEATHMATCH:
    TITLE: "&4&lDeathmatch"
    LINES:
      - "&7-----------------"
      - " "
      - "&7Kills: &b<kills>"
      - "&7Alive: &b<alive>"
      - " "
      - "&7-----------------"
```

### Available Phases

| Phase Key | When it Shows |
| :--- | :--- |
| `LOBBY` | Before the match starts, while in the pre-game lobby. |
| `SCATTERING` | While players are being teleported to scatter locations. |
| `GRACE` | After scatter, during the PvP grace period. |
| `PLAYING` | Full match in progress. |
| `DEATHMATCH` | During the final deathmatch phase. |
| `ENDED` | After a winner is declared. |

---

## Scoreboard Variables

Use these inside any scoreboard line's value string:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `<players>` | Total number of connected players | `24` |
| `<alive>` | Number of players currently alive | `18` |
| `<dead>` | Number of eliminated players | `6` |
| `<host>` | Display name of the current host | `Steve` |
| `<kills>` | The viewing player's kill count | `3` |
| `<border>` | Current world border radius | `1000` |
| `<timer>` | Formatted elapsed game time | `45:00` |
| `<grace>` | Remaining grace period time | `10:00` |
| `<scenarios>` | Comma-separated active scenarios | `CutClean, Timebomb` |

You can also use any **PlaceholderAPI** `%placeholder%` directly inside scoreboard lines, as long as PAPI is installed.

---

## Formatting Tips

- **Empty Lines:** Use `" "` (a space in quotes) to create blank divider lines between entries.
- **Line Limits:** In Minecraft 1.8, scoreboards have a strict **15-line maximum** and a **32-character maximum per line** (including color codes). If your server only supports 1.13+ clients, these limits do not apply.
- **Colors:** Use `&` color codes freely. HEX colors (`&#RRGGBB`) only render on 1.16+ clients.
- **Width:** Use `&7&m` (strikethrough gray) dividers like `"&7&m--------------"` to create visually clean separators.

---

## Configuring Menus

The **Scenario Manager GUI** and **Host Configuration GUI** are built with fixed slot layouts to prevent duplication exploits and ensure reliable click handling. The slot positions and item types for functional buttons are not configurable.

However, cosmetic items (the fill glass panes, background items, join item in lobby) **can** be customized in `uhcconfiguration.yml`:

```yaml
MENUS:
  JOIN_ITEM:
    MATERIAL: "COMPASS"
    NAME: "&a&lJoin UHC"
    LORE:
      - "&7Click to join the match!"

  SPECTATE_ITEM:
    MATERIAL: "ENDER_PEARL"
    NAME: "&7Spectate"
    LORE:
      - "&7Watch the match unfold."
```

> [!NOTE]
> Scenario icons in the Scenario Manager GUI use the materials defined in the `Scenario` enum and cannot be changed without modifying the source code.

---

## Using an External Scoreboard Plugin

If you disable AetherUHC's built-in scoreboard (`SCOREBOARD.ENABLED: false`), you can use any PAPI-compatible scoreboard plugin. Example configuration for **FeatherBoard**:

```yaml
# FeatherBoard group
Group:
  - type: "TEXT"
    value: "&3&lAetherUHC"
  - type: "TEXT"
    value: "&7--------------"
  - type: "TEXT"
    value: "&7Alive: &b%aetheruhc_alive_players%"
  - type: "TEXT"
    value: "&7Kills: &b%aetheruhc_kills%"
  - type: "TEXT"
    value: "&7Border: &b%aetheruhc_border%"
  - type: "TEXT"
    value: "&7Timer: &b%aetheruhc_timer%"
```

See the [Placeholders](./placeholders) page for the full list of available `%aetheruhc_*%` values.
