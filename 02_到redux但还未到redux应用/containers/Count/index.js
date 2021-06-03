/*
    这里写的是countUI组件的容器组件
 */
// 引人count的UI组件
import CountUI from "../../components/ReactReduxUse/Count"
// 引入store--但是这里引入有些不方便---因为他已经要求store必须由使用容器的地方通过props传入，所以我们就写在了app.js里面了,并且可以直接使用state和dispatch
// import store from "../../redux/store"
//引入连接UI组件与redux的connect
import {connect} from "react-redux"

//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/actions/count"


//函数mapStateToProps(映射状态函数)的返回的是对象
// 对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 目的传递redux中的状态state
function mapStateToProps(state){
    return {
        count:state
    }
}
//函数mapDispatchToProps返回的对象
//对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 目的传递操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        jia:num=>dispatch(createIncrementAction(num)),
        jian:num=>dispatch(createDecrementAction(num)),
        asyncjia:(num,time)=>dispatch(createIncrementAsyncAction(num,time))
    }
}
//使用connect（）（）并暴露一个count的容器组件
// 这是我们使用组件就需要使用容器组件了不再使用UI组件了，而且容器组件和UI组件形成了父子关系
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)