/*
    虚拟dom比较的最小单位是标签
 */
import React, { Component } from 'react'

export default class Check extends Component {
    state={
        date:new Date()
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h1>10.diffing算法验证</h1>
                <input type="text" />
                <span>现在是:{this.state.date.toString()}</span>
            </div>
        )
    }
}
