import React from "react";
import {useRoutes} from 'react-router-dom';
import {routersArray} from './RoutesData';

const Routes = () =>{

    const routes = useRoutes(routersArray)

    return routes
}

export default Routes