/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-05-30 17:26:08 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-05-30 17:47:57
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

export default class App extends Component {
    render() {
        return (
            <div>
                I am react_app..............
                I am ok react_app........
            </div>
        )
    }
}


