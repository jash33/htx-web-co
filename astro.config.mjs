// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Set this to your actual production domain
  site: "https://jash33.github.io", // TODO: Set this to your actual production domain
  base: "/htx-web-co",

  // Build optimizations
  build: {
    // Inline stylesheets smaller than 4kb
    inlineStylesheets: "auto",
  },

  // Vite configuration for bundling optimizations
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Minify CSS and JS in production
      minify: "esbuild",
      // Target modern browsers for smaller bundles
      target: "es2020",
      // Rollup options for tree shaking and code splitting
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            // Separate vendor chunks if needed in the future
          },
        },
      },
    },
    // CSS preprocessing options
    css: {
      devSourcemap: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      // Include dependencies that need pre-bundling
      include: [],
    },
  },

  // Compression is handled at the server/CDN level
  // These options configure how Astro builds assets

  // Prefetch configuration for faster navigation
  prefetch: {
    prefetchAll: false, // Only prefetch visible links
    defaultStrategy: "hover", // Prefetch on hover
  },

  integrations: [
    sitemap({
      // Exclude any admin, private, or utility routes if they exist
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/private") &&
        !page.includes("/api/"),
      // Customize sitemap entries if needed
      serialize(item) {
        // Default priority and changefreq
        item.changefreq = "weekly";
        item.priority = 0.7;
        // Home page gets higher priority
        if (item.url.endsWith("/")) {
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],

  // Server configuration
  server: {
    // Enable compression in dev
    headers: {
      // Security headers
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
    },
  },
});
