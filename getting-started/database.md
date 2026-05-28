# Database Setup

AetherUHC requires a database to store player statistics, match history, scenario preferences, and team records. Two database backends are supported:

| Backend | Best For | Setup Required |
| :--- | :--- | :--- |
| **SQLite** *(default)* | Single servers, local testing | None |
| **MongoDB** | Multi-server networks with shared stats | Yes |

---

## SQLite (Default — Zero Configuration)

SQLite is enabled automatically when MongoDB is not configured. No additional software or credentials are required. AetherUHC will create a file called `aetheruhc.db` inside `plugins/AetherUHC/` on first boot.

Data stored per-player:
- Kill count, death count, wins
- All-time KDR
- Match participation history

> [!NOTE]
> SQLite data is local to the server it runs on. If you run multiple UHC servers on the same network, each server will have its own separate player database. Use MongoDB if you need unified stats across all servers.

---

## MongoDB (Recommended for Networks)

MongoDB allows multiple AetherUHC servers to share the **same database**, enabling global leaderboards, cross-server stats, and unified player records.

### Prerequisites
- A running MongoDB instance (local or hosted via MongoDB Atlas, etc.)
- A database user with read/write access to the target database

### Configuration

Open `plugins/AetherUHC/settings.yml` and locate the `MONGO` section:

```yaml
MONGO:
  ENABLED: true
  URI: "mongodb://user:password@localhost:27017/admin"
  DATABASE: "AetherUHC"
```

| Key | Description |
| :--- | :--- |
| `ENABLED` | Set to `true` to activate MongoDB (disables SQLite) |
| `URI` | Your full MongoDB connection string |
| `DATABASE` | The name of the database to store AetherUHC collections in |

After editing, restart the server. AetherUHC will create the required collections automatically on first boot.

### Connection String Examples

**Local MongoDB (no auth):**
```
mongodb://localhost:27017
```

**Local MongoDB (with auth):**
```
mongodb://myUser:myPassword@localhost:27017/admin
```

**MongoDB Atlas (cloud-hosted):**
```
mongodb+srv://myUser:myPassword@cluster0.mongodb.net/AetherUHC?retryWrites=true&w=majority
```

> [!WARNING]
> If your MongoDB server is externally hosted, ensure your Minecraft server's IP address is whitelisted in the MongoDB firewall / Atlas Network Access settings. Connection timeouts are almost always caused by missing IP whitelisting.

> [!CAUTION]
> Never commit your MongoDB URI (with password) to a public repository. Use environment variables or keep `settings.yml` in your `.gitignore`.

---

## MariaDB / MySQL (Alternative)

AetherUHC also supports relational database backends via HikariCP. To use MariaDB or MySQL:

```yaml
SQL:
  ENABLED: true
  HOST: "localhost"
  PORT: 3306
  DATABASE: "aetheruhc"
  USERNAME: "uhcuser"
  PASSWORD: "yourpassword"
```

> [!NOTE]
> If both `MONGO.ENABLED` and `SQL.ENABLED` are true, MongoDB takes priority.

---

## Verifying the Connection

After restarting with the database configured, check `logs/latest.log` for the following line:

```
[AetherUHC] Database connected successfully. (MongoDB | AetherUHC)
```

If you instead see a connection error, double-check your URI, credentials, and that the database server is reachable from the Minecraft host.

---

## Migrating from SQLite to MongoDB

If you started with SQLite and want to move to MongoDB:

1. Stop the server.
2. Enable MongoDB in `settings.yml`.
3. Restart the server. Players will start accumulating stats in MongoDB from this point forward.

> [!NOTE]
> Historical SQLite data is not automatically migrated. If you need to preserve historical player records, a manual migration script will be required.
