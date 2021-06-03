/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-05-30 15:57:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-06-03 17:29:30
 */
// 引入react核心库
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// 用于记录页面性能的
import reportWebVitals from './reportWebVitals';
import store from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
  // React.StrictMode包裹之后能够检查App组件里面的代码不合理的地方--比如由于版本更新某些api不适用了 就会提示
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> <App /></Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//redux需要开启全局监听redux数据变化，才能刷新页面，如果我们使用的是react-redux，下面代码就不需要，如果使用的是redux就需要开启了
// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// })
reportWebVitals();
