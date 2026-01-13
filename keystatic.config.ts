
// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

/**
 * Minimal, working Keystatic config.
 * - Storage: 'local' (files in your repo)
 * - One example collection: "posts" in src/content/posts/*
 *
 * Adapt the collection path and fields to match your site structure.
 * Docs: https://keystatic.com/docs/configuration and Astro guide: https://docs.astro.build/en/guides/cms/keystatic/
 */
export default config({
  storage: { kind: 'local' },

  // Example collection (rename to 'blog', 'recipes', etc. as needed)
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.datetime({
          label: 'Published',
          defaultValue: { kind: 'now' },
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        heroImage: fields.image({ label: 'Hero Image' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
