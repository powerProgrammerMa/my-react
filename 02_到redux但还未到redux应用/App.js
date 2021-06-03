/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-05-30 17:26:08 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-06-03 19:11:53
 */


import './App.css';

//创建函数组件
// function App() {
//     return ( 
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                 Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                 Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }
// export default App;
//创建类组件
import React, { Component } from 'react'
import State from "./components/State"
import Eventbind from "./components/Eventbind"
import Props from "./components/Props"
import Refs from "./components/Refs"
import EventHandel from "./components/EventHandel"
import Form from "./components/Form"
// import Life from "./components/生命周期/Life"
import NewLife from "./components/生命周期/NewLife"
import GetSnapshotBeforeUpdate from "./components/生命周期/GetSnapshotBeforeUpdate"
import Check from "./components/Diffing/Check"
import Key from "./components/Diffing/Key"
import Router from "./components/Router"
import MoreRouter from "./pages/路由嵌套/Main"
import CountRedux from "./components/ReduxUse/Count"
import CountReactRedux from "./containers/Count"
import CountReactRedux2 from "./containers/Count精简版"
import CountReactRedux3 from "./components/ReactReduxUse/Count组件合并UI和容器"


//这里引入store是为了使用我们的react-redux，他要求store必须由使用容器的地方通过props传入
import store from "./redux/store"
export default class App extends Component {
    render() {
        return (
            <div style={{padding:"20px 20px 200px 20px"}}>
                   <State></State>
                   <Eventbind></Eventbind>
                   <Props name="tom" age={18} sex="女"></Props>
                   <Refs></Refs>
                   <EventHandel></EventHandel>
                   <Form></Form>
                   {/* <Life></Life> */}
                   <NewLife></NewLife>
                   <GetSnapshotBeforeUpdate></GetSnapshotBeforeUpdate>
                   <Check></Check>
                   <Key></Key>
                   <Router></Router>
                   <MoreRouter></MoreRouter>
                   <CountRedux></CountRedux>
                   {/* 这是使用react-redux的容器组件 */}
                   <CountReactRedux store={store}></CountReactRedux>
                   {/* 这是使用react-redux的容器组件，但是由于我们在最外层添加了Provider组件所以这里就不需要在传递store */}
                   <CountReactRedux2 ></CountReactRedux2>
                   {/* 这是将容器组件和UI组件合并了 */}
                   <CountReactRedux3 ></CountReactRedux3>
                  
            </div>
        )
    }
}


