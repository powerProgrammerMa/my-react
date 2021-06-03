/*
    本文件专门用于创建和暴露一个store对象，整个应用只有一个store对象
 */
//createStore专门用于创建redux中最为核心的库store
// combineReducers用于合并我们的多个reducer
import {createStore,applyMiddleware,combineReducers} from "redux" 

//引入我们的汇总reducers
import allReducer from "./reducers/index"

//引入redux-thunk,同时要引用redux库中的applyMiddleware执行中间件，用于支持异步action
import thunk from "redux-thunk"
//引入composeWithDevTools方便为我们在开发的时候使用redux的chrome插件
import {composeWithDevTools} from "redux-devtools-extension"

/* 这里我们拿到了reducer文件夹下面单独写了
    const allReducer = combineReducers({
        sum:countReducer,
        persons:personReducer
    })//这里传入的对象就是我们redux保存的总状态对象
    //那么我们在取值的时候就需要注意取到相应层级，相当于加上我们这里定义的层级 
*/

//暴露store
// export default createStore(allReducer,applyMiddleware(thunk))
//由于我们要使用谷歌的redux插件所以需要对上面代码改造，注意如果扩展程序没有安装或者版本不对都可能会引发问题
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
