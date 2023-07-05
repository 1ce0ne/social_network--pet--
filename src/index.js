import reportWebVitals from './reportWebVitals';
// import state, { subscribe, updateNewPostText, addPost } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import reportWebVitals from './reportWebVitals';
// import state, { subscribe, updateNewPostText, addPost } from './redux/state'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// export let rerenderEntireTree = (state) => {
//   root.render(
//     <BrowserRouter>
//       <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
//     </BrowserRouter>
//   );
// }

// rerenderEntireTree(state);
// subscribe(rerenderEntireTree);


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();