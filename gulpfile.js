const nunjucksRender = require("gulp-nunjucks-render");
const gulp = require("gulp");
const data = require("gulp-data");
const watch = require("gulp-watch");
// const concat = require("gulp-concat");
// const sass = require("gulp-sass")(require("sass"));

// per compilare il codice scss

// gulp.task("sass", function () {
//   return gulp
//     .src("app/style/**/*.scss")
//     .pipe(concat("style.scss"))
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("app/dist"));
// });

gulp.task("nunjucks", function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src("app/src/pages/**/*.+(html|njk)")
      .pipe(
        data(function () {
          return require("./app/data.json");
        })
      )
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["app/src/"],
        })
      )
      // output files in app folder
      .pipe(gulp.dest("app/dist"))
  );
});
