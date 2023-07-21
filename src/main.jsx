import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DemoComponent from './components/DemoComponent/DemoComponent';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: '/',
    element: <PrivateRoute><Main></Main></PrivateRoute>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'demo',
        element: <DemoComponent></DemoComponent>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
