---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AetherUHC"
  text: "Ultra Hardcore Plugin for Modern Minecraft"
  tagline: The ultimate solution for hosting competitive, customizable UHC matches — with 139+ scenarios, built-in world pre-generation, and seamless support for both 1.8 and 1.20+.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/installation
    - theme: alt
      text: Browse Scenarios
      link: /features/scenarios
    - theme: alt
      text: Developer API
      link: /developer/api

features:
  - icon: 🎭
    title: 139+ Scenarios
    details: Fully implemented, highly configurable scenarios out of the box — from CutClean and Timebomb to Nuzlocke, Kings, LAFS, Moles, and dozens more. Toggle any combination live from the in-game GUI.
  - icon: 🖥️
    title: Multi-Version Support
    details: Built as a modular project to seamlessly support legacy 1.8.8 (Java 8) and modern 1.20+ Paper (Java 21) from the same codebase, with version-specific optimizations for each.
  - icon: 🗺️
    title: Built-In World Pre-Generation
    details: No need for Chunky or WorldBorder. AetherUHC's async pregen engine generates 200–500 chunks/sec on modern servers, completing a standard 2000-block border in under 5 minutes.
  - icon: 🌋
    title: Post-Gen World Mutations
    details: Big Crack, Slimy Crack, Chunk Apocalypse, Underground Parallel, and Dragon Rush physically transform the map after generation using a tick-budgeted, TPS-aware mutation engine.
  - icon: 🏔️
    title: Beta 1.7.3 World Generation
    details: Experience authentic legacy terrain generation precisely matching Beta 1.7.3 — massive mountain ranges, vast flat plains, and chaotic cave systems.
  - icon: 📊
    title: Stats & Leaderboards
    details: Track player kills, wins, deaths, and KDR with SQLite (out of the box) or MongoDB for global networked stats across multiple servers. Full PlaceholderAPI support.
---
