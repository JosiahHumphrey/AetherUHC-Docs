import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AetherUHC Docs",
  description: "Modern Ultra Hardcore plugin for Minecraft — 139+ scenarios, multi-version support, and built-in world pre-generation.",
  base: "/AetherUHC-Docs/", // Hosted at https://josiahhumphrey.github.io/AetherUHC-Docs/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started/installation' },
      { text: 'Scenarios', link: '/features/scenarios' },
      { text: 'Developer API', link: '/developer/api' },
      { text: 'Knowledge Base', link: '/knowledge-base/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Database Setup', link: '/getting-started/database' }
        ]
      },
      {
        text: 'Configuration',
        collapsed: false,
        items: [
          { text: 'Commands & Permissions', link: '/configuration/commands-permissions' },
          { text: 'Messages & Formatting', link: '/configuration/messages' },
          { text: 'Placeholders', link: '/configuration/placeholders' },
          { text: 'Scoreboards & Menus', link: '/configuration/scoreboards' },
          { text: 'Bungee Announce', link: '/configuration/bungee-announce' }
        ]
      },
      {
        text: 'Features',
        collapsed: false,
        items: [
          {
            text: 'Scenarios',
            link: '/features/scenarios',
            items: [
              { text: 'World Modifiers', link: '/features/scenarios#world-modifiers' },
              { text: 'Ore Tweaks', link: '/features/scenarios#ore-tweaks' },
              { text: 'Loot & Drops', link: '/features/scenarios#loot--drops' },
              { text: 'Combat', link: '/features/scenarios#combat' },
              { text: 'Enchanting & Crafting', link: '/features/scenarios#enchanting--crafting' },
              { text: 'Hazards & Events', link: '/features/scenarios#hazards--events' },
              { text: 'Health & Healing', link: '/features/scenarios#health--healing' },
              { text: 'Abilities & Buffs', link: '/features/scenarios#abilities--buffs' },
              { text: 'Team Scenarios', link: '/features/scenarios#team-scenarios' },
              { text: 'Restriction Scenarios', link: '/features/scenarios#restriction-scenarios' },
              { text: 'Special Mechanics', link: '/features/scenarios#special-mechanics' },
            ]
          },
          { text: 'World Generation', link: '/features/world-generation' },
          { text: 'World Mutation', link: '/features/world-mutation' }
        ]
      },
      {
        text: 'Developer Guide',
        collapsed: false,
        items: [
          { text: 'AetherUHC API', link: '/developer/api' }
        ]
      },
      {
        text: 'Knowledge Base',
        collapsed: true,
        items: [
          { text: 'Comprehensive UHC Guide', link: '/knowledge-base/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Josiah/AetherUHC' }
    ],
    
    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under a proprietary license.',
      copyright: 'Copyright © 2015–2025 Aether UHC'
    },

    editLink: {
      pattern: 'https://github.com/Josiah/AetherUHC/edit/main/docs/:path',
      text: 'Suggest an edit on GitHub'
    }
  }
})
