import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],                // for UI/body text
                serif: ['Playfair Display', 'serif'],         // for headings/logo
            },
        },
    },
    plugins: [],
};

export default config;
