全局安装：npm isntall -g create-react-app
创建项目：create-react-app 项目名
启动项目：npm start  yarn start

gitid:11208a8ba27138eb6cd05ec18c0fe30b

VS Code ES7 React/Redux/React-Native/JS snippets  --vscode插件  快捷键 rcc 创建类模板  rfc--创建函数模板
ctrl+alt+i:生成文件顶部注释
ctrl+shift+p:打开vscode配置
alt+shift+u:上传vscode配置
alt+shift+d:下载vscode配置
alt+w：在所选内容前添加闭合标签


yarn eject  ---暴露webpack.config.js
一、项目结构：
    public:静态资源文件夹 robots.txt爬虫规则文件
    src：编写代码文件
            index.js  入口文件
            index.css  公用css文件
            setupTests.js 组件测试的
    组件写成.js文件也行写成jsx呢也可以，一般写成jsx主要是为了区分我们组件和业务js；或者呢全部采用index的形式这样在引入的时候就可以定位到文件层就可以了

二、样式模块化：
        由于我们所有的css最后都会集合到app.js里面 那么就存在重复类名的情况后者会把前者覆盖掉，当然我们使用less或者sass的时候会用顶层类名就能够避免了；
        如果没有使用的话：
            1.把index.css改成 index.module.css;
            2.引入的时候用import Welcom from “./index.module.css”；
            3.使用的时候使用Welcom.类名这样就可以避免了

