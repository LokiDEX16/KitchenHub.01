import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E7A548",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#000000",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#F6E7CE",
          foreground: "hsl(var(--accent-foreground))",
        },
        'neutral-white': '#FFFFFF',
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-2%, 2%)" },
        },
        "slide-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "fade-up": { 
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-top": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ken-burns": "ken-burns 15s ease-out infinite alternate-reverse both",
        "slide-in-bottom": "slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both",
        "slide-in-bottom-delay-1": "slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s both",
        "slide-in-bottom-delay-2": "slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s both",
        "fade-in-delay": "fade-in 1s ease-in 1.5s both",
        "bounce-slow": "bounce-slow 2s infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "slide-in-top": "slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
