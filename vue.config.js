module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/global.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-todo/'
        : '/'
};