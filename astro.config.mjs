// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import starlightClientMermaid from "@pasqal-io/starlight-client-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [
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
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" },
        }),
        starlightClientMermaid({
          mermaidConfig: {
            theme: "base",
            themeVariables: {
              // Light theme (Catppuccin Latte)
              primaryColor: "#8839ef",
              primaryTextColor: "#4c4f69",
              primaryBorderColor: "#1e66f5",
              lineColor: "#6c6f85",
              secondaryColor: "#1e66f5",
              tertiaryColor: "#df8e1d",
              background: "#eff1f5",
              mainBkgColor: "#eff1f5",
              secondBkgColor: "#dce0e8",
              tertiaryBkgColor: "#bcc0cc",
              // Dark theme support
              darkMode: true,
              primaryColorDark: "#cba6f7",
              primaryTextColorDark: "#cdd6f4",
              primaryBorderColorDark: "#89b4fa",
              lineColorDark: "#6c7086",
              secondaryColorDark: "#89b4fa",
              tertiaryColorDark: "#f9e2af",
              backgroundDark: "#1e1e2e",
              mainBkgColorDark: "#1e1e2e",
              secondBkgColorDark: "#313244",
              tertiaryBkgColorDark: "#45475a"
            }
          }
        }),
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
