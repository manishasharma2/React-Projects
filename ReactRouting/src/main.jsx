import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home  from './components/Home.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"footer",
//         element: <Footer/>
//       },
//       {
//         path:'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

                                   
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>

      <Route path='about' element={<About/>} />
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={ <User/> } />
      <Route 
      loader={githubInfoLoader }
      path='github' 
      element={ <Github/> } 
      />

    </Route>
  )
)  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)

