import React, { Component } from 'react'
import "./index.css"
export default class About extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                我是about的内容
                <div className="co">
                    我是有样式的
                </div>
            </div>
        )
    }
}
