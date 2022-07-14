/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                'regal-blue': '#120858',
                'red-orange': '#C86163'
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}