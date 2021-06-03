/*
    本文件主要用于汇总所有reducers
 */
//createStore专门用于创建redux中最为核心的库store
// combineReducers用于合并我们的多个reducer
import {combineReducers} from "redux" 

//引入我们的reducers
import sum from "./count"
import persons from "./person"
//引入redux-thunk,同时要引用redux库中的applyMiddleware执行中间件，用于支持异步action

export default combineReducers({
    sum,
    persons
})