const path = require('path');

module.exports = {
    publicPath: "./",
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/theme.scss"`
            },
            scss: {
                prependData: `@import "@/assets/css/theme.scss";`
            },
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