import React from "react";
import NavBar from "./Pages/NavBar/index";
import Footer from "./Pages/Footer/index";
import { Helmet } from "react-helmet";
import "../css/index.css";
import PropTypes from 'prop-types'
import {Outlet} from 'react-router-dom'

// "Test": "nodemon ./build/server.js node  --trace-warnings",
// "build:dev": "webpack --config webpack.server.js --mode production",
// "change": "webpack serve --config  webpack.config.js ",
// "server:build": "webpack --config webpack.server.js --mode production --watch",
// "server:run": "nodemon ./build/server.js node --trace-warnings",
// "webpack": "npm-run-all --parallel server:*",
// "docker": "nodemon ./build/server.js node --trace-warnings"

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
