/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F7FAF7',
        foreground: '#171717',
        muted: '#6B7280',
        border: '#E8ECE9',
        primary: {
          DEFAULT: '#2E8B57',
          hover: '#237346',
        },
        accent: {
          DEFAULT: '#57C785',
          light: '#EAF9EF',
        },
        success: '#22C55E',
        card: '#FFFFFF',
        'dark-bg': '#0D1117',
        'dark-card': '#161B22',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['72px', { lineHeight: '1.1', fontWeight: '800' }],
        'section-heading': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        paragraph: ['18px', { lineHeight: '1.8' }],
      },
      borderRadius: {
        button: '16px',
        card: '24px',
        hero: '32px',
        input: '18px',
        badge: '999px',
      },
      maxWidth: {
        container: '1400px',
      },
      boxShadow: {
        'premium-sm': '0 6px 20px rgba(0,0,0,.06)',
        'premium-md': '0 15px 45px rgba(0,0,0,.08)',
        'premium-lg': '0 25px 70px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [],
}
