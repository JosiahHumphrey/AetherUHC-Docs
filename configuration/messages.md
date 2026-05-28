# Messages & Chat Formatting

AetherUHC allows you to fully customize every player-facing message, title, action bar, and chat announcement. All messages are defined in `plugins/AetherUHC/lang.yml` (or within `uhcconfiguration.yml` depending on your version).

---

## Formatting Codes

AetherUHC supports both the classic Bukkit `&` color codes and modern hexadecimal RGB colors on 1.16+ servers.

### Standard Color Codes

Use the `&` symbol followed by a single character to apply formatting:

| Code | Result |
| :--- | :--- |
| `&0` – `&9`, `&a` – `&f` | Colors (black → white) |
| `&l` | **Bold** |
| `&o` | *Italic* |
| `&n` | Underline |
| `&m` | Strikethrough |
| `&k` | Obfuscated (random characters) |
| `&r` | Reset all formatting |

**Example:**
```yaml
KILL_MESSAGE: "&c<killer> &7eliminated &c<player>&7!"
```

### HEX / RGB Colors (1.16+)

Use `&#RRGGBB` syntax for full 16-million-color support:

```yaml
PREFIX: "&#03D1EBAether &#467780»&r "
```

> [!NOTE]
> HEX colors are **only rendered on 1.16+ clients**. Legacy 1.8 clients will see the raw code or nothing. If your server supports both 1.8 and modern clients, stick with standard `&` codes for maximum compatibility.

### MiniMessage (Modern Only)

On Paper 1.20+ builds, AetherUHC supports [MiniMessage](https://docs.advntr.dev/minimessage/format.html) syntax for advanced gradient and hover formatting:

```yaml
PREFIX: "<gradient:#03D1EB:#3A7BD5>AetherUHC</gradient> <dark_gray>»</dark_gray> "
```

---

## Editing Messages

1. Open `plugins/AetherUHC/lang.yml`.
2. Find the message key you want to change.
3. Edit the string value.
4. Save the file and run `/aetheruhc reload` to apply changes without restarting.

> [!WARNING]
> Do not remove internal `<placeholders>` from messages. Removing `<player>` from a death message, for example, will cause the message to print literally without a player name.

---

## Message Reference

### Match Lifecycle

| Key | Default Message | Variables |
| :--- | :--- | :--- |
| `GAME_START` | `&aThe game has started! Good luck!` | — |
| `SCATTER_START` | `&eScattering players...` | — |
| `GRACE_START` | `&aPvP grace period started. &7(&b<time>&7)` | `<time>` |
| `GRACE_END` | `&cPvP is now enabled! Good luck!` | — |
| `DEATHMATCH_START` | `&cDeathmatch begins in &e<time>&c!` | `<time>` |
| `GAME_END` | `&aGame over! Winner: &e<player>` | `<player>` |

### Kill & Death Messages

| Key | Default Message | Variables |
| :--- | :--- | :--- |
| `KILL_MESSAGE` | `&c<killer> &7eliminated &c<player>&7!` | `<player>`, `<killer>` |
| `DEATH_VOID` | `&c<player> &7fell into the void.` | `<player>` |
| `DEATH_FALL` | `&c<player> &7fell to their death.` | `<player>` |
| `DEATH_FIRE` | `&c<player> &7burned to death.` | `<player>` |
| `DEATH_DROWN` | `&c<player> &7drowned.` | `<player>` |
| `TEAM_ELIMINATED` | `&cTeam &e<team> &chas been eliminated!` | `<team>` |

### Scenario Messages

Scenario-specific messages are prefixed with the scenario alias:

```yaml
SCENARIO_CUTCLEAN_SMELT: "&7[CutClean] &bYour &a<item> &bwas auto-smelted."
SCENARIO_TIMEBOMB_SPAWN: "&c[TimeBomb] &7<player>'s loot will explode in &c30 seconds&7!"
SCENARIO_TRACKER_RESULT: "&7[Tracker] &bNearest player: &e<player> &bat &b<distance> &bblocks."
```

---

## Titles & Action Bars

AetherUHC sends important information as on-screen **titles** and **action bars**. These can be configured in the `TITLES` and `ACTIONBAR` sections of `uhcconfiguration.yml`:

```yaml
TITLES:
  GRACE_END:
    TITLE: "&c&lPvP ENABLED"
    SUBTITLE: "&7Grace period has ended!"
    FADE_IN: 10
    STAY: 40
    FADE_OUT: 10

ACTIONBAR:
  PLAYING:
    MESSAGE: "&7Kills: &b<kills> &7| Alive: &b<alive> &7| Border: &b<border>"
    INTERVAL_TICKS: 20
```

---

## Chat Prefix

The global plugin prefix used on all non-title messages:

```yaml
PREFIX: "&3Aether &8» &r"
```

Change this to match your server's branding. All messages that use the prefix will automatically inherit the new value.

---

## Tips & Best Practices

- Use `&7` (gray) for non-important descriptive text to keep the important parts visually distinct.
- Keep kill messages short — they appear in a small area of the chat.
- Avoid using `&k` (obfuscated) for anything other than purely decorative elements.
- Test your messages by using `/aetheruhc reload` — no restart needed.
