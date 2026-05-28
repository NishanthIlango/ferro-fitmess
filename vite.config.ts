import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // Override the default cloudflare nitro target for Vercel
    plugins: [],
  },
  // Override nitro target to vercel
  nitro: {
    preset: "vercel",
  },
});