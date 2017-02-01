let gulp = require('gulp');
let gulpCompass = require('gulp-compass');

gulp.task('watch',function(){
	// 新增一個watch任務
    gulp.watch('./src/scss/**/*.scss',['default']);
});

gulp.task('default', function () {
    gulp.src('./src/scss/**/*.scss')  // 任務監聽檔案目錄
        .pipe(gulpCompass({
            css: './lib/css',	   // 輸出目錄
            sass: './src/scss',    // scss目錄
            image: './src/images', // 圖檔目錄
            comments: false,	   // 取消註解
        }));
});