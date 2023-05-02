/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark: "#1A232E",
        light: "#FBF8FF",
        primary: "#132DA0", // 240,86,199
        primaryDark: "#F4F3FF", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FBF8FF 5px,#FBF8FF 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1A232E 8px,#1A232E 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FBF8FF 5px,#FBF8FF 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1A232E 8px,#1A232E 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FBF8FF 5px,#FBF8FF 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1A232E 6px,#1A232E 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FBF8FF 5px,#FBF8FF 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1A232E 4px,#1A232E 40px)",

      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      mxl: { min: "1279px" },
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      mlg: { min: "1023px" },
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      mmd: { min: "767px" },
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      msm: { min: "639px" },
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
      mxs: { min: "479px" },
  },
  },
  plugins: [],
}
