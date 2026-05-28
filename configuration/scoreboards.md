# Scoreboards & Menus

AetherUHC features a completely anti-flicker, packet-based scoreboard system. The scoreboard dynamically changes depending on the current phase of the game (Lobby, Scattering, Playing, Deathmatch).

## Configuring the Scoreboard

To modify the scoreboard lines, open `plugins/AetherUHC/uhcconfiguration.yml`. You will find sections for each game state:

```yaml
SCOREBOARD:
  LOBBY:
    TITLE: "&3&lAetherUHC"
    LINES:
      - "&7----------------"
      - "Players: &b<players>"
      - "Host: &b<host>"
      - " "
      - "Server: &bNA-1"
      - "&7----------------"
```

### Tips for Scoreboards
- **Empty Lines:** Use `" "` (a space inside quotes) to create blank lines.
- **Line Limits:** Minecraft 1.8 has a strict 15-line limit and 32-character limit per line for scoreboards. However, since AetherUHC supports modern versions, you can safely exceed this limit if your server only allows 1.13+ clients.
- **Placeholders:** You can use AetherUHC's internal `<variables>` or standard PlaceholderAPI `%placeholders%` on any line.

## Disabling the Internal Scoreboard

If you are using a dedicated external scoreboard plugin (like AnimatedScoreboard or FeatherBoard) and wish to disable AetherUHC's built-in scoreboard:

1. Open `uhcconfiguration.yml`.
2. Set `SCOREBOARD.ENABLED` to `false`.
3. Reload the plugin.

You can then use [PlaceholderAPI variables](./placeholders.md) in your custom scoreboard plugin to display UHC stats.

## Configuring Menus

The size, title, and layout of internal menus (such as the Scenarios Menu or the Configurator) are hardcoded into the Java plugin to ensure anti-dupe safety and click-sync logic. However, the items inside the menu (like the `JoinItem` or the Scenario icons) can be customized via the configuration file, allowing you to change their Materials, Names, and Lore!
