import React from 'react';
import {Header, Footer} from './Components/index.js'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>  {/*Used to dynamically render a component. It maintains other component without rendering them*/}
            <Footer/>
        </>
    )
}

