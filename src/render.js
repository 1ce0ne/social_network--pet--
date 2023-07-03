import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state, addPost) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  );
}
