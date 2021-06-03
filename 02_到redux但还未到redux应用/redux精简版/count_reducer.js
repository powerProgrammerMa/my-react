/*
 该文件是用于创建一个为count组件服务的reducer，reducer的本质就是一个函数 
    reducer是一个纯函数，最好只做数据更改操作
    reducer函数会接收两个参数：preState--之前的状态
                             action：动作对象
    这里操作state需是不会导致页面重新render的，需要在组件里面监听变化自己调用render才能将变更重新渲染到页面
 */

const initState = 0;//初始化state,如果多个值就写成对象
function countReducer(preState=initState,action){ 
    //从action对象获取数据和类型
    const {type,data} = action;
    // 根据type决定如何加工数据
    switch(type){
        case "increment":
            return preState+data;
        case "decrement":
            return preState-data;
        default:
            return preState
    }

}
export default countReducer