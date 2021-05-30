react特点：
    1.采用组件化模式、声明式编码，提高组件复用率和开发效率
    2.在react Native中可以使用react语法进行移动端开发
    3.使用虚拟Dom技术+优秀的diffing算法，尽量减少与真实Dom的交互
关于虚拟dom：
    1.本质是Object类型的对象（一般对象）
    2.虚拟dom比较轻（属性较少），真实dom重（属性多），因为虚拟dom是react内部在使用，无须挂在那么多属性
    3.虚拟dom会被react转化为真实dom，呈现在页面上
关于jsx：
    1.就是js+xml
    2.本质是React.createElement()方法的语法糖
    3.作用：用于简化虚拟dom的写法
jsx语法规则：
    1.定义虚拟dom，不需要写引号
    2.标签中混入js表达式要使用{}；注意不能写js语句：
        （1）js表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
                    例如：变量a;a+b;demo(1)--函数调用表达式；arr.map();function test(){};
        （2）js语句：没有返回值：if(){};for(){};switch(){case:xxx};
    3.给标签定义样式类名需要使用className
    4.给标签写style的时候，需要使用{{key:value}},并且使用驼峰
    5.虚拟dom只能有一个根标签
    6.标签必须是闭合的：可以自闭合
    7.关于标签首字母：
        （1）如果是小写，则将该标签转为html同名标签，如果html中没有该标签，则报错
        （2）如果是大写，react就回去渲染对应的组件，若没有该组件，则报错

模块与组件，模块化与组件化的理解：
    模块：向外提供特定功能的js；能够服用js，简化js编写提高运行效率
    组件：用来实现局部功能效果的代码和资源集合（html,css,js,其他文件）

定义组件的两种方式：组件名首字母必须大写；组件的三大属性：props,refs,state（函数式组件只能使用props）
    1.函数式组件：适用于简单组件的定义
        function Header(){
            return <div>适用于简单组件的创建</div>
        }
        render里面需要<Header />这样去渲染:ReactDOM.render(<Header />,document.getElementById('root'));
        这种定义方式在渲染的时候执行的操作：
            （1）react解析组件标签，找到Header组件
            （2）发现组件是函数式定义的，随后调用该函数，将返回虚拟dom转为真实dom，随后呈现在页面中
    2.类式组件：适用于复杂组件
        class Header extends React.Component{
            render(){
                //render是放在Header类的原型对象上供实例使用的
                //this是指向Header类的实例对象
                return(
                    <div>适用于复杂组件的创建</div>
                )
            }
        }
        渲染：
        ReactDOM.render(<Header />,document.getElementById('root'));
        这种定义方式在渲染的时候执行的操作：
            （1）react解析组件标签，找到Header组件
            （2）发现组件是类定义的，随后new出该类的实例，并通过该实例调用原型上的render方法。
            （3）将render返回虚拟dom转为真实dom，随后呈现在页面中


creat-react-app
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
alt+shift+a:注释代码块；ctrl+/ 注释行代码



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

