module.exports = {
    plugins: {
        "tailwindcss/nesting": {},
        "tailwindcss": {},
        "autoprefixer": {},
        "postcss-import": {},
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
    }
};
