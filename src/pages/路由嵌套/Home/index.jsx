import React, { Component } from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import News from "./News"
import Message from "./Message"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>我是home的内容</div>
                
                <NavLink activeClassName="click" to="/newhome/News">News</NavLink>   | 
                <NavLink activeClassName="click" to="/newhome/Message">Message</NavLink>     |
                <div>子路由内容展示区</div>
                <Switch>
                    <Route path="/newhome/News" component={News}></Route>
                    <Route  path="/newhome/Message" component={Message}></Route>
                    <Redirect to="/newhome/Message" />  
                </Switch> 
            </div>
            
        )
    }
}
