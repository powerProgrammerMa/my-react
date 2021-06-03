/*
    react-redux--精简版对应的UI组件
 */

import React, { Component } from 'react'
export default class Count extends Component {

    //加法
    increment=()=>{
        let num = this.selectNum.value
        //调用容器组件传递过来的加操作
        this.props.jia(parseInt(num))
    }
    //减法
    decrement=()=>{
        let num = this.selectNum.value
       //调用容器组件传递过来的减操作
       this.props.jian(parseInt(num))
    }
    //奇数加
    incrementIfodd=()=>{
        let num = this.selectNum.value
        if(this.props.count%2 !==0){
             //调用容器组件传递过来的加操作
            this.props.jia(parseInt(num))
        }
    }
    //异步加
    incrementAsync=()=>{
        let num = this.selectNum.value
        //调用容器组件传递过来的异步加操作
        this.props.asyncjia(parseInt(num),500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>16.react-redux使用---精简版</h1>
                <h3>当前求和为：{this.props.count}</h3>
                <div>
                    <select ref={(c)=>this.selectNum = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfodd}>当前求和为奇数在加</button>
                    <button onClick={this.incrementAsync}>异步加和</button>
                </div>
            </div>
        )
    }
}
