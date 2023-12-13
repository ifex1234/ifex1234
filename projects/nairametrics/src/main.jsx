import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
// import Home from './routes/home'
// import ErrorPage from './routes/errorPage'
// import Business from './routes/business'
// import Economy from './routes/economy'
// import Exclusive from './routes/exclusive'
// import Financial from './routes/financial'
// import Industries from './routes/industries'
// import Lifestyle from './routes/lifestyle'
// import Markets from './routes/markets'
// import Opinions from './routes/opinions'

// const myRouter = createBrowserRouter([
//   {
//     path:"/",
//     element: <Home/>,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path:"business",
//     element: <Business/>
//   },
//   {
//     path:"economy",
//     element: <Economy/>
//   },
//   {
//     path:"exclusive",
//     element:<Exclusive/>
//   },
//   {
//     path:"financial",
//     element:<Financial/>
//   },
//   {
//     path:"industries",
//      element:<Industries/>
//   },
//   {
//     path:"lifestyle",
//      element:<Lifestyle/>
//   },
//   {
//     path:"markets",
//     element:<Markets/>
//   },
//   {
//     path:"opinions" ,
//     element:<Opinions/>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<App/>
  </React.StrictMode>,
)
