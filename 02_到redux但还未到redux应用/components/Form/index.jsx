/*
    受控组件和非受控组件:
        非受控组件就是自己需要去取value值
        受控组件将value维护到state中
    高阶函数：符合下面规范中的任何一个就是高阶函数
            1.若A函数接收的参数是一个函数，那么A就是一个高阶函数
            2.若A函数调用的返回值是一个函数，那么A就是一个高阶函数
            常见的高阶函数：Promise、settimeout、arr.map等等

    函数的柯里化：一般我们编写form表单的时候会采用受控组件但是你看上面的这种写法组件的代码重复度很高,这个时候就需要使用高阶函数--柯里化
                定义：通过函数调用继续返回函数的方式，实现多次接收参数，最后统一处理的函数编码形式



            
 */
import React, { Component } from 'react'

export default class Form extends Component {
    state={
        username:"",
        password:"",
    }
    //处理表单数据
    handleSubmit=(event)=>{
        event.preventDefault();//阻止表单的默认事件--跳转页面
        const {username,password} = this;
        alert(username.value+password.value) 
    }
    handleSubmit2=(event)=>{
        event.preventDefault();//阻止表单的默认事件--跳转页面
       
        alert(this.state.username+this.state.password) 
    }
    // 保存change事件的数据
    saveDataName=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    saveDataPas=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    // 函数柯里化
    saveData=(dataType)=>{
        return (event)=>{
            this.setState({
                [dataType]:event.target.value
            })
        }
        
    }
    //非柯里化实现
    saveData2=(event,dataType)=>{
        this.setState({
            [dataType]:event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>6.收集表单数据--受控组件和非受控组件+函数柯里化</h1>
                {/* 非受控组件 */}
                <div>
                    <form action="" onSubmit={this.handleSubmit}>
                        用户名：<input ref={c=>{this.username = c}} type="text" name="username" />
                        密码  ：<input ref={c=>{this.password = c}} type="password" name="password" />
                        <button type="submit">登录</button>
                    </form>
                </div>
                {/* 受控组件 */}
                <div>
                    <form action="" onSubmit={this.handleSubmit2}>
                        用户名：<input onChange={this.saveDataName}  type="text" name="username" />
                        密码  ：<input onChange={this.saveDataPas} type="password" name="password" />
                        <button type="submit">登录</button>
                    </form>
                </div>
                {/* 函数柯里化 */}
                <div>
                    <form action="" onSubmit={this.handleSubmit2}>
                        用户名：<input onChange={this.saveData("username")}  type="text" name="username" />
                        密码  ：<input onChange={this.saveData("password")} type="password" name="password" />
                        <button type="submit">登录</button>
                    </form>
                </div>
                {/* 不用柯里化实现 */}
                <div>
                    <form action="" onSubmit={this.handleSubmit2}>
                        用户名：<input onChange={(event)=>{this.saveData2(event,"username")}}  type="text" name="username" />
                        密码  ：<input onChange={(event)=>{this.saveData2(event,"password")}} type="password" name="password" />
                        <button type="submit">登录</button>
                    </form>
                </div>
            </div>
        )
    }
}
