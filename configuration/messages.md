# Messages & Chat Formatting

AetherUHC allows you to completely customize every player-facing message, title, and chat format in the plugin. These messages are defined in your `Language.java` enum, and are serialized to the `lang.yml` or `uhcconfiguration.yml` file upon startup.

## Formatting Codes

AetherUHC supports both standard Bukkit color codes (`&`) and modern hexadecimal colors (`#HEX`).

### Standard Colors
Use the `&` symbol followed by a character (0-9, a-f) to format text for older Minecraft versions:

```yaml
PREFIX: "&3Aether &8»&r "
```

### HEX Colors (1.16+)
If your server is running Minecraft 1.16 or newer, you can use high-resolution HEX colors to create seamless gradients and vibrant themes. 

Use the format `&#<hexcode>` to apply a hex color:

```yaml
PREFIX: "&#03D1EBAether &#467780»&r "
```

## Modifying Messages

To change a message:
1. Open your `plugins/AetherUHC/uhcconfiguration.yml` (or `lang.yml` if configured separately).
2. Locate the message you want to change (e.g., `DEATH_MESSAGE`).
3. Modify the string. Note that some strings contain internal variables like `<player>` or `<killer>` which are parsed dynamically.
4. Save the file and type `/aetheruhc reload` in-game to apply the changes immediately.

> [!WARNING]
> Do not remove placeholders like `<player>` from essential messages, as this will break the context of the broadcast!
