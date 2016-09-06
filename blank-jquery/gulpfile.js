var gulp = require('gulp');
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssmin = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imgmin = require('gulp-image');
var cache = require('gulp-cache');
var replace = require('gulp-html-replace');

var runSeq = require('run-sequence');
var argv = require('yargs').argv;

//是否为生产环境：gulp --production=true 参数来设置
var EVN_PRODUCTION = argv.production;
var path = {
    src: {
        _self: './src',

        js: './src/js/**/*.js',
        css: './src/css/**/*.css',
        images: './src/images/**/*.*',
        html: './src/**/*.html'
    },
    dest: {
        _self: './dist',

        js: './dist/js',
        css: './dist/css',
        images: './dist/images',
        html: './dist/',

        vendor: './dist/vendors'
    }
};


//默认任务，直接执行gulp将会执行
gulp.task('default', function() {


});

//构建DIST目录内容
gulp.task('build', function(callback) {
    runSeq('clean', ['img', 'html', 'js', 'css'], 'bower', callback);
});

//压缩图片并复制
gulp.task('img', function() {
    return gulp.src(path.src.images)
        .pipe(cache(imgmin()))
        .pipe(gulp.dest(path.dest.images));
});

//压缩HTML并复制
gulp.task('html', function() {

    return gulp.src(path.src.html)
        //替换index.html种需要替换的内容
        .pipe(replace({
            'vendorCss': "./vendors/css/vendor.css",
            'vendorJs': './vendors/js/vendor.js',
            'appCss': './css/app.css',
            'appJs': './js/app.js'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            ignoreCustomComments: [/^<!--\[/]
        }))
        .pipe(gulp.dest(path.dest.html));
});

//合并压缩JS并复制
gulp.task('js', function() {
    var app = gulp.src(path.src.js).pipe(concat("app.js"));
    if (EVN_PRODUCTION) {
        app.pipe(uglify());
    }
    return app.pipe(gulp.dest(path.dest.js));

});

//合并压缩CSS并复制
gulp.task('css', function() {
    var app = gulp.src(path.src.css).pipe(concat("app.css"));
    if (EVN_PRODUCTION) {
        app.pipe(cssmin({
            compatibility: 'ie8'
        }));
    }
    return app.pipe(gulp.dest(path.dest.css));
});

// 复制bower安装的第三方库
gulp.task('bower', function() {

    var bower_folder = "./bower_components";
    var src = {
        js: [
            bower_folder + '/jquery/dist/jquery.min.js',
            bower_folder + '/sammy/lib/min/sammy-latest.min.js',
            bower_folder + '/bootstrap/dist/js/bootstrap.min.js',
        ],
        css: [
            bower_folder + "/bootstrap/dist/css/bootstrap.min.css",
            bower_folder + "/bootstrap/dist/css/bootstrap-theme.min.css",
        ],
        cssMap: [
            bower_folder + "/bootstrap/dist/css/bootstrap.min.css.map",
            bower_folder + "/bootstrap/dist/css/bootstrap-theme.min.css.map",
        ],
        font: [
            bower_folder + "/bootstrap/dist/fonts/*"
        ]
    }

    var srcCopy = {
        js: [
            bower_folder + "/html5shiv/dist/html5shiv.min.js",
            bower_folder + "/respond/dest/respond.min.js"
        ]
    };

    //合并第三方js，并复制到/dist/js/文件夹
    gulp.src(src.js)
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(path.dest.vendor + "/js/"));

    //合并第三方css，并复制到/dist/css/文件夹
    gulp.src(src.css)
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest(path.dest.vendor + "/css/"));

    //复制 css map 到/dist/css/文件夹
    gulp.src(src.cssMap)
        .pipe(gulp.dest(path.dest.vendor + "/css/"));

    //复制 font 到/dist/font/文件夹
    gulp.src(src.font)
        .pipe(gulp.dest(path.dest.vendor + "/font/"));

    //纯复制
    gulp.src(srcCopy.js).pipe(gulp.dest(path.dest.vendor+"/js"));

});

//清理目录
gulp.task('clean', function() {
    return gulp.src(path.dest._self, {
        read: false
    }).pipe(clean());
});