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
import Details from './components/Details';
import PrivateRoute from './components/PrivateRoute';
import MyCart from './components/MyCart';

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
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
    },
    {
      path: '/details/:id',
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 
    },
    {
      path: '/myCart',
      element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/carts')
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
