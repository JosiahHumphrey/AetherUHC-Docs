# Developer API

AetherUHC exposes a robust, event-driven public API that allows Java developers to hook into the match lifecycle, interact with the Scenario manager, listen to custom events, and create addon plugins that extend UHC gameplay.

---

## Getting the Plugin Instance

The central entry point to all AetherUHC systems is the main plugin singleton:

```java
import net.aetheruhc.plugin.AetherUHC;

AetherUHC api = AetherUHC.getInstance();
```

From here, you can access all managers:

```java
// Check current game state
GameState state = api.getGameManager().getGameState();

// Access the Scenario Manager
ScenarioManager scenarioManager = api.getNewScenarioManager();

// Get the active world
World uhcWorld = api.getWorldManager().getUHCWorld();

// Access team data
TeamManager teamManager = api.getTeamManager();
```

---

## Dependency Setup

### Maven

Because AetherUHC is a multi-module project (supporting Java 8 legacy and Java 21 modern), add the appropriate module as a `provided` dependency. The easiest approach for addon plugins is depending on the compiled JAR file placed in your local Maven repository:

```bash
mvn install:install-file \
  -Dfile=AetherUHC.jar \
  -DgroupId=net.aetheruhc \
  -DartifactId=AetherUHC-API \
  -Dversion=0.4-ALPHA \
  -Dpackaging=jar
```

Then in your `pom.xml`:

```xml
<dependency>
    <groupId>net.aetheruhc</groupId>
    <artifactId>AetherUHC-API</artifactId>
    <version>0.4-ALPHA</version>
    <scope>provided</scope>
</dependency>
```

### Gradle

```kotlin
dependencies {
    compileOnly(files("libs/AetherUHC.jar"))
}
```

---

## Game State

The `GameState` enum represents every phase of an AetherUHC match:

| State | Description |
| :--- | :--- |
| `LOBBY` | Players are in the lobby awaiting the host to start. |
| `SCATTERING` | Players are being teleported to their random starting locations. |
| `GRACE` | Match is live but PvP is disabled (grace period). |
| `PLAYING` | Full match in progress with PvP enabled. |
| `DEATHMATCH` | Deathmatch phase — players are teleported to the arena. |
| `ENDED` | Match is over, winner has been declared. |

```java
GameState state = api.getGameManager().getGameState();
if (state == GameState.PLAYING) {
    // PvP is active
}
```

---

## Scenario Manager

### Checking if a Scenario is Active

```java
import net.aetheruhc.plugin.api.scenarios.Scenario;

boolean isCutClean = api.getNewScenarioManager()
    .getByScenario(Scenario.CUT_CLEAN)
    .isActive();
```

### Getting All Active Scenarios

```java
List<Scenario> active = api.getNewScenarioManager().getActiveScenarios();
active.forEach(s -> Bukkit.broadcastMessage("Active: " + s.getName()));
```

### Enabling / Disabling a Scenario Programmatically

```java
// Enable
api.getNewScenarioManager().getByScenario(Scenario.TIMEBOMB).setActive(true);

// Disable
api.getNewScenarioManager().getByScenario(Scenario.TIMEBOMB).setActive(false);
```

---

## Custom Events

AetherUHC fires standard Bukkit `Event` subclasses. Listen to them with `@EventHandler` in any registered `Listener`.

### Match Lifecycle Events

| Event Class | When it Fires |
| :--- | :--- |
| `UHCGameStartEvent` | When the match officially begins (after scatter, grace period starts). |
| `UHCGraceEndEvent` | When the PvP grace period expires and combat is enabled. |
| `GameDeathmatchEvent` | When the deathmatch countdown completes and players are teleported. |
| `GameEndEvent` | When a winner is declared and the match concludes. |

### Player Events

| Event Class | When it Fires |
| :--- | :--- |
| `UHCPlayerKillEvent` | When a player kills another player. Includes kill/victim metadata. |
| `UHCPlayerDeathEvent` | When a player dies from any cause during a match. |
| `UHCPlayerScatterEvent` | When an individual player is teleported to their scatter location. |

### Scenario Events

| Event Class | When it Fires |
| :--- | :--- |
| `ScenarioToggleEvent` | When any scenario is enabled or disabled. |

### Team Events

| Event Class | When it Fires |
| :--- | :--- |
| `PlayerJoinTeamEvent` | When a player is added to a team. |
| `PlayerLeaveTeamEvent` | When a player is removed from a team. |
| `TeamDisbandEvent` | When a team is fully eliminated and disbanded. |

---

## Example Listener

```java
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import net.aetheruhc.plugin.api.events.UHCGameStartEvent;
import net.aetheruhc.plugin.api.events.UHCPlayerKillEvent;

public class MyAddonListener implements Listener {

    @EventHandler
    public void onGameStart(UHCGameStartEvent event) {
        event.getPlayers().forEach(player -> {
            player.sendMessage("§eMay the odds be ever in your favor!");
        });
    }

    @EventHandler
    public void onKill(UHCPlayerKillEvent event) {
        Player killer = event.getKiller();
        Player victim = event.getVictim();
        int kills = event.getKillerKills(); // Running kill count in this match
        
        killer.sendMessage("§aYou eliminated §e" + victim.getName() + 
            "§a! Total kills: §e" + kills);
    }
}
```

Don't forget to register your listener:

```java
@Override
public void onEnable() {
    Bukkit.getPluginManager().registerEvents(new MyAddonListener(), this);
}
```

---

## Player Data

Access per-player match and lifetime stats:

```java
import net.aetheruhc.plugin.api.data.PlayerData;

PlayerData data = api.getPlayerDataManager().get(player.getUniqueId());

int kills = data.getKills();            // Kills in this match
int allTimeKills = data.getAllTimeKills();
int allTimeWins = data.getAllTimeWins();
double kdr = data.getKDR();
```

---

## Creating Custom Scenarios

The cleanest way to create custom scenario logic is to listen to standard Bukkit events, gate your logic behind the scenario's active state, and check for it inline:

```java
@EventHandler
public void onBlockBreak(BlockBreakEvent event) {
    // Only act if our custom scenario is active
    if (!AetherUHC.getInstance().getNewScenarioManager()
            .getByScenario(Scenario.CUT_CLEAN).isActive()) {
        return;
    }
    // Custom logic here...
}
```

For scenarios that require deep integration (custom GUI icons, lobby-only toggle enforcement, post-gen hooks), the recommended approach is to contribute directly to the `net.aetheruhc.plugin.scenarios.impl` package in the AetherUHC source.

---

## Plugin Dependency Declaration

In your `plugin.yml`, declare AetherUHC as a soft or hard dependency so it loads first:

```yaml
# Hard dependency — your plugin won't load without AetherUHC
depend: [AetherUHC]

# Soft dependency — your plugin loads after AetherUHC if present
softdepend: [AetherUHC]
```
