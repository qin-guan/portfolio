import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qin Guan",
  description: "Cybersecurity student at Ngee Ann Polytechnic",
  lastUpdated: true,
  head: [
    [
      'script',
      { type: 'text/javascript' },
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "hj26osxaew");`
    ]
  ],
  themeConfig: {
    outline: 'deep',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qin-guan' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/qin-guan' }
    ]
  }
})
