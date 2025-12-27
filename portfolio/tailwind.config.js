/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00d4aa',
          50: '#e6fff9',
          100: '#b3ffed',
          200: '#80ffe1',
          300: '#4dffd5',
          400: '#1affc9',
          500: '#00d4aa',
          600: '#00a885',
          700: '#007c60',
          800: '#00503c',
          900: '#002418',
        },
        accent: {
          DEFAULT: '#00a3ff',
          light: '#33b5ff',
          dark: '#0082cc',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#1a1a25',
          200: '#12121a',
          300: '#2a2a35',
          400: '#3a3a45',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #00d4aa 0%, #00a3ff 100%)",
      },
      boxShadow: {
        'glow': '0 0 60px rgba(0, 212, 170, 0.15)',
        'glow-strong': '0 0 100px rgba(0, 212, 170, 0.25)',
        'glow-accent': '0 0 40px rgba(0, 163, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ["dark"],
  },
};
