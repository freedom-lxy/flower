module.exports = {
    publicPath: process.env.NODE_ENV == 'development' ? '/' : '',
    devServer: {
        // 配置反向代理
        proxy: {
            '/liuxinyi/api': {
                /* 
                    如果你的原始请求是/api/goods/swiper
                    会自动转换成http://localhost:8888/api/goods/swiper
                    再把/api改成空
                    最后的结果就是http://localhost:8888/goods/swiper
                */ 
                target: 'http://localhost:9999',
                changeOrigin: true,
                pathRewrite: {
                    '^/liuxinyi/api': ''
                }
            }            
        }
    }
}