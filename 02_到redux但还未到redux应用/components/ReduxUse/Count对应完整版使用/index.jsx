/*
 redux完整版
 */
import React, { Component } from 'react'
//引入store,用于获取store中的状态
import store from '../../../redux/store'
//引入actionCreator，专门用于创建action对象
import {createDecrementAction,createIncrementAction} from "../../../redux/count_action"
export default class Count extends Component {

    //加法
    increment=()=>{
        let num = this.selectNum.value
        //通知redux执行加操作
        store.dispatch(createIncrementAction(parseInt(num)))
    }
    //减法
    decrement=()=>{
        let num = this.selectNum.value
        //通知redux执行加操作
        store.dispatch(createDecrementAction(parseInt(num)))
    }
    //奇数加
    incrementIfodd=()=>{
        let num = this.selectNum.value
        if(store.getState()%2!==0){
            store.dispatch(createIncrementAction(parseInt(num)))
        }
        
    }
    //异步加
    incrementAsync=()=>{
        let num = this.selectNum.value
        setTimeout(() => {
            store.dispatch(createIncrementAction(parseInt(num)))
        }, 1000);
        
    }
    render() {
        return (
            <div>
                <h1>14.redux使用</h1>
                <h3>当前求和为：{store.getState()}</h3>
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
