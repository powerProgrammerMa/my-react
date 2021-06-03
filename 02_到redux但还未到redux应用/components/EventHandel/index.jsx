/*
    (1).通过onXxxx属性指定事件处理函数（注意大小写）
        a.react使用的是自定义（合成）事件，而不是原生的Dom事件---为了更好的兼容性
        b.react中的事件是通过事件委托方式处理的（委托给组件最外层的元素）---为了高效
    （2）.通过event.target得到发事件的dom元素对象

   
 */
import React, { Component } from 'react'
import "./index.css"
export default class EventHandel extends Component {
  

    showData=(event)=>{
        console.log(event)
        alert(event.target.value)
    }
    render() {
      
        return (
            <div>
                <h1>5.react事件处理</h1>
                <input onBlur={this.showData} type="text" placeholder="失去焦点提示数据" />
            </div>
        )
    }
}
