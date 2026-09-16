/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          dark: '#0a0e27',
          darker: '#050813',
          card: '#1a1f3a',
          accent: '#ff006e',
          neon: '#00d9ff',
          success: '#00ff41',
          warning: '#ffbe0b',
          danger: '#ff006e',
        },
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #ff006e 0%, #00d9ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
