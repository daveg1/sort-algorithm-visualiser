module.exports = {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
