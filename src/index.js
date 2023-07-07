import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={state} />
      </Provider>
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// import reportWebVitals from './reportWebVitals';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import store from './redux/redux-store';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// export let rerenderEntireTree = (state) => {
//   root.render(
//     <BrowserRouter>
//         <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
//     </BrowserRouter>
//   );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state);
// });


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();