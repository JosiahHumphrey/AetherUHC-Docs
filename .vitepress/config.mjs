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
        text: 'Features',
        items: [
          { text: 'Scenarios', link: '/features/scenarios' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Commands & Permissions', link: '/configuration/commands-permissions' }
        ]
      },
      {
        text: 'Knowledge Base',
        items: [
          { text: 'What is UHC?', link: '/knowledge-base/index' }
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
