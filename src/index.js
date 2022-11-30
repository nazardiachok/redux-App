import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { store } from "./store/store"
import { Provider } from 'react-redux'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ToastContainer></ToastContainer>
    <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);


