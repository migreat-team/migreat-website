export default {
  content: [
    "./views/**/*.handlebars",
    "./src/styles/**/*.css",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb'
        }
      }
    }
  },
  plugins: []
};
