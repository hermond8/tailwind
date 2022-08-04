/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'xl': {'max': '1280px'},
            'lg': {'max': '992px'},
            'md': {'max': '768px'},
            'sm': {'max': '488px'},
        },
        container: {
            padding: '20px',
            center: true
        },
        extend: {},
    },
    plugins: [],
}
