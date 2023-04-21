/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        ...defaultTheme,
        container: {
            center: true
        },
        colors: {
            dark: {
                DEFAULT: "#181818"
            },
            disaster: {
                DEFAULT: ""
            }
        },
        extend: {
            fontFamily: {
                escore: ["S-CoreDream-3Light"]
            }
        }
    },
    plugins: [require("flowbite/plugin")]
};
