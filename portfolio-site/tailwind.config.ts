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
    },
  },
  plugins: [],
}
export default config
