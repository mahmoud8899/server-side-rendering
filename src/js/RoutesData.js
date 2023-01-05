import React from "react";
import Home from './Pages/HomeScreen/index'
import App from './App'
import EmptyScreen from './Pages/EmptyScreen/index'
import Products from "./Pages/Products";
export const routersArray = [

    {
        element: <App.element />,
        path: '/',
        children: [
            {
                element: <Home.element />,
                path: '/',
                loadData: Home.loadData,
            },
            {
                element : <Products.element />,
                path : '/product/',
            
            },
            {
                path: '*',
                element: <EmptyScreen.element />
            }
        ]
    }
]