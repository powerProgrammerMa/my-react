/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-05-30 17:26:08 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-05-30 18:10:25
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
import Hello from "./components/Hello/Hello"
import Welcome from "./components/Welcome/Welcome.jsx"
import Welcome2 from "./components/Welcome2"//采用index写法引入是比较简短的

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 这里演示了组件的三种写法  */}
               <div>
                   <Hello></Hello>  
                   <Welcome></Welcome> 
                   <Welcome2></Welcome2>
               </div> 
            </div>
        )
    }
}


