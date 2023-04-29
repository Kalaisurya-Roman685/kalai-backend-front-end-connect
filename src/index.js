import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from './redux/store/Store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <Provider store={store}>
        <ToastContainer></ToastContainer>
        <App />
    </Provider>
    ,

    document.getElementById("root")
);
