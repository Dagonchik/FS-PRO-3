// const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMinify = require('gulp-css-minify');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const buildHtml = () => {
    return gulp.src('*.html')
    .pipe(gulp.dest('build/'));
}

const buildStyles = () => {
    return gulp.src('css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(cssMinify())
    .pipe(gulp.dest('build/'))
}

const buildScript = () => {
    return gulp.src('js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/'))
}

const build = () => {
    gulp.series(buildHtml, buildStyles, buildScript);
}

const start = () => {
    browserSync.init({
        server: {
            baseDir: 'build/'
        }
    })
    gulp.watch(['js/**/*.js', 'css/**/*.css', 'pages/**/*.html', 'index.html'], build())
}

exports.build = build;
exports.default = start;