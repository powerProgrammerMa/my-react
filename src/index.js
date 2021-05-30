/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-05-30 15:57:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-05-30 17:25:03
 */
// 引入react核心库
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用于记录页面性能的
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode包裹之后能够检查App组件里面的代码不合理的地方--比如由于版本更新某些api不适用了 就会提示
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
