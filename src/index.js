import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Slide from './Components/Slide';
import Form from './Components/Form'
import Imgs from './Components/Slide/app';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Slide />,
  },
  {
    path: "/adm",
    element:<Form />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


