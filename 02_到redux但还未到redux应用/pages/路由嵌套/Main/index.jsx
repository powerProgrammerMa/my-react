import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from "react-router-dom"
import Home from "../Home"
import About from "../About"
export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>13.路由嵌套</h1>
                    <NavLink activeClassName="click" to="/newabout">About</NavLink>   | 
                    <NavLink activeClassName="click" to="/newhome">Home</NavLink>     | 
                <hr />
                <div>下面是展示区</div>
               
                <Switch>
                    <Route path="/newabout" component={About}></Route>
                    <Route  path="/newhome" component={Home}></Route>
                    {/* <Redirect to="/newabout" /> */}
                </Switch>
            </div>
        )
    }
}
