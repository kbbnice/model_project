const {
    src,
    dest,
    series,
    watch
} = require('gulp')

// node 自带 path
const path = require('path')

// 额外插件
const concat  = require('gulp-concat')  // 合并 css 文件
const cleanCss = require('gulp-clean-css')  // 压缩 css
const less = require('gulp-less')   // less 插件

// 路径变量
const devPath = path.join(__dirname, './static/')
const outputPath = path.join(__dirname, '../static/')


// 合并css文件
function handleCss() {
    // console.log(outputPath)
    return src(devPath + 'less/*.less')
    .pipe(less())
    .pipe(concat('index.css'))
    .pipe(cleanCss({
        conpatibility: 'ie8'
    }))
    .pipe(dest(outputPath + 'css'))

}

function watchFun() {
    return watch(devPath, series(handleCss))
}

exports.default = watchFun