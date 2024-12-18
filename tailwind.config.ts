import type { Config } from 'tailwindcss';

const tailwindConfig = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
} satisfies Config;

export default tailwindConfig;
