import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42008C',   // Sua cor personalizada
        secondary: '#DDFF21', // Sua cor personalizada
        background: '#181818', // Sua cor personalizada
      },
      
    },
  },
  plugins: [],
}
export default config
