/*
    组件的生命周期：新版本废弃了旧版的三个，新增了两个;
        挂载时执行顺序：构造器-》componentWillMount->render->componentDidMount
        状态数据更新时执行顺序：shouldComponentUpdate-》componentWillUpdate-》render-》componentDidUpdate
        强制更新（forceUpdate()）时执行顺序：componentWillUpdate-》render-》componentDidUpdate
        组件卸载时执行顺序：componentWillUnmount
        父组件更新触发子组件更新：componentWillReceiveProps=》shouldComponentUpdate-》componentWillUpdate-》render-》componentDidUpdate

    手动卸载组件：ReactDOM.unmountComponentAtNode()

    常用的三个声明周期：
        componentDidMount：做一些初始化的事情：开定时器，发网络请求，订阅消息
        componentWillUnmount：在这里做收尾：关闭定时器、关闭socket、取消订阅
        render：必用
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Life extends Component {
    constructor(props){
        console.log("constructor");
        super(props)
        this.state={
            count:0
        }
    }
    
    add=()=>{
        this.setState({count:this.state.count+1})
    }
    update=()=>{
        this.forceUpdate();//强制更新
    }
    //卸载组件
    out=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }
    //组件将要挂载
    componentWillMount(){
        console.log("componentWillMount");
    }
    //组件挂载完毕
    componentDidMount(){
        console.log("componentDidMount");
    }
    //组件将要卸载--卸载之前
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    //组件是否应该被更新---如果返回false：则阻断更新----如果写了这个钩子就必须有返回值
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    //组件将要更新
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    //组件更新完成
    componentDidUpdate(preProps,preState){
        console.log("componentDidUpdate");
    }
    //将要接收新的props：注意第一次传递props不会调用
    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps");
    }
    //初始化渲染调用和state改变调用
    render() {
        console.log("render");
        return (
            <div>
                <h1>7.组件的生命周期（旧）</h1>
                <div>
                    <div>当前求和为：{this.state.count}</div>
                    <button onClick={this.add}>点我+1</button>
                    <button onClick={this.update}>不更改state但要强制组件更新</button>
                    <button onClick={this.out}>点我卸载</button>
                </div>
            </div>
        )
    }
}
