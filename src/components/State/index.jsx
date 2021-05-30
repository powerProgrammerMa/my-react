/*
    对state的理解：
        1.如何去区别复杂和简单组件----看是否有state---函数式组件是没有state的
        2.初始化state就需要在构造器函数里面去初始化,需要为对象形式
        3.通过this.state调用状态数据
        4.state也可以不写在构造器里面，相当于在类中直接写赋值语句也是可以的但是一般写在构造器里面
 */
import React, { Component } from 'react'
import "./index.css"
export default class State extends Component {
    constructor(props){
        super(props);
        this.state={
            isHot:false
        }
    }
    render() {
        return (
            <div>
                <h1>State的使用</h1>
                <div>{this.state.isHot?"今天天气炎热":"今天天气凉爽"}</div>
            </div>
        )
    }
}
