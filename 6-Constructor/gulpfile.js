// const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMinify = require('gulp-css-minify');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

const buildHtml = () => {
    return gulp.src(['app/*.html', 'app/pages/**/*.html'])
        .pipe(gulp.dest('build/'));
}

const buildStyles = () => {
    return gulp.src('app/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
}

const buildScript = () => {
    return gulp.src('app/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream())
}

const buildImages = () => {
    return gulp.src('app/images/*.png')
        .pipe(gulp.dest('build/images/'))
}

const build = () => {
    buildHtml();
    buildScript();
    buildStyles();
    buildImages();
}

const start = () => {
    build();
    browserSync.init({
        server: {
            baseDir: './build'
        }
    })
    gulp.watch('app/js/**/*.js', buildScript).on('change', browserSync.reload);
    gulp.watch('app/css/**/*.scss', buildStyles).on('change', browserSync.reload);
    gulp.watch(['app/pages/**/*.html', 'app/index.html'], buildHtml).on('change', browserSync.reload);
}

exports.build = build;
exports.buildStyles = buildStyles;
exports.default = start;
