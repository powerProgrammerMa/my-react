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
            演示看写在pages/嵌套路由/Message下的withRouter组件
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


redux：redux是一个专门用于状态管理的js库，集中管理多个组件的共享状态（不是专属于react的），但是基本是与react进行配合
        npm i redux
    一、action：动作对象---较为简单的redux这个可以省略的
            包含两个属性：
                type：标识属性，值为字符串，唯一必要属性（一般我们会在单独新建一个常量文件存放我们的type值---constant）
                data：数据属性，值类型任意，可选属性
                例如：{type:"ADD_STUDENT",data:{name:"tom",age:18}}
    二、reducer:用于加工和初始化状态
                加工时：根据旧的state和传递的action，产生新的state的纯函数
                初始化：是由store调用的传递的preState是undefind，action是“@@redux/INIT_”
    三、store：将state、action、reducer联系在一起的对象
                1.如何得到此对象：
                    import {creatStore} from "redux"
                    import reducer from "./reducers"
                    const store = createStore(reducer)
                2.此对象的功能
                    1.getState():得到state
                    2.dispatch(action):分发action，触发reducer调用，产生新的state
                    3.subscribe（listener）：注册监听，当产生新的state时自动调用
    
    四、react-Components：
        组件使用：
        //引入store,用于获取store中的状态
        import stroe from "../../../redux/store"
        store.getState()：获取redux数据
        //通知redux执行加操作
        store.dispatch({type:"increment",data:parseInt(num)})
        //但是现在数据改变还不能触发页面渲染，需要手动监听
        componentDidMount(){
            //监听当redux数据改变重新调用render函数
            store.subscribe(()=>{
                //这么写就是为了重新渲染页面调用render
                this.setState({})
            })
        }
        //但是这种写法每个组件都需要写，那么我们就提取到入口文件里面
    五、在index.js中监测store的状态变更，一旦发生改变重新渲染入口组件
        //全局监听redux数据变化
        store.subscribe(()=>{
        ReactDOM.render(
            <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        );
        })
    六、异步action：function===何时使用？想要对状态进行操作，但是具体数据依靠异步任务返回--不是必须使用
                    需要使用中间件redux-thunk
                    由于store.js默认只认识object类型，当我们使用异步action的时候返回的是function，所以需要使用一个中间件redux-thunk
                    这个中间件主要是告诉store，这个action先不要给reducer执行，先执行这个异步action
                    store.js改造：
                        import {createStore,applyMiddleware} from "redux" //createStore专门用于创建redux中最为核心的库store
                        import countReducer from "./count_reducer"//引入我们的reducers
                        //引入redux-thunk,同时要引用redux库中的applyMiddleware执行中间件，用于支持异步action
                        import thunk from "redux-thunk"
                        //暴露store
                        export default createStore(countReducer,applyMiddleware(thunk))
        同步action：Object


react-redux：这是react官方出品的redux库：他就是想我们的UI组件都没有redux操作，所有操作都拿到我们的容器组件里面来
        1.所有的UI组件都应该包裹在一个容器组件里面，他们是父子组件关系
        2.容器组件才是真正和redux打交道的，里面可以随意使用redux的API
        3.UI组件里面不能使用任何redux的API
        4.容器组件会传递给UI组件：1.redux保存的状态2.用于操作状态的方法
        5.备注：容器给UI传递：状态、操作的方法，均是通过props传递

        如果要使用react-redux：
            1.要为我们的每个UI组件编写一个容器组件，像我在container里面写的Count组件就是一个容器组件，以后就不在使用UI组件而使用容器组件并且传递store是在使用容器组件传入的不需要在容器组件中引入store
                （1）容器组件里面的两个函数
                        mapStateToProps：传递state
                        mapDispatchToProps：传递操作redux数据的方法
                （2）连接UI组件和store的connect写法：
                        export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
            2.不管是使用redux还是react-redux我们都不会改变我们所写的redux文件夹下面的东西，仅仅只是改变了使用方法
            3.UI组件页面使用redux数据是在props里面去获取的，想要操作redux数据也是在props里面去获取的方法的
        
        基本使用写在reactReduxUse/Count（UI组件），容器组件写在container/Count
        精简写法写在reactReduxUse/Count精简版（UI组件），容器组件写在container/Count精简版
                1.代码层面精简以及使用react-redux自动帮我们分发action来精简
                2.使用了react-redux之后我们就不需要在全局开启监听state变化了，容器组件已经具备了监听变化的能力
                3.上面我们说过我们需要在使用容器组件的地方传入store，开发中我们有很多的容器组件，那么每个都要传store，如果只想传递一次那么我们就可以使用react-redux里面的Provider--提供者组件，这个组件能够分析他下面的所有容器组件并且把指定数据传入进去
                index.js改造：
                    ReactDOM.render(
                        <React.StrictMode>
                            <BrowserRouter>
                            <Provider store={store}> <App /></Provider>
                            </BrowserRouter>
                        </React.StrictMode>,
                        document.getElementById('root')
                4.文件树优化：像我们上面那种写法，一个UI组件就必须要有一个容器组件，但是其实可以把UI组件和容器组件合并
                    使用例子看：reactReduxUse/Count组件合并UI和容器，这是是没有单独写container的

！！！上面所有的代码都放在了02_到redux但还未到redux应用---要查看改成src就可以启动了,主要是由于后面我们有了多个reducer所以取值方式有所改变修改的地方较多 所以做了预保留

        实际开发：实际开发的时候，我们会建立actions文件夹，reducers文件夹存放每个组件的action和reducer
                那么既然我们有多个reducer在store.js里面就需要更改暴露形式了，要使用到redux里面的combineReducers--API来合并我们的多个reducer:合并之后是一个总的状态对象---当然我们一般会在项目中单独在reducers文件夹下面去写个index文件汇总后暴露出来
                    const allReducer = combineReducers({
                            sum:countReducer,
                            rens:personReducer
                        })//这里传入的对象就是我们redux保存的总状态对象
                        //那么我们在取值的时候就需要注意取到相应层级，相当于加上我们这里定义的层级---state=>({persons:state.persons}),
                    //暴露store
                    export default createStore(allReducer,applyMiddleware(thunk))
                
        注意事项：
            纯函数：一类特别的函数，只要是同样的输入，必须得到同样的输出
            它必须遵循一下规则：
                    1.不得修改参数数据
                    2.不会产生任何副作用，例如网络请求，输入输出设备
                    3.不能调用Date.now（）或者Math.random()这种不纯的方法
            而我们的redux中的reducer就必须是一个纯函数，所以我们在操作redux中的数组和obj数据的时候尽量使用扩展符来产生新的数据作为返回，减少使用数组的一些方法
            vue里面其实也是这么在操作的
redux开发者插件：chrome
        1.浏览器安装扩展程序：redux DevTools
        2.项目中下载redux-devtools-extension
        3.改造.store配置:
            export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
redux优化：
        1.所有变量名尽量规范，触发我们的对象精简形式
        2..reducers文件夹中，编写index.js专门用于汇总我们的reducer并暴露



打包上线：
        npm run build====生成build文件夹
        现在生成的静态文件不可直接打开，需要在服务器上去运行
        当然我们也可以使用serve服务器在本地启动服务器或者我们的live-server启动本地服务器

    