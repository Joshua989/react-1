import React from 'react';
import "./Header.css";
import Navbar from '../../component/navbar/Navbar';
import Feature1 from '../../component/feature1/Feature1';
import Feature2 from '../../component/feature2/Feature2';

const Header = () => {
  return (
    <div>
        <Navbar />
        <Feature1 />
        <Feature2 />
    </div>
  )
}

export default Header
