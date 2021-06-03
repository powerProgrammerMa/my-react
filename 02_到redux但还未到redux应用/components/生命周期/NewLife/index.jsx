/*
 这是17版本的生命周期：在新版本里面是可以使用旧版本的生命周期的钩子，但是会出现警告；
 如果在17版本想要使用旧版本的生命周期可以在旧版本的前面加UNSAFE_
    componentWillMount\componentWillReceiveProps\componentWillUpdate
    因为这几个经常被滥用，react又在研究实现异步渲染，这几个生命周期在未来版本中可能会出现bug，尤其是在推出异步渲染后

新版本的生命周期：废弃了上面三个，新增了两个
    getDerivedStateFromProps：需要增加static关键字
    getSnapshotBeforeUpdate:更新时使用,在render之后调用

新版本的执行顺序：
    挂载时执行顺序：构造器-》getDerivedStateFromProps->render->componentDidMount
    状态数据更新时执行顺序：getDerivedStateFromProps=>shouldComponentUpdate-》render-》getSnapshotBeforeUpdate=>componentDidUpdate
    强制更新（forceUpdate()）时执行顺序：render-》componentDidUpdate
    组件卸载时执行顺序：componentWillUnmount
    父组件更新触发子组件更新：getDerivedStateFromProps=>shouldComponentUpdate-》render-》getSnapshotBeforeUpdate=>componentDidUpdate
对于新版本:其实没有对我们常用的生命周期做更改
 */
import React, { Component } from 'react'
import ReactDOM from "react-dom"
export default class NewLife extends Component {
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
    // UNSAFE_componentWillMount(){
    //     console.log("componentWillMount");
    // }
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
    // UNSAFE_componentWillUpdate(){
    //     console.log("componentWillUpdate");
    // }
    //组件更新完成
    // snapshotValue:接受新生命周期的快照值
    componentDidUpdate(preProps,preState,snapshotValue){
        console.log("componentDidUpdate");
    }
    //将要接收新的props：注意第一次传递props不会调用
    // UNSAFE_componentWillReceiveProps(props){
    //     console.log("componentWillReceiveProps");
    // }


    // 新增的生命周期

    //getDerivedStateFromProps:得到从props派生出来的state(即state的值任何时候都取决于props,且不可更改):
    // 需要返回状态对象或者null;接收外部参数和本组件的state
    //使用场景极其罕见
    static getDerivedStateFromProps(props,state,){
        console.log("getDerivedStateFromProps",state);
        return null;
        // return props
    }
    //在更新前获得一个快照,必须有返回值(null或者其他值);主要用于更新之前组件信息的获取
    // 接收之前的props和state;
    // 返回值传递给componentDidUpdate
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate");
        return null;
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>8.组件的生命周期（新）</h1>
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
