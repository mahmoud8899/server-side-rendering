import React from "react";
import NavBar from "./Pages/NavBar/index";
import Footer from "./Pages/Footer/index";
import { Helmet } from "react-helmet";
import "../css/index.css";
import PropTypes from 'prop-types'
import {Outlet} from 'react-router-dom'



const App = ({ route }) => {
  return (
    <div>
      <Helmet>
        <title>Food Desgin </title>
      </Helmet>

      <NavBar />
      <Outlet   />
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default { element: App };
