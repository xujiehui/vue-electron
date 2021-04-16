const OutputCompileTimeWebpackPlugin = require('output-compile-time-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/renderer/main.js'
    }
  },
  configureWebpack: config => {
    const plugins = [new OutputCompileTimeWebpackPlugin()]
    config.plugins.push(...plugins)
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.example.app',
        productName: 'example', //项目名，也是生成的安装文件名，即example.exe
        copyright: 'Copyright © 2021', //版权信息
        directories: {},
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications'
            },
            {
              x: 130,
              y: 150,
              type: 'file'
            }
          ]
        },
        mac: {
          icon: 'build/icons/icon.ico'
        },
        linux: {
          icon: 'build/icons/icon.ico'
        },
        win: {
          //win相关配置
          icon: './build/icons/icon.ico',
          target: [
            {
              target: 'nsis', //利用nsis制作安装程序
              arch: [
                'x64', //64位
                'ia32' //32位
              ]
            }
          ]
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: 'build/icons/icon.ico', // 安装图标
          uninstallerIcon: 'build/icons/icon.ico', //卸载图标
          installerHeaderIcon: 'build/icons/icon.ico', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: 'example' // 图标名称
        }
      }
    }
  }
}
