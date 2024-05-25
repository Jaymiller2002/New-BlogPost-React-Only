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

import Blogpost8 from './Blogpost8'
import Blogpost7 from './Blogpost7'
import Blogpost6 from './Blogpost6'
import Blogpost5 from './Blogpost5'
import Blogpost4 from './Blogpost4'
import Blogpost3 from './Blogpost3'
import Blogpost2 from './Blogpost2'
import Blogpost1 from './Blogpost1'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import ContactCard from './ContactCard'


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
        element: <ContactCard />,
        errorElement: <ErrorPage />
      },
      {
        path: '/Blogpost1',
        element: <Blogpost1 />
      },
      {
        path: '/Blogpost2',
        element: <Blogpost2 />
      },
      {
        path: '/Blogpost3',
        element: <Blogpost3 />
      },
      {
        path: '/Blogpost4',
        element: <Blogpost4 />
      },
      {
        path: '/Blogpost5',
        element: <Blogpost5 />
      },
      {
        path: '/Blogpost6',
        element: <Blogpost6 />
      },
      {
        path: '/Blogpost7',
        element: <Blogpost7 />
      },
      {
        path: '/Blogpost8',
        element: <Blogpost8 />
      }
    ]
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
