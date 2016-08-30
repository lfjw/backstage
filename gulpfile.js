var gulp = require('gulp'),				
	fs = require('fs'),					
    connect = require('gulp-connect'),	
    respond = require('gulp-respond'),
    uglify = require('gulp-uglify'),  	
    concat = require('gulp-concat'), 
    sass = require('gulp-ruby-sass'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngmin = require('gulp-ngmin'),
    rev = require('gulp-rev'),//更改版本名
    revCollector = require('gulp-rev-collector'),//gulp-rev的插件，用于html文件更改引用路径
    clean = require('gulp-clean'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require("gulp-minify-css"),
    rename = require('gulp-rename');
//连接服务器
gulp.task("connect",function(){
	connect.server({
        root: ['src', 'bower_components'],
		port:8000,
        livereload: true,
        middleware:function(){
            return [
                function(req,res,next){
                    //console.log("下一步操作")
                    next()
                },
                function(req,res){  //请求  响应
                    var path = req.url.split('?').shift(); //请求的所有路径
                    //console.log(path)
                    path = path == '/' ? '/build/home.html' : path;//如果是/那就是首页找内容，如果有内容那就那就是他本身
                    // 获取运行时参数
                    // if (path.indexOf('index.html') > -1) {
                    //   params = getParams(req.url);
                    // }
                    url = 'src' + path;
                   // console.log(url)
                    if (!fs.existsSync(url)) {  //判断路径是否存在
                        url = 'bower_components' + path;
                       // console.log(url)
                    }
                    return gulp.src(url).pipe(respond(res));
                }
            ]
        }
	})
})
//清除内容
gulp.task("clean",function(){
    return gulp.src("src/js/bulid/").pipe(clean());
})
//压缩js,css
gulp.task("bulid",["clean"],function(){
    return gulp.src([
                "src/js/app.js",
                "src/js/config.js",
                "src/js/controller.js",
                "src/js/directive.js",
                "src/js/drawLine.js",
                "src/js/pieChars.js",
                "src/js/service.js"
             ])
            .pipe(ngAnnotate())
            .pipe(ngmin())
            .pipe(uglify())
            .pipe(concat("js.js"))
            .pipe(rename(function(path){
                path.basename += '.min'
                path.extname = '.js'
            }))
            .pipe(rev())
            .pipe(gulp.dest('src/js/bulid'))
            .pipe(rev.manifest())  //更新json
            .pipe(gulp.dest('src/')) 
    return gulp.src([
                "src/css/index.css",
                "src/css/index1.css",
                "src/css/index2.css",
                "src/css/list.css",
                "src/css/login.css",
                "src/css/ui_element.css"
            ])
            .pipe(minifyCSS())
            .pipe(concat("style.min.css"))
            .pipe(gulp.dest("src/css/bulid"))
})
gulp.task("index",["bulid"],function(){
     return gulp.src('src/index.html')
                .pipe(rename(function(path){
                    path.basename = 'home'
                    path.extname = '.html'
                }))
                .pipe(minifyHTML())
                .pipe(gulp.dest('src/build/'))
})

gulp.task('rev',['index'],function(){
    return gulp.src(['src/rev-manifest.json','src/build/home.html'])
               .pipe(revCollector())
               .pipe(gulp.dest('src/build/'))
})
gulp.task('reloadHtml',['rev'],function(){
    return gulp.src('src/build/home.html')
               .pipe(connect.reload())
})
//监听
var pathFile = [
        "src/js/*.js",
        "src/css/*.css",
        "src/*.html"
    ]
gulp.task('watch',function(){
    gulp.watch(pathFile,['reloadHtml'])
})
gulp.task("default",['rev',"connect","watch"])
