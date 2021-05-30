/*
    源生事件绑定：
        var btn = document.getElementById("btn")
        (1)
        btn.addEventListener("clik",()=>{

        })
        (2)
        btn.onclick = ()=>{

        }
        (3)
        <button onclick="btnclick()"></button>
        function btnclick(){

        }
    react事件绑定：与原生的第三种类似但是有区别
        1.需要将原生事件进行驼峰命名
        2.需要使用{}插入并且不需要写（），如果写了那在render时就会直接执行
        3.注意事件函数的写法

    state数据修改：
        1.特别注意：不能直接修改state数据，直接改了不触发页面重新渲染，需要使用setSate（）
        2.setState（）更新是一种合并，不是替换
        3.出于性能考虑，React可能会把多个 setState() 调用合并成一个调用
        4.State 的更新可能是异步的
            要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。
            这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
            this.setState((state, props) => ({
                counter: state.counter + props.increment
                }));
            上面使用了箭头函数，不过使用普通的函数也同样可以：
            this.setState(function(state, props) {
                return {
                    counter: state.counter + props.increment
                };
                });
        5.state改变就会调用render（）
 */
import React, { Component } from 'react'
import "./index.css"
export default class Eventbind extends Component {
    constructor(props){
        // 这里的this是指向组件的实例对象所以可以直接使用this
        super(props);
        this.state={
            isHot:false,
            wind:"微风"
        }
    /*   
        解决change中this指向问题
        this.change = this.change.bind(this)
     */
    }
    /* 
    如果下面这样写会导致调用时this指向undefind：由于change方法是作为onClick的回调，所以不是通过Eventbind实例对象调用的，是直接调用，
                                             并且由于类中的方法开启了严格模式，所以指向了undefind
    change(){
        console.log(this)
    }
    解决方法：
        （1）.在构造器里面绑定this；-----this.change = this.change.bind(this):这就把原型对象上的方法改变this指向后赋值给了Eventbind实例自身的方法
        （2）.使用箭头函数,在类中直接写赋值语句
            change=()=>{
                console.log(this)
                this.setState({
                    isHot:!this.state.isHot
                })
            }
    */
    change=()=>{
        this.setState({
            isHot:!this.state.isHot
        })
    }
    render() {
        //读取状态，注意这里的this是指向组件实例对象的所以可以直接使用this
        const {isHot,wind} = this.state;
        return (
            <div>
                <h1>事件绑定和修改State数据</h1>
                <div onClick={this.change}>{isHot?"今天天气炎热!":"今天天气凉爽!"}{"----"+wind}</div>
            </div>
        )
    }
}
