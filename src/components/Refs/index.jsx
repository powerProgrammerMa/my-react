/*
    refs:Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素；注意refs拿到的是真实dom

    下面是几个适合使用 refs 的情况：
        管理焦点，文本选择或媒体播放。
        触发强制动画。
        集成第三方 DOM 库。
    1.如果你目前还在使用 this.refs.textInput 这种方式访问 refs ，我们建议用回调函数或 createRef API 的方式代替。17版本现在string写法已经会报错了
        (1)api:textInput = React.createRef();--访问const node = this.textInput.current;---推荐使用这种
        (2)回调函数形式ref；访问this.input3，不需要加current
            ref={(currentNode)=>{this.input2 = currentNode}}//这种方式在state更新的时候会调用两次
            saveInput=(currentNode)=>{ //这种方式就可以避免重复调用
                this.input3 = currentNode
            }
            ref={this.saveInput}
            
 */
import React, { Component } from 'react'

export default class Refs extends Component {
    input1 = React.createRef();

    showData=()=>{
        console.log(this.input1)
        alert(this.input1.current.value)
    }
    showData2=()=>{
        alert(this.input2.value)
    }
    showData3=()=>{
        console.log(this)
        alert(this.input3.value)
    }
    saveInput=(currentNode)=>{
        this.input3 = currentNode
    }
    render() {
        return (
            <div>
                <h1>4.refs的使用</h1>
                <div>
                    <input ref={this.input1} type="text" placeholder="点击btn提示数据" />
                    <button onClick={this.showData}>点我提示左侧数据</button>
                    <input onBlur={this.showData2} ref={(currentNode)=>{this.input2 = currentNode}} type="text" placeholder="失去焦点提示数据" />
                    <input onBlur={this.showData3} ref={this.saveInput} type="text" placeholder="失去焦点提示数据" />
                </div>
            </div>
        )
    }
}
