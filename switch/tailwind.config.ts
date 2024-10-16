import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '200px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: '#4EF8D2',
        customRed: '#DC2625'
      },
    },
  },
  plugins: [],
};
export default config;
