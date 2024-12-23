import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ONE Launcher — Docs",
  description: "The Minecraft Launcher for modded multiplayer servers",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Launcher Tutorials', link: '/tutorials/first-example', activeMatch: '/tutorials' },
      { text: 'Content Instance', link: '/content/create-content', activeMatch: '/content' },
      { text: 'Main Website', link: 'https://onelauncher.zmito.eu/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Launcher Tutorials',
        items: [
          { text: 'First Feature', link: '/tutorials/first-example' },
          { text: 'Second Feature', link: '/tutorials/second-example' }
        ]
      },
      {
        text: 'Content Instance',
        items: [
          { text: 'How to create a Content instance', link: '/content/create-content' },
          {
            text: 'Content Release',
            base: '/content/release/',
            items: [
              { text: 'Create Content Release', link: 'create' },
              { text: 'Publish Content Release', link: 'publish' }
            ]
          },
          {
            text: 'Content JSON',
            base: '/content/json/',
            items: [
              { text: 'Create Content JSON', link: 'create' },
              { text: 'Publish Content JSON', link: 'publish' }
            ]
          },
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License',
      copyright: `Copyright © 2024-${new Date().getFullYear()} Zmito26`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zmito26dev/docs.onelauncher.zmito.eu' }
    ]
  }
})
