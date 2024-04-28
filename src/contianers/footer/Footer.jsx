import React from 'react'
import "./Footer.css"
import x from '../footer/x.png'
import t from '../footer/t.png';
import d from '../footer/d.png'; // Adjust the import path



const Footer = () => {
  return (
    <div className='main-1'>
      <p
      style={{
        fontFamily:"Amaranth, sans-serif",
        margin:"2px",
      }}
      >TOCHI TOOLS</p>
      <div 
      style={
        {
          alignItems:"center",
          display:"flex",
          paddingLeft:"75px"
        }
      }
      >
        <a href="#">
         <img style={{width:"10px", height:"10px"}}  src={x} alt="Man" />
        </a>
        <a href="#">
        <img style={{width:"10px", height:"10px"}}  src={t} alt="Man" />
        </a>
        <a href="#">
        <img  style={{width:"10px", height:"10px"}} src={d} alt="Man" />

        </a>

      </div>
      <div style={
        {
          margin:"0",
          textAlign:"center",
          alignItems:"center"
        }
      } >
        <p style={
          {
            margin:"0",
            color:"#0075FF",
            fontSize:"7px"
          }
        }>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p  
        style={{
          margin:"0",
          fontSize:'10px'
        }}
        >marketing@tochitools.io</p>
      </div>
    </div>
  )
}

export default Footer
