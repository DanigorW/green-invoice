module.exports = {
    devServer: {
        proxy: 'https://jupiter.d.greeninvoice.co.il/',
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
              @import "@/globalCss/_colors.scss";
            `
            }
        }
    }

}