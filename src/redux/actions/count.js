/*
    该文件为count组件生成action对象
    由于store.js默认只认识object类型，当我们使用异步action的时候返回的是function，所以需要使用一个中间件redux-thunk
    这个中间件主要是告诉store，这个action先不要给reducer执行，先执行这个异步action
 */
    import {INCREMENT,DECREMENT} from "../constant"
    //这里引入store.js是为了在异步任务中派发action---如果不引入可以直接使用dipatch
    import store from "../store.js"

   export const createIncrementAction=(data)=>({type:INCREMENT,data})
    
   export const createDecrementAction =  (data)=>({type:DECREMENT,data})
   // 这是一个异步的action；上面是同步action：就是指action的返回值为一个函数（函数才能开启异步任务），同步的action就是返回一个对象
   export const createIncrementAsyncAction =  (data,time)=>{
      return ()=>{
         setTimeout(()=>{
            //通知redux执行加操作
            store.dispatch(createIncrementAction(data))
         },time)
      }
   }
    
   // 如果不引入store可以直接使用dipatch
   export const createIncrementAsyncAction2 =  (data,time)=>{
      return ()=>{
         setTimeout((dispatch)=>{
            //通知redux执行加操作
            dispatch(createIncrementAction(data))
         },time)
      }
   }
    