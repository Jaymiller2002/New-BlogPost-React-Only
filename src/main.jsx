import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Blogpost2 from './Blogpost2'
import Blogpost1 from './Blogpost1'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'

const site = import.meta.env.BASE_URL


function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Blogpost1 />,
        errorElement: <ErrorPage />
      },
      {
        path: '/Blogpost2',
        element: <Blogpost2 />
      },
    ]
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
