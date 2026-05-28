# Bungee Announce Setup

If you run a **multi-server network** (BungeeCord, Velocity, or similar), you can configure AetherUHC to broadcast network-wide announcements whenever a UHC match is about to start. These announcements appear in the chat of players on your Lobby server, driving them to join the UHC server.

---

## Architecture Overview

AetherUHC uses **Redis Pub/Sub** to send messages across the network without a direct server-to-server connection. The flow is:

```
AetherUHC (UHC Server)
       │
       │  Publishes to Redis channel: "aetheruhc:announce"
       ▼
   Redis Server
       │
       │  Subscribed listeners on your Proxy/Lobby receive the message
       ▼
 BungeeCord / Velocity Plugin
       │
       │  Broadcasts the announcement to all online players
       ▼
   Players on Lobby
```

---

## Setup Instructions

### Step 1: Install & Configure Redis

1. Install a Redis server. For Linux: `apt install redis-server`. For Docker: `docker run -d -p 6379:6379 redis`.
2. Ensure Redis is accessible from your Minecraft server's host machine.

### Step 2: Configure AetherUHC

Open `plugins/AetherUHC/settings.yml` and fill in the Redis section:

```yaml
REDIS:
  ENABLED: true
  URI: "redis://localhost:6379"
```

**With password authentication:**
```yaml
REDIS:
  ENABLED: true
  URI: "redis://user:password@localhost:6379"
```

**With TLS (Redis Cloud, Upstash, etc.):**
```yaml
REDIS:
  ENABLED: true
  URI: "rediss://user:password@your-host.upstash.io:6380"
```

### Step 3: Configure Announcements

In `uhcconfiguration.yml`, locate and configure the `ANNOUNCE` section:

```yaml
ANNOUNCE:
  BUNGEE: true
  SERVER_NAME: "UHC-1"
  TRIGGER_SECONDS_BEFORE: 120    # Announce 2 minutes before /start
  MESSAGES:
    - "&8[&3AetherUHC&8] &7A match is starting on &b<server> &7in &b<time>&7!"
    - "&8[&3AetherUHC&8] &7Type &b/server <server> &7to join!"
  TITLE:
    ENABLED: true
    TITLE: "&3&lAetherUHC"
    SUBTITLE: "&7A match is starting on &b<server>&7!"
```

| Key | Description |
| :--- | :--- |
| `BUNGEE` | Set to `true` to enable network-wide announcements. |
| `SERVER_NAME` | The display name of this UHC server in announcements. |
| `TRIGGER_SECONDS_BEFORE` | How many seconds before match start to fire the announce. |
| `MESSAGES` | List of chat messages to broadcast. |
| `TITLE.ENABLED` | Whether to also send a title screen to lobby players. |

### Step 4: Install a Companion Proxy Plugin

You need a companion plugin on your **BungeeCord or Velocity proxy** (or directly on your Lobby server) that subscribes to AetherUHC's Redis channel and broadcasts the messages.

AetherUHC publishes to the channel: **`aetheruhc:announce`**

The message payload is a JSON object:
```json
{
  "server": "UHC-1",
  "messages": ["&8[&3AetherUHC&8] A match is starting..."],
  "title": "&3&lAetherUHC",
  "subtitle": "&7Match starting on UHC-1!",
  "timeSeconds": 120
}
```

Any Redis subscriber on your proxy/lobby can receive and broadcast this.

---

## Variables in Announce Messages

| Variable | Description | Example |
| :--- | :--- | :--- |
| `<server>` | The `SERVER_NAME` set in config | `UHC-1` |
| `<time>` | Formatted time until match start | `2 minutes` |
| `<players>` | Number of players registered for the match | `24` |
| `<scenarios>` | Comma-separated active scenarios | `CutClean, Timebomb` |

---

## Testing Your Setup

1. Configure Redis and restart the server.
2. Set `TRIGGER_SECONDS_BEFORE: 5` temporarily for a quick test.
3. Run `/start` and wait ~5 seconds — you should see the announce messages fire to the console log.
4. Check your Lobby server to confirm players received the message.

> [!TIP]
> Check your Redis server is reachable: from your Minecraft host, run `redis-cli -h <host> ping`. If it returns `PONG`, the connection is working.

> [!WARNING]
> If Redis is not reachable, AetherUHC will log a warning on startup but will **not crash**. Bungee announces will simply be skipped silently. Check `logs/latest.log` for `[AetherUHC] Redis connection failed` messages.
