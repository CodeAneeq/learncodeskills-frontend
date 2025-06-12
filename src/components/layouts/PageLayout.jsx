import React from 'react'
import Navbar from '../headers/Navbar'
import Footer from '../footer/Footer'

const PageLayout = ({children}) => {
  return (
    <>
    <Navbar></Navbar>
    {children}
    <Footer></Footer>
    </>
  )
}

export default PageLayout