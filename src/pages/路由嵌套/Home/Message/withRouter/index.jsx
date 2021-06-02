import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class index extends Component {
    render() {
        return (
            <div>
                这个是一般组件但是具备了路由组件的API
            </div>
        )
    }
}
export default withRouter(index)
