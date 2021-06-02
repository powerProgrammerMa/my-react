/*
    Props:用于接收外部数据,是只读的，不可在接收方更改props数据，可以运算，但是修改会报错
        1.props批量传输可以使用{...obj}对象展开
        2.对props数据进行限制--使用propTypes
            16以前PropTypes是在React核心库中的可以React.PropTypes直接用；
            在16以后版本中：
                使用npm安装prop-types包
                import PropTypes from 'prop-types';
                //对props数据类型和必要性进行限制
                Props.prototypes = {
                    name:PropTypes.string.isRequired//name必须为string类型且必须传
                    sex:PropTypes.string
                    age:PropTypes.number
                    speak:PropTypes.func//限制speak必须为函数类型，注意这里不是写function
                }
                //指定props默认值
                Props.defaultProps = {
                    sex:"不男不女"
                }
                上面是写在组件外部，那么想要写在内部则是：static就是给类自身添加属性---注意不要写在render函数里面
                static prototypes = {
                    name:PropTypes.string.isRequired//name必须为string类型且必须传
                    sex:PropTypes.string
                    age:PropTypes.number
                    speak:PropTypes.func//限制speak必须为函数类型，注意这里不是写function
                }
                //指定props默认值
                static defaultProps = {
                    sex:"不男不女"
                }
        3.构造器与props：如果需要在构造器里面使用props那么就需要传递给super
                构造器是否接收props，是否传递给super：取决于是否希望在构造器中通过this去访问props
        4.函数式组件可以使用props:当然如果你想对props做限制那么就只能写在外部了写法跟上面一样
                import React from 'react'
                export default function Props(props) {
                    var change=()=>{
                        console.log("函数式组件绑定方法")
                    }
                    return (
                        <div>
                            <div onClick={change}>这是我从外部接收到的数据name：{props.name}</div>
                        </div>
                    )
                }
            
 */
import React, { Component } from 'react'
import "./index.css"
export default class Props extends Component {
    constructor(props){
        super(props);//如果需要在构造器里面使用props那么就需要传递给super
        console.log(props)
        this.state={}
    }
    render() {
        const {name} = this.props;
        return (
            <div>
                <h1>3.Props的使用</h1>
                <div>这是我从外部接收到的数据name：{name}</div>
            </div>
        )
    }
}



