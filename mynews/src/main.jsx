import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import NewsStore from './Store/index.js';
 
import router from './Router/Route.jsx'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Auth0Provider
    domain="dev-ixubjv30hi2svalz.us.auth0.com"
    clientId="VtgBg1IBro1yy5MCXllchynHSTHZvZ5m"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={NewsStore}>
      <RouterProvider router={router}/>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  
)
