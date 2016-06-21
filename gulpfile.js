'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
    .pipe(sass({
		outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
		browsers: ['last 2 versions', '> 1%', 'ie 8']
    }))
    .pipe(concat('point-bar.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['sass']);
