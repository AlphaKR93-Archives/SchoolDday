// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                escore: ["S-CoreDream-3Light"]
            }
        },
        keyframes: {
            buttonLoading: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" }
            }
        },
        animation: {
            loading: "buttonLoading 0.7s linear infinite"
        }
    },
    plugins: [
        "flowbite/plugin",
        plugin(function Plugin({ addComponents }) {
            addComponents({
                ".bg-pri": {
                    background: "var(--primary)"
                },
                ".bg-sec": {
                    background: "var(--secondary)"
                },
                ".bg-hg": {
                    background: "var(--highlight)"
                },
                ".border-pri": {
                    borderColor: "var(--primary)"
                },
                ".border-sec": {
                    borderColor: "var(--secondary)"
                },
                ".border-hg": {
                    borderColor: "var(--highlight)"
                },
                ".shadow-pri": {
                    boxShadow: "var(--shadow)"
                },
                ".shadow-hg": {
                    boxShadow: "var(--shadow-highlight)"
                },
                ".shadow-in": {
                    boxShadow: "var(--shadow-inner)"
                },
                ".text-pri": {
                    color: "var(--text-primary)"
                },
                ".text-sec": {
                    color: "var(--text-secondary)"
                },
                ".text-hg": {
                    color: "var(--text-highlight)"
                },
                ".fill-pri": {
                    fill: "var(--text-primary)"
                },
                ".fill-sec": {
                    fill: "var(--text-secondary)"
                },
                ".trans": {
                    transition: "all 0.2s ease-in-out"
                },
                ".style-list": {
                    listStyle: "'- '"
                }
            });
        })
    ]
};
