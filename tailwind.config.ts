import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenDef: "var(--green-default)",
        DarkDef: "var(--dark-default)",
        whiteDef: "var(--white-default)",
      },
      fontFamily:{
        sg_Bold:'var(--SG-BOLD)',
        sg_light:'var(--SG-LIGHT)',
        sg_medium:'var(--SG-MEDIUM)',
        sg_regular:'var(--SG-REGULAR)',
        sg_semibold:'var(--SG-SEMIBOLD)',
        sg_var:'var(--SG-VARIABLE)'
      }
    },
  },
  plugins: [],
};
export default config;
