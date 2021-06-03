/*
    本文件专门用于创建和暴露一个store对象，整个应用只有一个store对象
 */
import {createStore} from "redux" //createStore专门用于创建redux中最为核心的库store

import countReducer from "./count_reducer"//引入我们的reducers

//暴露store
export default createStore(countReducer)
