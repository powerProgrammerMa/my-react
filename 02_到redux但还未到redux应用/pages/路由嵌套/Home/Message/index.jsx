import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import GetParams from "./GetParams"
import GetSearch from "./GetSearch"
import GetState from "./GetState"
import WithRouter from "./withRouter"
export default class Message extends Component {
    state={
        messageArr:[
            {id:1,title:"消息1"},
            {id:2,title:"消息2"},
            {id:3,title:"消息3"}
        ]
    }
    pushShow=(item)=>{
        // 编写一段代码，让其实现跳转到detail组件，且为push跳转，携带params参数
        this.props.history.replace(`/newhome/message/GetParams/${item.id}/${item.title}`)
        // 编写一段代码，让其实现跳转到detail组件，且为push跳转，携带search参数
        // this.props.history.replace(`/newhome/message/GetSearch/?id=${item.id}&title=${item.title}`)
        // 编写一段代码，让其实现跳转到detail组件，且为push跳转，携带state参数
        // this.props.history.replace(`/newhome/Message/GetState`,{id:item.id,title:item.title})
    }
    replaceShow=(item)=>{
        // 编写一段代码，让其实现跳转到detail组件，且为replace跳转
        this.props.history.replace(`/newhome/message/GetParams/${item.id}/${item.title}`)
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <div>我是消息组件</div>
                <WithRouter></WithRouter>
                {/* 传递params参数--button是编程式传递 */}
                <ul>
                   {
                       messageArr.map((item)=>{
                           return(
                            <li key={item.id}>
                                <Link to={`/newhome/message/GetParams/${item.id}/${item.title}`}>{item.title}</Link>
                                &nbsp;<button onClick={()=>this.pushShow(item)}>push查看</button>
                                &nbsp;<button onClick={()=>this.replaceShow(item)}>replace查看</button>
                            </li>
                           )
                       })
                   }
                </ul>
                {/* 传递search参数---编程式传递与上面类似 */}
                <ul>
                   {messageArr.map(item=><li key={item.id}><Link to={`/newhome/message/GetSearch/?id=${item.id}&title=${item.title}`}>{item.title}</Link></li>)} 
                </ul>
                {/* 传递state参数 且开启了replace模式*/}
                <ul>
                   {messageArr.map(item=><li key={item.id}><Link replace={true} to={{pathname:"/newhome/Message/GetState",state:{id:item.id,title:item.title}}}>{item.title}</Link></li>)} 
                </ul>
                    {/* 声明接受params参数 */}
                    <Route path="/newhome/Message/GetParams/:id/:title" component={GetParams}></Route>
                    {/* search参数无需声明接受 */}
                    <Route path="/newhome/Message/GetSearch" component={GetSearch}></Route>
                    {/* state参数无需声明接受 */}
                    <Route path="/newhome/Message/GetState" component={GetState}></Route>
            </div>
        )
    }
}
