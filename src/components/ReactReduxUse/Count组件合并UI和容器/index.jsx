/*
    react-redux：这里合并了UI组件和容器组件---以后都是这样写组件
 */

import React, { Component } from 'react'

  //引入连接UI组件与redux的connect
  import {connect} from "react-redux"
  //引入action
  import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../../redux/actions/count"
class Count extends Component {

    //加法
    increment=()=>{
        let num = this.selectNum.value
        //调用容器组件传递过来的加操作
        this.props.increment(parseInt(num))
    }
    //减法
    decrement=()=>{
        let num = this.selectNum.value
       //调用容器组件传递过来的减操作
       this.props.decrement(parseInt(num))
    }
    //奇数加
    incrementIfodd=()=>{
        let num = this.selectNum.value
        if(this.props.count%2 !==0){
             //调用容器组件传递过来的加操作
            this.props.increment(parseInt(num))
        }
    }
    //异步加
    incrementAsync=()=>{
        let num = this.selectNum.value
        //调用容器组件传递过来的异步加操作
        this.props.incrementasync(parseInt(num),500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>17.react-redux使用合并UI组件和容器组件</h1>
                <h3>当前求和为：{this.props.sum}</h3>
                <h3>下方组件人数为：{this.props.personCount}</h3>
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


/*
    这里写的是countUI组件的容器组件的精简版，并导出，开发中我们会把import拿到上面去;
 */
    //使用connect（）（）并暴露一个count的容器组件
    // 这是我们使用组件就需要使用容器组件了不再使用UI组件了，而且容器组件和UI组件形成了父子关系
    export default connect(
        state=>({sum:state.sum,personCount:state.persons.length}),
        {
            increment:createIncrementAction,//这里只需要提供一个action react-redux自动帮助我们dispatch了
            decrement:createDecrementAction,
            incrementasync:createIncrementAsyncAction
        }
        )(Count)