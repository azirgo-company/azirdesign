import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}"], // escanea tus componentes de la LIB
  theme: { extend: {} },
  plugins: [
    require("tailwindcss-animate"), // si lo usas
  ],
} satisfies Config
