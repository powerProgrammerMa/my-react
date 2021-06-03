/*
    本文件专门用于创建和暴露一个store对象，整个应用只有一个store对象
 */
//createStore专门用于创建redux中最为核心的库store
// combineReducers用于合并我们的多个reducer
import {createStore,applyMiddleware} from "redux" 

//引入我们的reducers
import countReducer from "./reducers/count"
//引入redux-thunk,同时要引用redux库中的applyMiddleware执行中间件，用于支持异步action
import thunk from "redux-thunk"

//暴露store
export default createStore(countReducer,applyMiddleware(thunk))
