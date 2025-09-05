/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7e5f", // your main brand color
        secondary: "#feb47b", // gradient secondary
        muted: {
          foreground: "#6b7280", // for text-muted
        },
        
      },
      fontSize: {
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      spacing: {
        28: "7rem", // padding top
        16: "4rem", // padding bottom
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #ff7e5f, #feb47b, #ff7e5f)",
      },
      boxShadow: {
        "glow": "0 0 15px rgba(255,126,95,0.6), 0 0 30px rgba(254,180,123,0.4)",
      },
    },
  },
  plugins: [],
};











