import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser'
import cors from 'cors'
import 'ignore-styles'
import rootReducer from '../redux/App/index'
import { configureStore } from '@reduxjs/toolkit'
import Render from './Render';
import Routes from '../js/Router'
import { matchRoutes } from 'react-router-dom';
import { routersArray } from '../js/RoutesData';






const PORT = process.env.PORT || 3000;
const app = express();


app.use([
  express.json(),
  bodyParser.urlencoded({ extended: true }),
  morgan('dev'),
  cors({
    origin: "*",
    credentials: true,
  })
])



app.use('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
})


app.use(express.static("build"));


app.get('/*', async (req, res) => {

  const store = configureStore({ reducer: rootReducer })
  const routes = matchRoutes(routersArray, req.path)

  const { dispatch } = store



  const promises = routes?.map(({ route }) => {
    return route?.loadData ? route?.loadData(dispatch, req.url) : null;


  })?.map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(reject);
      });
    }
    return null;
  });


  // console.log('promises',promises)
  Promise.all(promises).then(() => {

    const html = Render(req, store)

    res.contentType('text/html');


    // if (routes[0].route.path === '*') {
    //   res.status(404);
    // } else {
    //   res.status(200);
    // }

    res.send(html);
  })
    .catch(() => {
      res.status(404);
      res.send('no data')
    });
















});




app.listen(PORT, () => {
  return console.log(`server is runs port ${PORT}`)
});