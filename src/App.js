import React from 'react'
import Navbar  from './component/navbar/Navbar'
import Footer from './contianers/footer/Footer'
import Header from './contianers/header/Header'
import Main from './contianers/main/Main'
import Feature2 from '././component/././component/feature2';
import "./App.css"


const App = () => {
  return (
    <div className='App'>
        <div className='Bg'>
        <Header />
        </div>
        <Feature2 />
        <Footer />
       
    </div>
  )
}

export default App
