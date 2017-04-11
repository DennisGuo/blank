var gulp = require('gulp');
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssmin = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imgmin = require('gulp-imagemin');
var cache = require('gulp-cache');
var replace = require('gulp-html-replace');
var connect = require('gulp-connect');
var order = require('gulp-order');
var ngAnnotate = require('gulp-ng-annotate');
var less = require('gulp-less');
var open = require('gulp-open');

var runSeq = require('run-sequence');
var argv = require('yargs').argv;

//是否为生产环境：gulp --production=true 参数来设置
var EVN_PRODUCTION = argv.production;
var path = {
    src: {
        _self: 'src',

        js: [
            ////
            'src/app/inspection/*module.js',
            'src/app/inspection/*config.js',
            'src/app/inspection/**/*service.js',
            'src/app/inspection/**/*.js',
            ////
            ////
            'src/app/data/*module.js',
            'src/app/data/*config.js',
            'src/app/data/**/*service.js',
            'src/app/data/**/*.js',
            ////
            'src/**/*module.js',
            'src/**/*config.js',
            'src/**/*service.js',
            'src/**/*directive.js',
            'src/**/*controller.js',
            'src/**/*run.js',
            'src/**/*.js'
            ],
        less: ['src/**/*.less'],
        images: ['src/images/**/*.*'],
        html: ['src/**/*.html'],
        json:['src/**/*.json']
    },
    dest: {
        _self: 'dist',

        js: 'dist/js',
        css: 'dist/css',
        images: 'dist/images',
        html: 'dist/',

        vendor: 'dist/vendors'
    }
};

//默认任务，直接执行gulp将会执行
gulp.task('default',['serve'], function() {

});

//启动SERVER来调试应用
gulp.task('serve',['build','watch'],function(){
    connect.server({
        port:3000,
        root:'dist',
        livereload:true
    });
    gulp.src('dist')
    .pipe(open({uri:'http://localhost:3000'}));
});

//监控文件变化
gulp.task("watch",function(){
    gulp.watch(path.src.less,['css']);
    gulp.watch(path.src.js,['js']);
    gulp.watch(path.src.images,['img']);
    gulp.watch(path.src.html,['html']);
    gulp.watch(path.src.json,['json']);
});

//构建DIST目录内容
gulp.task('build', function(callback) {
    runSeq('clean', ['img', 'html', 'js', 'css','json'], 'bower', callback);
});

//复制json文件
gulp.task('json',function(){
    return gulp.src(path.src.json)
            .pipe(gulp.dest(path.dest._self))
            .pipe(connect.reload());
});

//压缩图片并复制
gulp.task('img', function() {
    return gulp.src(path.src.images)
        .pipe(cache(imgmin()))
        .pipe(gulp.dest(path.dest.images))
        .pipe(connect.reload());
});

//压缩HTML并复制
gulp.task('html', function() {

    return gulp.src(path.src.html)
        //替换index.html种需要替换的内容
        .pipe(replace({
            'vendorCss': "vendors/css/vendor.css",
            'vendorJs': 'vendors/js/vendor.js',
            'appCss': 'css/app.css',
            'appJs': 'js/app.js'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            ignoreCustomComments: [/^<!--\[/]
        }))
        .pipe(gulp.dest(path.dest.html))
        .pipe(connect.reload());
});

//合并压缩JS并复制
gulp.task('js', function() {
    var app = gulp.src(path.src.js)
    .pipe(concat("app.js"))
    .pipe(ngAnnotate({
        add:true
    }));
    if (EVN_PRODUCTION) {
        app.pipe(uglify({
            mangle:true
        }));
    }
    return app.pipe(gulp.dest(path.dest.js)).pipe(connect.reload());

});

//合并压缩CSS并复制
gulp.task('css', function() {
    var app = gulp.src(path.src.less)
    .pipe(less())
    .pipe(concat("app.css"));
    if (EVN_PRODUCTION) {
        app.pipe(cssmin({
            compatibility: 'ie8'
        }));
    }
    return app.pipe(gulp.dest(path.dest.css)).pipe(connect.reload());
});

// 复制bower安装的第三方库
gulp.task('bower', function() {

    var bower_folder = "bower_components";
    var src = {
        js: [
            // bower_folder + '/jquery/dist/jquery.min.js',
            // bower_folder + '/sammy/lib/min/sammy-latest.min.js',
            // bower_folder + '/bootstrap/dist/js/bootstrap.min.js',
            bower_folder + '/angular/angular.min.js',
            bower_folder + '/angular-ui-router/release/angular-ui-router.min.js',
            bower_folder + '/angular-cookies/angular-cookies.min.js',
            // bower_folder + '/angular-bootstrap/ui-bootstrap.min.js',
            bower_folder + '/angular-bootstrap/ui-bootstrap-tpls.min.js',
            bower_folder + '/chart.js/dist/Chart.bundle.min.js',
            bower_folder + '/angular-chart.js/dist/angular-chart.min.js',

            'libs/angular-locale_zh-cn.js'
        ],
        css: [
            // bower_folder + "/bootstrap/dist/css/bootstrap.min.css",
            // bower_folder + "/bootstrap/dist/css/bootstrap-theme.min.css",
            bower_folder + "/bootstrap-css/css/bootstrap.min.css",
            bower_folder + "/bootstrap-css/css/bootstrap-theme.min.css",
            bower_folder + "/animate.css/animate.min.css",
            bower_folder + "/Ionicons/css/ionicons.min.css",
        ],
        cssMap: [
            // bower_folder + "/bootstrap/dist/css/bootstrap.min.css.map",
            // bower_folder + "/bootstrap/dist/css/bootstrap-theme.min.css.map",
            bower_folder + "/bootstrap-css/css/bootstrap.min.css.map",
            bower_folder + "/bootstrap-css/css/bootstrap-theme.min.css.map",
        ],
        font: [
            // bower_folder + "/bootstrap/dist/fonts/*",
            bower_folder + "/bootstrap-css/fonts/*",
            bower_folder + "/Ionicons/fonts/*",
        ]
    }

    var srcCopy = {
        js: [
            bower_folder + "/html5shiv/dist/html5shiv.min.js",
            bower_folder + "/respond/dest/respond.min.js",
            "libs/**/*.*"
        ],
        assets:[
            'src/assets/**/*.*'
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
        .pipe(gulp.dest(path.dest.vendor + "/fonts/"));

    //纯复制
    gulp.src(srcCopy.js).pipe(gulp.dest(path.dest.vendor+"/js"));
    gulp.src(srcCopy.assets).pipe(gulp.dest(path.dest._self+"/assets"));

});

//清理目录
gulp.task('clean', function() {
    return gulp.src(path.dest._self, {
        read: false
    }).pipe(clean());
});