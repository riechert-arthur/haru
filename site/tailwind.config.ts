import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'polygon-scatter': "url('/polygon-scatter.svg')",
        'menu-icon': "url('/menu.svg')",
        'night-icon': "url('/night-mode.svg')",
        'sun-icon': "url('/sun.svg')",
      },
      minWidth: {
        'nav': '520px',
        'footer-socials': '150px',
        'footer-internals': '630px',
      },
      maxWidth: {
        'nav': '600px',
        'footer-socials': '190px',
        'footer-internals': '650px',
        'large-screens': '1500px',
      }
    },
  },
  plugins: [],
}
export default config
