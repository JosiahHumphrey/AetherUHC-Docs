import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AetherUHC Docs",
  description: "Modern Ultra Hardcore plugin for Minecraft",
  base: "/AetherUHC-Docs/", // Hosted at https://josiahhumphrey.github.io/AetherUHC-Docs/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started/installation' },
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
        items: [
          { text: 'Scenarios', link: '/features/scenarios' },
          { text: 'World Generation', link: '/features/world-generation' },
          { text: 'World Mutation', link: '/features/world-mutation' }
        ]
      },
      {
        text: 'Developer Guide',
        items: [
          { text: 'AetherUHC API', link: '/developer/api' }
        ]
      },
      {
        text: 'Knowledge Base',
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
    }
  }
})
