/*
    这个组件演示了和count组件的数据共享
        // 实现效果：count组件的和就是我们person组件展示人数
 */
import React, { Component } from 'react'
  //引入连接UI组件与redux的connect
  import {connect} from "react-redux"
//   nanoid---能够生成 一个随机的唯一的id
import {nanoid} from "nanoid"
  //引入action
  import {createAddPersonAction} from "../../../../redux/actions/person"
class Person extends Component {
    addPerson=()=>{
        const name = this.nameNode.value;
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.nameNode.value = ""
        this.ageNode.value = ""
    }
    render() {
        return (
            <div>
                <h1>18.react-redux实现和(Count组件合并UI和容器)组件实现交互</h1>
                <h1>上方求和为：{this.props.sum}</h1>
                <hr />
                <input ref={n=>this.nameNode=n} type="text" placeholder="输入名字" />
                <input ref={n=>this.ageNode=n} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {/* //这里使用了redux传递过来的数据 */}
                    {this.props.persons.map((item)=><li key={item.id}>名字:{item.name}---年龄:{item.age}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({persons:state.persons,sum:state.sum}),
    {
        addPerson:createAddPersonAction
    }
    )(Person)