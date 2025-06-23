import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from './Layout.jsx'
import {AboutPage, ContactPage, HomePage, UserPage} from "./Components/index.js";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path:"",
//                 element: <HomePage/>,
//             },
//             {
//                 path:"about",
//                 element: <AboutPage/>,
//             },
//             {
//                 path:"contact",
//                 element: <ContactPage/>,
//             }
//         ]
//     }
// ])

// New way to write the above code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path="" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="contactpage" element={<ContactPage/>}/>
            <Route path="user/:userid" element={<UserPage/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

