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
    8.jsx的注释{/*  */}

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


react路由：
    路由其实就是一种映射关系（key：value）
    key就是路径，value可能是function（后端路由）或者component（前端路由）
    后端路由：router。get("path",function(){})
    前端路由：<Route path="/test" component={Test}> </Route>
    路由也是基于我们浏览器的history进行工作的
    我们使用的是react-router-dom
    里面的内置组件：
        <BrowserRouter>
        <HashRouter>
        <Route>
        <Redirect>
        <Link>
        <NavLink>
        <Switch>

        history对象
        match对象
        withRouter函数
    一、react中靠路由链接实现切换组件：Link(<Link to="/about">About</Link>）需要包裹在<BrowserRouter>或者<HashRouter>内使用   
    二、<Route>:用于注册路由(<Route path="/about" component={About}></Route>) 需要包裹在<BrowserRouter>或者<HashRouter>内使用    
            上面两个组件都需要包裹在<BrowserRouter>或者<HashRouter>内使用，但是我们一个应用应该只是用一个<BrowserRouter>或者<HashRouter>所以只需要在最外层的dom渲染函数render那里去包裹上就可以了
            
            一般我们会把路由里面使用的组件单独放在pages里面
                路由组件：需要通过路由匹配进行展示
                一般组件：需要自己写标签展示(其实我们写成双标签的时候标签的内容也会传递到props里面的children字段--通过this.props.childer就可以拿到我们在写标签是的标签内容)---vue里面是通过slot来进行标签传递的
                他们两个的props来源是不一样的：
                    一般组件是由写组件时来传递的；
                    路由组件接受到的props：注：仅保留开发中会使用到的
                        history:
                            go: ƒ go(n)
                            goBack: ƒ goBack()
                            goForward: ƒ goForward()
                            push: ƒ push(path, state)
                            replace: ƒ replace(path, state)
                        location:
                            pathname: "/about"
                            search: ""
                            state: undefined
                        match:
                            params: {}
                            path: "/about"
                            url: "/about"
    三、<NavLink>：点击路由链接实现高亮这时我们就不在使用Link： <NavLink activeClassName="click" to="/about">About</NavLink>
                activeClassName==>活跃时添加类名
    四、<Switch>：提高路由匹配效率的；
              路由在匹配的时候默认是要全部都匹配一遍，如果路由较多那么效率就会低，那么我们把所有路由包裹在Switch标签里面之后路由匹配时就在匹配到之后就不再往下匹配了



    五、解决样式丢失问题：
        问题描述：当我们在index.html里面引入了其他三方css或者自己的css，当我们的路由是多层级的，例如："/at/about"，那么当我们强制刷新页面的时候会导致这个引入的样式资源请求不到，他会把/at也当作请求路劲，但是是我们网络请求的时候也是看到200，那是因为webpack配置的如果路径错误返回index.html；
        解决方案：
            1.引入的时候不要使用相对路径，使用绝对路径；---建议使用
            2.把.替换成%PUBLIC_URL%---建议使用
            3.使用HashRouter
    六、路由的精准匹配和模糊匹配：（默认是模糊匹配）
        1.模糊匹配：我们注册的path是/home，但是我们输入的时候输入的是/home/a,同样是可以匹配到的，返过来注册的path是/home/a，但是我们输入的时候输入的是/home,这种是不行的，而且在模糊匹配的时候是从前往后匹配的，顺序错了也不能匹配到
        2.精准匹配：path和输入的必须一一对应；开启方式：在<Route>标签上添加属性：exact
        注意不要随意开启严格匹配，有时候开启之后会导致二级路由无法匹配，一般一级路由都不开启
        路由的匹配时从最开始进行匹配的

    七、<Redirect>：重定向：可用于我们在进入页面时设置默认页面
                    放在路由注册的最下方
                     <Redirect to="/about" />  
    八、路由嵌套：注意在使用和注册子路由的的时候to和path一定要带上父路由
    九、路由传参：写在嵌套路由里面的Message下面的GetParams组件
        1.携带params参数---直接在路径里面写，这种需要在注册的时候声明你有参数传递----常用
            <Link to={`/newwhome/message/detail${item.id}`}>{item.title}</Link>
            <Route path="/newhome/Message/detail/:id" component={GetParams}></Route>
            接收参数：this.props.match.params
        2.传递search参数:写在嵌套路由里面的Message下面的GetSearch组件
            <Link to={`/newhome/message/GetSearch/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
            注册的时候无需声明参数传递
            接收参数:this.props.location.search
                    但是这里要说明拿到的是一个字符串,所以我们需要借助querystring这个库(无需下载)
                    import qs from "querystring"
                    let obj = {name:"ms",age:"18"};
                    qs.stringify(obj)-----"name=ms&age=18"
                    qs.parse("name=ms&age=18")----{name:"ms",age:"18"}
                    //所以取sreach参数
                    const {id,title} = qs.parse(this.props.location.search.slice(1))
        3.传递state参数:---这个不是组件里面的state是路由的state---写在嵌套路由里面的Message下面的GetState组件
                    传递时需要写成对象形式:
                    <Link to={{pathname:"/newhome/Message/GetState",state:{id:item.id,title:item.title}}}>{item.title}</Link>
                    注册的时候无需声明参数传递
                    接收参数:this.props.location.state  
            备注:这种方式在BrowserRouter刷新没问题但是在HashRouter是丢失数据的,但是这种方式在直接输入地址的时候就会存在报错的情况,要么不使用这种,要么就做好错误控制(变量不存在时做处理)
    十、路由的replace模式:
            我们在编写路由的时候默认是开启的push模式;
            开启:在Link标签上添加:replace={true}或者直接写 replace
            演示看写在嵌套路由里面的Message
    十一、编程式路由导航：
            this.props.history.push();
            this.props.history.replace()
             编写一段代码，让其实现跳转到detail组件，且为push跳转，携带params参数
            this.props.history.replace(`/newhome/message/GetParams/${item.id}/${item.title}`)
            编写一段代码，让其实现跳转到detail组件，且为push跳转，携带search参数
            this.props.history.replace(`/newhome/message/GetSearch/?id=${item.id}&title=${item.title}`)
            编写一段代码，让其实现跳转到detail组件，且为push跳转，携带state参数
            this.props.history.replace(`/newhome/Message/GetState`,{id:item.id,title:item.title})
            replace是一样的


            this.props.history.go(2)---前进2个,传负数就是后退几个
            this.props.history.goBack()--回退
            this.props.history.goForward()--前进
    十二、withRouter的使用：可以加工一般组件，让一般组件拥有了路由组件的功能API
            我们知道只有路由组件的props里面才有history，那么为我们要在一般组件里面使用呢？
            使用withRouter
            import withRouter from "react-router-dom"
            组件暴露时进行改造：
            export default withRouter(Main)
            这样Main组件就拥有了路由组件的功能
            演示看写在嵌套路由里面的Message下的withRouter组件
    十三、HashRouter和BrowserRouter的区别：
            1.实现原理不同：
                    HashRouter：使用的是浏览器路径的hash值
                    BrowserRouter：使用的是H5的history的API,不兼容IE9以下版本
            2.路径表现形式：
                    HashRouter：带有#
                    BrowserRouter：正常路径
            3.刷新后对路由传递的state参数的影响：
                    HashRouter：直接丢失数据
                    BrowserRouter：没有影响，因为是保存在history中的
            备注：HashRouter可以解决一些路径错误的问题

