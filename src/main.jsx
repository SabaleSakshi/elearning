import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import CardsSection from './components/CourseContent.jsx'
import About from './components/About.jsx'
import Watch from './components/Watch.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/courses",
        element:<CardsSection/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/watch",
        element:<Watch/>
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <Auth0Provider
   domain="dev-23ijbreadx6fprmm.us.auth0.com"
    clientId="jFE8eeJWCpprNdMUmUnLdXH7AOAFIIVZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </Auth0Provider>,
    
  
)
