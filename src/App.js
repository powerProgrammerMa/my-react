/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-05-30 17:26:08 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-06-03 00:36:22
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
            </div>
        )
    }
}


