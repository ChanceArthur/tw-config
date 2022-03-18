const mix = require("laravel-mix");

mix.options({
  manifest: false,
  postCss: [require("tailwindcss/nesting"), require("tailwindcss")],
  processCssUrls: false,
});

mix.css("style.css", "compiled/");
