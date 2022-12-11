// const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMinify = require('gulp-css-minify');

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
    .pipe(gulp.dest('build/'))
}

exports.build = gulp.series(buildHtml, buildStyles, buildScript);