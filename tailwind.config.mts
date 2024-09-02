import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      xs: '375px',
      md: '768px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '11px',
        md: '110px',
        xl: '80px',
      },
    },
    colors: {
      border: 'hsl(var(--border))', //hsl(0, 0%, 85%)
      input: 'hsl(var(--input))', //
      background: 'hsl(var(--background))', //hsl(0, 0%, 98%)
      foreground: 'hsl(var(--foreground))', //hsl(0, 0%, 20%)
      primary: {
        DEFAULT: 'hsl(var(--primary))', //hsl(237 45% 29%)
        foreground: 'hsl(var(--primary-foreground))', //hsl(0 0% 98%)
      },
      secondary: {
        300: {},
        500: {
          DEFAULT: 'hsl(var(--secondary))', //hsl(210, 40%, 96%)
          foreground: 'hsl(var(--secondary-foreground))', //hsl(222, 47%, 11%)
        },
        700: {},
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))', //#d9d9d9
        foreground: 'hsl(var(--muted-foreground))', //hsl(0 0% 98%)
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))', //hsl(237 70% 61%)
        foreground: 'hsl(var(--accent-foreground))', //hsl(0 0% 98%)
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 20px)',
        sm: 'calc(var(--radius) - 35px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
