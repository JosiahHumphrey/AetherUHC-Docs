# Bungee Announce Setup

If you run a network of multiple servers (e.g., connected via BungeeCord or Velocity), you can configure AetherUHC to broadcast network-wide announcements when a UHC match is about to start!

This helps drive players from your Lobby server into your UHC server.

## Setup Instructions

1. **Enable Redis/Bungee**: Ensure you have a Redis server installed and running. AetherUHC uses Redis Pub/Sub to instantly send messages across the network.
2. **Configure Settings**: Open `plugins/AetherUHC/settings.yml` and locate the Redis section:
   ```yaml
   REDIS:
     ENABLED: true
     URI: "redis://user:password@localhost:6379"
   ```
3. **Configure Announcements**: In `uhcconfiguration.yml`, locate the `ANNOUNCE` section.
   ```yaml
   ANNOUNCE:
     BUNGEE: true
     SERVER_NAME: "UHC-1"
     MESSAGES:
       - "&8[&3AetherUHC&8] &7A match is starting on &b<server> &7in &b<time>&7!"
       - "&8[&3AetherUHC&8] &7Type &b/join <server> &7to play!"
   ```
4. **Proxy Plugin**: You will need a companion proxy plugin (like a generic Redis Announcer for BungeeCord/Velocity) to listen to the specific Redis channels published by AetherUHC and broadcast them to players on other servers.

By default, AetherUHC publishes announcements to the `aetheruhc:announce` channel.
