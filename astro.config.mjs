// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import catppuccin from "@catppuccin/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  // This disables Node.js experimental type stripping by configuring esbuild
  // to target 'esnext', which prevents the experimental feature from being used.
  // Resolves "(node:54497) ExperimentalWarning: Type Stripping is an experimental feature and might change at any time"
  vite: {
    esbuild: {
      target: "esnext",
    },
  },

  integrations: [
    mermaid({
      theme: "default",
    }),
    starlight({
      title: "David's Projects",
      favicon: "favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dfinster",
        },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        },
      ],
      plugins: [
        // catppuccin({
        //   dark: { flavor: "macchiato", accent: "mauve" },
        //   light: { flavor: "latte", accent: "mauve" },
        // }),
      ],
      sidebar: [
        {
          label: "Dotfiles",
          autogenerate: { directory: "dotfiles" },
        },
        {
          label: "mkwww",
          autogenerate: { directory: "mkwww" },
        },
        {
          label: "clean-branches",
          autogenerate: { directory: "clean-branches" },
        },
      ],
    }),
  ],
});
