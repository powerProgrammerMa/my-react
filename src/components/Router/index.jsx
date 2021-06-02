import React, { Component } from 'react'
import {Link,NavLink,Route,Switch,Redirect} from "react-router-dom"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Exact from "../../pages/Exact"
import "./index.css"
export default class Router extends Component {
    // exact:开启严格匹配
    render() {
        return (
            <div>
                <h1>12.路由的使用</h1>
                <NavLink activeClassName="click" to="/about">About</NavLink>   | 
                <NavLink activeClassName="click" to="/home">Home</NavLink>     | 
                <NavLink activeClassName="click" to="/exact">Exact</NavLink>   | 
                <hr />
                <div>下面是展示区</div>
                
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route  path="/home" component={Home}></Route>
                    <Route exact path="/exact" component={Exact}></Route>
                    {/* <Redirect to="/about" />   */}
                </Switch>
                {/* 由于后面做了路由嵌套所以需要暂时注释掉 */}
            </div>
        )
    }
}
