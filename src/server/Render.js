import React from "react";
import { renderToString } from 'react-dom/server';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { StaticRouter } from "react-router-dom/server";
import Router from '../js/Router';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux'
import Icon from '../utlis/popular/favicon.ico'
import serializeJavascript from "serialize-javascript";





export default function Render(req, store) {







  const appString = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url}  >
        <SSRProvider>
          <Router />
        </SSRProvider>
      </StaticRouter>
    </Provider>
  )


  const helmet = Helmet.renderStatic()

  const html = `<!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
        <title>Food</title>         
        <meta property="og:description" content="Spara tid genom att låta oss på Lätt Spis skapa en matsedel åt dig. Vi levererar maten hem till dig så att du enkelt kan värma och äta den." />
        <meta property="og:image" content="https://lattspis.se/static/media/salad.236d4e051d24a9eb8cd8.png"  />
        <meta property="og:image:url"  content="https://lattspis.se/static/media/salad.236d4e051d24a9eb8cd8.png"  />
        <meta property="twitter:image" content="https://lattspis.se/static/media/salad.236d4e051d24a9eb8cd8.png"  />
        <link rel="icon" type="image/x-icon" href=${Icon}>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/css/main.css">
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>

    <body ${helmet.bodyAttributes.toString()}>
          <div id='root'>
             ${appString}
          </div>
          <script src="/client/bundle.js" defer ></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script>
  window.INITIAL_STATE = ${serializeJavascript(store.getState())}
</script>
        </body>
      </html>
        `


  return html

}