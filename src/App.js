import React from 'react'
import Navbar  from './component/navbar/Navbar'
import Footer from './contianers/footer/Footer'
import Header from './contianers/header/Header'
import "./App.css"


const App = () => {
  return (
    <div className='App'>
        <div className='Bg'>
        <Header />
        </div>
        <Footer />
       
    </div>
  )
}

export default App
