/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                escore: ["S-CoreDream-3Light"]
            }
        }
    },
    plugins: [require("flowbite/plugin")]
};
