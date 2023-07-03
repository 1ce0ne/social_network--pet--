import reportWebVitals from './reportWebVitals';
import state, { updateNewPostText } from './redux/state'
import { addPost } from './redux/state';
import { rerenderEntireTree } from './render';


rerenderEntireTree(state, addPost, updateNewPostText);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state'
// import { addPost } from './redux/state';
// import { BrowserRouter } from 'react-router-dom';



// let rerenderEntireTree = () => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));

//   root.render(
//     <BrowserRouter>
//       <App state={state} addPost={addPost} />
//     </BrowserRouter>
//   );
// }

// rerenderEntireTree()


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
