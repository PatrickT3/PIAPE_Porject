import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import NumberQ from './pages/NumberQ/NumberQ.jsx';
import { Dload } from './pages/Dload/Dload.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/details",
        element: <Details/>,
      },
      {
        path: "/NumberQ",
        element: <NumberQ/>,
      },
      {
        path: "/Dload",
        element: <Dload/>,
      },
      {
        path: "*",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
