import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import rootReducer from "../redux/App";
import { configureStore } from "@reduxjs/toolkit";
import Route from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';



const store = configureStore({ reducer: rootReducer })

const root = ReactDOM.createRoot(document.getElementById("root"));



console.log('window.INITIAL_STATE',window?.INITIAL_STATE)

root.render(
    <Provider store={store}>
        <BrowserRouter>
         <Route    />
        </BrowserRouter>
    </Provider>
)




