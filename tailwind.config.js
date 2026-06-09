/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3D91",
        secondary: "#00C389",
        accent: "#FF8A00",
        navy: "#081C3A",
        light: "#F8FAFC",
        white: "#FFFFFF",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #0B3D91, #00C389)',
        'gradient-2': 'linear-gradient(135deg, #081C3A, #0B3D91)',
        'gradient-3': 'linear-gradient(135deg, #00C389, #FF8A00)',
        'gradient-4': 'linear-gradient(135deg, #0B3D91, #081C3A)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 61, 145, 0.15)',
        'card': '0 4px 24px rgba(11, 61, 145, 0.10)',
        'card-hover': '0 16px 48px rgba(11, 61, 145, 0.20)',
        'glow': '0 0 40px rgba(0, 195, 137, 0.3)',
        'glow-accent': '0 0 40px rgba(255, 138, 0, 0.3)',
      },
    },
  },
  plugins: [],
}