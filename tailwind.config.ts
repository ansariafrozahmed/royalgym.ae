import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        templatePrimary: "#a37664",
        templateWhite: "#ffffff",
        templateBlack: "#000000",
        templateDark: "#242424",
      },
    },
  },
  plugins: [],
} satisfies Config;
