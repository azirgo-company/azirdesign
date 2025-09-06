import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    client: "src/client.ts", // NUEVO
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "react-hook-form",
    "@clerk/nextjs",
    "@radix-ui/react-accordion",
    "@radix-ui/react-alert-dialog",
    "@radix-ui/react-avatar",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-label",
    "@radix-ui/react-select",
    "@radix-ui/react-separator",
    "@radix-ui/react-slot",
    "@radix-ui/react-tooltip",
    "@refinedev/core",
    "@refinedev/nestjs-query",
    "@refinedev/react-table",
    "@refinedev/ui-types",
    "@tanstack/react-table",
    "camelcase-keys",
    "class-variance-authority",
    "lucide-react",
    "next",
    "tailwind-merge",
  ],
})
