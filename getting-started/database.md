# Database Setup

AetherUHC requires a database to store player stats, ranks, scenario preferences, and match history. 

By default, AetherUHC uses **SQLite**, which requires zero setup and stores data locally in a `.db` file within your `plugins/AetherUHC` directory.

However, if you are running a multi-server network (e.g., using BungeeCord or Velocity) and want global stats across all your UHC servers, you should configure **MongoDB**.

## Configuring MongoDB

Open your `settings.yml` file generated in the `plugins/AetherUHC` directory. Locate the `MONGO` section:

```yaml
MONGO:
  ENABLED: true
  URI: "mongodb://user:password@localhost:27017/admin"
  DATABASE: "AetherUHC"
```

1. Change `ENABLED` to `true`.
2. Update the `URI` with your MongoDB connection string. Ensure the user has read/write permissions to the database.
3. Restart your server.

> [!WARNING]
> If your MongoDB server is hosted externally, ensure you whitelist your Minecraft server's IP address in your MongoDB firewall settings to prevent connection timeouts.

## SQLite (Default)

If you leave `MONGO.ENABLED` as `false`, the plugin will automatically generate an `aetheruhc.db` file and use SQLite. No further action is required!
