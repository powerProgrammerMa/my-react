/*
    经典面试题:
        两种问法:
            1.react/vue中key有什么作用?(key的内部原理是什么)
            2.为什么在遍历列表的时候,最好不要使用index作为key
                (1)虚拟dom中key的作用
                    简单的说:它是虚拟dom的对象标识,在更新显示时起着极其重要的作用   
                    详细的说:当状态数据发生改变的时候,react会根据新数据生成新的虚拟dom,随后把新的虚拟dom与旧的虚拟dom进行diff比较,比较规则如下:
                            a.旧的虚拟dom中找到了与新的虚拟dom相同的key:
                                (1)如果虚拟dom中内容没变,直接使用之前的真实dom
                                (2)如果变了,则生成新的真实dom,随后替换页面中的真实dom
                            b.旧的虚拟dom中没有找到与新的虚拟dom相同的key:
                                根据数据创建新的真实dom,随后渲染到页面
                (2)使用index作为key可能会引发的问题
                    1.若对数据进行:如逆序添加\逆序删除等破坏顺序的操作:会产生没有必要的真实dom更新===>界面效果没问题,但是效率较低
                    2.如果结构中还包含输入类dom:会产生错误dom更新====>界面有问题
                    3.注意!如果不存在对数据的逆序添加,逆序删除等破坏顺序操作,仅用于渲染列表用于展示,使用index作为key是没有问题的
            3.开发中如何选择key?
                使用每条数据的唯一标识:id,手机号,身份证号等
                如果只是展示数据可以使用index


 */

/* 

    慢动作回放====使用index作为key: 
        数据:
            persons:[
                {
                    id:1,
                    name:"校长",
                    age:18
                },
                {
                    id:2,
                    name:"老师",
                    age:19
                }
            ]
        初始的虚拟dom:
            <li key=0>校长----18</li>
            <li key=1>老师----19</li>
        更新数据:
            persons:[
                {
                    id:3,
                    name:"小王",
                    age:20
                },
                {
                    id:1,
                    name:"校长",
                    age:18
                },
                {
                    id:2,
                    name:"老师",
                    age:19
                }
            ]
        更新后的虚拟dom:
            <li key=0>小王----20</li>
            <li key=1>校长----18</li>
            <li key=2>老师----19</li>
        这个新虚拟dom在进行diff算法的时候会发现新的虚拟dom与旧的全部都不一样所以会全部在生成一次真实dom渲染到页面
*/
import React, { Component } from 'react'

export default class Key extends Component {
    state={
        persons:[
            {
                id:1,
                name:"校长",
                age:18
            },
            {
                id:2,
                name:"老师",
                age:19
            }
        ]
    }
    add=()=>{
        const {persons} = this.state;
        let person = {
            id:persons.length+1,
            name:"小王",
            age:20
        }
        this.setState({
            persons:[person,...persons]
        })
    }
    render() {
        return (
            <div>
                <h1>11.KEY的作用</h1>
                <div>使用index作为key---展示人员信息</div>
                <ul>
                    {this.state.persons.map((item,index)=><li key={index}>{item.name}----{item.age} <input type="text" /></li>)}
                </ul>
                <hr />
                <div>使用id作为key---展示人员信息</div>
                <ul>
                    {this.state.persons.map((item)=><li key={item.id}>{item.name}----{item.age} <input type="text" /></li>)}
                </ul>

                <button onClick={this.add}>添加人员信息小王</button>

            </div>
        )
    }
}
