import React from 'react';
import "./Feature.css";
import man from '../feature1/man.png'; // Adjust the import path

const Feature1 = () => {
  return (
    <div className='feature-body'>
        <div className='main'>
            <div className='words'>
            <h1>Tochi-Tools</h1>
             <p>Cheapest fees without even <br /> connecting your wallet</p>   
            </div>
            <div className='man-img'>
            <img src={man} alt="Man" />

            </div>
            
        </div>
      
    </div>
  )
}

export default Feature1
