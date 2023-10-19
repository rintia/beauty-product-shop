import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Root from './components/Root';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Update from './components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
   children : [
    {
      path : '/',
      element: <Home></Home>,
      loader: () => fetch('/data.json')
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path : '/register',
      element: <Register></Register>
    },
    {
      path: '/addProduct',
      element: <AddProduct></AddProduct>
    },
    {
      path : '/product/:id',
      element : <Products></Products>,
      loader: () => fetch('/data.json'),
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 
    }
   ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
