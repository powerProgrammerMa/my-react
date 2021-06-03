/*
 演示传递Search参数传递
 */
import React, { Component } from 'react'
import qs from "querystring"
const data = [
    {id:1,content:"内容1"},
    {id:2,content:"内容2"},
    {id:3,content:"内容3"}
]
export default class GetSearch extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    
    render() {
        // 接受路由传递过来的search参数
        const {id,title} = qs.parse(this.props.location.search.slice(1))
        const findData=data.find((item)=>item.id==id)
        return (
            <div>
                <h1>这是展示message----search参数详情的</h1>
                <div>id:{id}</div>
                <div>标题：{title}</div>
                <div>内容：{findData.content}</div>
            </div>
        )
    }
}
