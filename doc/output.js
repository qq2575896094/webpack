/**
 * Created by qq2575896094 on 2017/11/14.
 *
 * output属性告诉我们webpack在哪里输出它所创建的bundles,以及如何命名这些文件.你可以通过在配置中指定一个output字段,来配置这些处理.
 *
 * 配置output选项可以控制webpack如何向磁盘写入编译文件.
 *
 * 注意: 即使可以存入多个入口起点,但只能指定一个输出配置.
 */


/**
 * 用法
 */

const config_1 = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
};

/**
 * 多个输出文件
 */

const config_2 = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    },
    outpuut: {
        filename: '[nmae].[hash].js',
        path: __dirname + '/dist'
    }
};
