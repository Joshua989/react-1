import React from 'react';
import './Feature.css';
import Vector from "../feature2/Vector.png";
import lock_checked from "../feature2/lock_checked.png";
import wallet from "../feature2/wallet.png";
function Feature2() {
    return (
        <div className='main-f'>
            <div className='box'>
                <div className='box1'>
                    <div className='sub-b11'>
                        <button className='btn-gra'><p className='e'>Exchange Crypto</p>
                        </button>
                        <div className='sm-1'>
                        <p className='p2'>Buy / Sell Crypto</p>
                        <img style={{width : "36px", height: "36px"}} src={wallet} alt = "man" />
                        </div>
                        <div style={ { display : "flex", justifyContent : "space-between", alignItems : "center"}}>
                            <p style={{fontFamily:"verela Round", fontSize : "30px", marginRight : "5px"}}>Exchange Pro</p>
                            <img  style= {{ width:"36px", height:"36px"}} src={Vector} alt="Man" />
                        </div>
                    </div>
                    <div className='sub-b11'>
                        <div style={ { display : ' flex', flexDirection : 'column', paddingTop : "30px"}}>
                            <p style={{color : "#7A7A77", width : "300", fontSize :"36px", fontFamily :"varela Round"}}>You Send</p>
                            <h4>0.o1</h4>
                        </div>
                    </div>
                </div>
                <div className='box-2'>
                    <div className='sub-box'>
                        <p>Please make sure you’re on https://app.tochiswap.co</p>
                        <button><img src={lock_checked} alt="img" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature2;
