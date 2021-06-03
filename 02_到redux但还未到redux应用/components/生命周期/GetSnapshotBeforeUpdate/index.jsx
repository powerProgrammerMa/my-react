/*
    getSnapshotBeforeUpdate:使用案例
    需求:页面刚开始没有新闻,每隔一秒钟新增一条新闻,但是要求滚动条不在随着数据的增加而滚动
 */
import React, { Component } from 'react'
import "./index.css"
export default class GetSnapshotBeforeUpdate extends Component {
    constructor(props){
        console.log("constructor");
        super(props)
        this.state={
            newsArr:[]
        }
    }
   
    //组件挂载完毕
    componentDidMount(){
        console.log("componentDidMount");
        // setInterval(() => {
        //     //获取原状态
        //     const {newsArr} = this.state
        //     //模拟一条新闻
        //     const news = "新闻"+(parseInt(newsArr.length)+1)
        //     this.setState({
        //         newsArr:[news,...newsArr]
        //     })
        // }, 1000);
    }
    //在更新前获得一个快照,必须有返回值(null或者其他值);主要用于更新之前组件信息的获取
    // 接收之前的props和state;
    // 返回值传递给componentDidUpdate
    getSnapshotBeforeUpdate(){
        return this.list.scrollHeight
    }
    componentDidUpdate(preProps,preState,Height){
        this.list.scrollTop += this.list.scrollHeight-Height
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>9.getSnapshotBeforeUpdate使用（打开注释代码查看效果）</h1>
                <div>
                    <div className="list"  ref={(currentNode)=>{this.list = currentNode}}>
                        {
                            this.state.newsArr.map((item,index)=><div className="news" key={index}>{item}</div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
