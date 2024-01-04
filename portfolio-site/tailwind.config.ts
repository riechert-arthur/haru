import type { Config } from 'tailwindcss'

const config: Config = {
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
      },
      minWidth: {
        'nav': '520px',
        'footer-socials': '160px',
        'footer-internals': '630px',
      },
      maxWidth: {
        'nav': '600px',
        'footer-socials': '190px',
        'footer-internals': '650px',
        'landing-hero': '1500px',
      }
    },
  },
  plugins: [],
}
export default config
