import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

/**
 * Tiny dependency-free rehype plugin: wrap every markdown <table> in
 * <div class="table-wrap"> so wide tables scroll horizontally on phones.
 */
function rehypeWrapTables() {
  const visit = (node) => {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'table') {
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrap'] },
          children: [child],
        };
      }
      visit(child);
      return child;
    });
  };
  return (tree) => visit(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://qinguan.me',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      shikiConfig: {
        theme: 'github-dark',
      },
      rehypePlugins: [rehypeWrapTables],
    }),
  },
});
