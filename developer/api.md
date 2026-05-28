# Developer API

AetherUHC exposes a robust event-driven API, allowing Java developers to easily hook into the match lifecycle, interact with the Scenario manager, or broadcast custom messages.

## Maven Dependency

Because AetherUHC is a multi-module project (supporting both Java 8 legacy servers and Java 21 modern servers), you should depend on the `API` or `Base` module when building your plugin. If you're building a simple listener, linking directly against the compiled `AetherUHC.jar` on your local machine is the easiest path.

## Accessing the Plugin Instance

The central entrypoint to all managers in AetherUHC is the main plugin instance:

```java
import net.aetheruhc.plugin.AetherUHC;

AetherUHC api = AetherUHC.getInstance();
```

From here, you can access the various Game Managers:
```java
// Check the current state of the game
GameState state = api.getGameManager().getGameState();
if (state == GameState.PLAYING) {
    // ...
}

// Check if a scenario is active
if (api.getNewScenarioManager().getByScenario(Scenario.CUTCLEAN).isActive()) {
    // ...
}
```

## Custom Events

AetherUHC fires custom Bukkit events that you can listen to using standard `@EventHandler` methods.

### Match Lifecycle Events
- `UHCGameStartEvent`: Fired exactly when the match begins, after players are scattered and the countdown reaches zero.
- `GameDeathmatchEvent`: Fired when the deathmatch countdown completes and players are teleported to the arena.
- `GameEndEvent`: Fired when a winner is declared and the match concludes.

### Example Listener

```java
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import net.aetheruhc.plugin.api.events.UHCGameStartEvent;

public class MyAddonListener implements Listener {

    @EventHandler
    public void onGameStart(UHCGameStartEvent event) {
        // Broadcast a custom message when the game starts
        event.getPlayers().forEach(player -> {
            player.sendMessage("§eMay the odds be ever in your favor!");
        });
    }
}
```

## Custom Scenarios

If you wish to create custom scenarios beyond the 139+ included, the best approach is to listen to standard Bukkit events (e.g. `BlockBreakEvent`, `EntityDamageEvent`) and gate your logic behind a custom boolean toggle in your own addon plugin, or contribute directly to the `net.aetheruhc.plugin.scenarios.impl` package within the AetherUHC source!
