import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dana: "dana",
      display: [
        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        sm: "0.75rem",
        lg: "4rem",
      },
    },

    extend: {
      colors: {
        "primary-focus": "#d81d33",
        "success-focus": "#099268",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    daisyui,
    plugin(function ({ addBase, theme, addUtilities }) {
      addBase({
        section: {
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          display: "flex",
          flexDirection: "column",
          "@media (min-width: 768px)": {
            paddingTop: theme("padding.10"),
            paddingBottom: theme("padding.10"),
          },
        },
        svg: {
          width: "100%",
          height: "100%",
          display: "inline-block",
        },
      });
      addUtilities({
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".btn": {
          minHeight: "auto",
          fontWeight: "400",
          boxShadow: "none",
        },
        ".prose": {
          maxWidth: "100%",
        },
      });
    }),
  ],
  daisyui: {
    themes: [
      "winter",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "dim",
      "nord",
      "sunset",
    ],
    darkTheme: "winter",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
export default config;
