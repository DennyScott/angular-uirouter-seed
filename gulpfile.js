var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;
var protractor = require("gulp-protractor").protractor;

var path = {
	src: './app/**/*',
	dest: 'www/',
	scripts: ['app/js/**/*.js']
};

gulp.task('build', function() {
	gulp.src(path.src)
		.pipe(gulp.dest(path.dest));
});

gulp.task('test', function() {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	});
});

gulp.task('e2e', function() {
	gulp.src(['./tests/e2e/**/*.js'])
		.pipe(protractor({
			configFile: 'tests/e2e/protractor.conf.js',
			args: ['--baseUrl', 'http://localhost:3000']
		}))
		.on('error', function(e) { 
			throw e 
		});
});

gulp.task('reload', function() {
	gulp.src('./www')
		.pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
		root: 'www',
		port:3000,
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch(path.scripts, ['build', 'reload']);
});

gulp.task('default', ['watch', 'build', 'connect']);
