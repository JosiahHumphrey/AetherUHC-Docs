# Installation

Welcome to AetherUHC! This guide will help you install and configure the plugin on your Minecraft server.

## Supported Versions

AetherUHC is built as a multi-module project to support two primary Minecraft eras:
- **Legacy:** `1.8.8` (Requires Java 8 or higher)
- **Modern:** `1.20+` (Requires Java 21)

We heavily recommend using **Paper** or its forks (e.g., Purpur, Pufferfish) for the best performance.

## Step-by-Step Installation

1. **Download the Plugin**: Obtain the latest `AetherUHC.jar` release.
2. **Place in Plugins Folder**: Move the `.jar` file into your server's `plugins/` directory.
3. **Start the Server**: Run your server to generate the default configuration files.
4. **Configure Database**: AetherUHC supports SQLite (default) and MongoDB. By default, it works out of the box with SQLite. If you are running a network, see [Database Setup](./database.md) to configure MongoDB.
5. **Restart**: Restart your server after modifying any configuration files.

## Recommended Server Properties

To ensure the best UHC experience, configure your `server.properties` with the following:

```properties
spawn-protection=0
generate-structures=true
hardcore=false
difficulty=hard
pvp=true
```

## Next Steps
- Learn how to configure your [Database](./database.md).
- Review all [Commands & Permissions](../configuration/commands-permissions.md).
