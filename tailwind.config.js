/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0d1632",
        mint: "#62f2c8",
        ember: "#ff8b53",
        sky: "#75a8ff"
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        glow: "0 25px 90px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top left, rgba(117,168,255,0.22), transparent 28%), radial-gradient(circle at 85% 18%, rgba(98,242,200,0.18), transparent 25%), linear-gradient(180deg, #030611 0%, #07101d 42%, #091329 100%)"
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        drift: "drift 18s linear infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(25px,-10px,0)" },
          "100%": { transform: "translate3d(0,0,0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" }
        }
      }
    }
  },
  plugins: []
};
