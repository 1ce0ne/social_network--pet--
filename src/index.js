import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Data:
let postsData = [
  { id: 1, message: 'Hi', likesCount: 25 },
  { id: 2, message: 'Hi, how are you?', likesCount: 13 },
  { id: 3, message: 'Anime is strong!', likesCount: 12 },
  { id: 4, message: 'I am Naruto', likesCount: 100 },
  { id: 5, message: 'Bobobobobobo', likesCount: 10000 },
  { id: 6, message: 'DxD', likesCount: 3 },
  { id: 7, message: '18+', likesCount: 69 },
]

let dialogsData = [
  { id: 1, name: 'Aleksadnr' },
  { id: 2, name: 'Genevieve' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Anton' },
  { id: 5, name: 'Naruto' },
  { id: 6, name: 'Soma' },
]

let messagesData = [
  { id: 1, text: 'Hi' },
  { id: 2, text: 'My name is Aleksandr' },
  { id: 3, text: 'I am Naruto Uzumaki' },
  { id: 4, text: 'I am Soma' },
  { id: 5, text: 'Boboboba' },
  { id: 6, text: 'Azazin' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
