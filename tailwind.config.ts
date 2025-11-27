import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        smsSky: {
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#cecefe",
          400: "#7DD3FC",
          500: "#38BDF8",
          600: "#0EA5E9",
        },
        smsPurple: {
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#C084FC",
          400: "#A855F7",
          500: "#9333EA",
          600: "#7E22CE",
        },
        smsYellow: {
          100: "#FFFBEB",
          200: "#FEF3C7",
          300: "#fae27c",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
      },
    },
  },
  plugins: [],
};
export default config;
