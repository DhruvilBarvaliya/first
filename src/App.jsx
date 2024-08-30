import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from './routes/homepage/HomePage'
import LoginPage from './routes/LoginPage/LoginPage'
import ListPage from './routes/ListPage/ListPage'
import './index.scss' 
import Layout from './routes/Layout/Layout';
import SinglePage from './routes/SinglePage/SinglePage';
import ProfilePage from './routes/ProfilePage/ProfilePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path:"/login",
          element: <LoginPage/>,
        },
        {
          path: "/profile",
          element: <ProfilePage/>,
        },
      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App