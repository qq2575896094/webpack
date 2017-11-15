/**
 * Created by qq2575896094 on 2017/11/14.
 *
 * 指的是webpack应该使用哪个模块,来作为构建其内部依赖图的开始.进入入口起点后,webpack会找到有哪些模块和库是入口起点(直接和间接)依赖的.
 * 每个依赖项随即被处理,最后输出到称之为bundles的文件中.
 *
 *
 *  如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个键(key)会是 chunk 的名称，该值描述了 chunk 的入口起点。
 *
 *  用法: entry:string|Array|Object
 */

/**
 * 单个入口的写法
 */
const config_1 = {
    entry: './loader.js'
};

const config_2 = {
    entry: {
        main: './loader.js'
    }
};

/**
 * 对象语法:入口的最可扩展的方式
 */

const config_3 = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};