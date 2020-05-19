const path = require("path");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本 URL
  publicPath: "/",
  // 打包文件夹
  outputDir: "dist",
  // 静态内容文件夹
  assetsDir: "static",
  // 删除打包的map文件
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === "development",
  // devServer: {
  //   open: true,
  //   host: "0.0.0.0",
  //   port: 8080,
  //   https: false,
  //   proxy: {
  //     // 反向代理
  //     "/api": {
  //       target: "https://jingrankeji.xchlwkj.com", // 域名
  //       ws: true, // 是否启用websockets
  //       changOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //     }
  //   }
  // },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@views", resolve("src/views"))
      .set("@components", resolve("src/components"))
      .set("@img", resolve("src/assets/image"))
      .set("@util", resolve("src/util"));
  },
  // vant 主题色
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 通过less文件覆盖(文件路径为绝对路径)
          hack: `true; @import "${path.join(__dirname, "/src/assets/styles/vant-theme.less")}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  }
};
