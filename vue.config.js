const path = require('path');

module.exports = {
    publicPath: "./",
    lintOnSave: false,
    css: {
        loaderOptions: {
            less:{
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    'hack': `true; @import "./src/assets/css/theme.less";`
                },
                modifyVars: {
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    'hack': `true; @import "./src/assets/css/theme.less";`
                }
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/css/theme.less')]
        }
    },
    configureWebpack: (config) => {
        config.entry.app = ['babel-polyfill', './src/main.js']
        // if (process.env.NODE_ENV === 'prd') {
        //     // 为生产环境修改配置...
        //     config.mode = 'production';
        // } else {
        //     // 为开发环境修改配置...
        //     config.mode = 'development';
        // }

        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components')
                }
            }
        });
    },
};