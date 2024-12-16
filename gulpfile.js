//読み込むパスと出力するパスを指定
const srcRootPath = "dist/";
const srcPath = {
  images: {
    src: srcRootPath + "assets/_images/",
    dist: srcRootPath + "assets/images/",
  },
};
//ローカルのパス
const setting = require("./setting.json");
const rootPath = setting.rootPath;

const gulp = require("gulp");
const gulpif = require("gulp-if");
const browserSync = require("browser-sync");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const mozjpeg = require("imagemin-mozjpeg");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const del = require("del");


const img = () => {
  return gulp
    .src(srcPath.images.src + "**/*.{png,jpg,gif,svg,ico}")
    .pipe(
      plumber({
        errorHandler: (err) => {
          console.log(err);
          this.emit("end");
        },
      })
    )
    .pipe(newer(srcPath.images.dist))
    .pipe(
      imagemin([
        pngquant({
          quality: [0.6, 0.7],
          speed: 1,
          floyd: 0,
        }),
        mozjpeg({
          quality: 75,
          progressive: true,
        }),
        imagemin.svgo({
          removeXMLNS: true,
          removeDimensions: true,
          plugins: [
            {
              removeAttrs: {
                attrs: "data.*",
              },
            },
            {
              removeUnknownsAndDefaults: false,
            },
            {
              removeViewBox: false,
            },
          ],
        }),
        imagemin.gifsicle({
          optimizationLevel: 3,
        }),
      ])
    )
    .pipe(gulp.dest(srcPath.images.dist));
};

const cleanImg = () =>
  del(srcPath.images.dist + "**/*.{png,apng,jpg,gif,svg,webp,ico}");

const browserSyncFunc = () => {
  browserSync({
    //browser: 'google chrome',
    proxy: rootPath,
    notify: false,
    open: "local",
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
    },
  });
};

const sync = () => {
  return gulp
    .src([
      srcRootPath + "**/*",
    ])
    .pipe(gulpif(browserSync.active === true, browserSync.stream()));
};

const watch = () => {
  gulp.watch(srcPath.images.src + "**/*", img);
  gulp.watch(srcRootPath + "**/*", sync);
};

exports.default = gulp.parallel(watch, browserSyncFunc);
exports.build = gulp.series(cleanImg, img);
