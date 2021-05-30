//创建hello组件
import React, { Component } from 'react'
import "./Hello.css"
export default class Hello extends Component {
    render() {
        return (
            <div>
                <h2 className="co">Hello world!!!</h2>
            </div>
        )
    }
}
