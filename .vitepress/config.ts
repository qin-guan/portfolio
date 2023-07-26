import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qin Guan",
  description: "Cybersecurity student at Ngee Ann Polytechnic",
  lastUpdated: true,
  themeConfig: {
    outline: 'deep',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qin-guan' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/qin-guan' }
    ],
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Projects',
        link: '/projects'
      }
    ]
  }
})
