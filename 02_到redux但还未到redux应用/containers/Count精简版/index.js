/*
    这里写的是countUI组件的容器组件的精简版
 */
import CountUI from "../../components/ReactReduxUse/Count精简版"
//引入连接UI组件与redux的connect
import {connect} from "react-redux"

//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/actions/count"

//使用connect（）（）并暴露一个count的容器组件
// 这是我们使用组件就需要使用容器组件了不再使用UI组件了，而且容器组件和UI组件形成了父子关系
export default connect(
    state=>({count:state}),
    // mapDispatchToProps的一般精简写法--代码层面
    /* dispatch=>({
        jia:num=>dispatch(createIncrementAction(num)),
        jian:num=>dispatch(createDecrementAction(num)),
        asyncjia:(num,time)=>dispatch(createIncrementAsyncAction(num,time))
    }) */
    // mapDispatchToProps的精简写法---API层面
    {
        jia:createIncrementAction,//这里只需要提供一个action react-redux自动帮助我们dispatch了
        jian:createDecrementAction,
        asyncjia:createIncrementAsyncAction
    }
    )(CountUI)