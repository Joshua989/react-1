// Feature2.js

import React from "react";
import "./Feature.css";
import Vector from "../feature2/Vector.png";
import lock_checked from "../feature2/lock_checked.png";
import wallet from "../feature2/wallet.png";
import Bitcoin from "../feature2/Bitcoin.png";
import mark from "../feature2/mark.png";
import Ethereum from "../feature2/Ethereum.png";
import fox from "../feature2/fox.png";

function Feature2() {
  return (
    <div>
      <div className="box">
        <div className="box1">
          <div className="sub-b11">
            <button className="btn-gra">
              <p className="e">Exchange Crypto</p>
            </button>
            <div className="sm-1">
              <p className="p2">Buy/Sell Crypto</p>
              <img
                src={wallet}
                alt="man"
              />
            </div>
            <div className="pop1">
              <p className="exchange-pr">Exchange Pr</p>
              <img src={Vector} alt="Man" />
            </div>
          </div>
          <div className="sub-b11">
            <div className="send-container">
              <p className="send-label">You Send</p>
              <h4 className="send-amount">0.01</h4>
            </div>
            <div className="crypto-info">
              <img src={Bitcoin} alt="img" />
              <h4>BTC</h4>
              <img src={mark} alt="hss" />
            </div>
          </div>
          <div className="sub-b111">
            <p>No hidden fees</p>
            <p>Estimated rate: 1BTC - 13.488888 ETH</p>
          </div>
          <div className="sub-b11">
            <div className="get-container">
              <p className="get-label">You Get</p>
              <h4 className="get-amount">0.1953883</h4>
            </div>
            <div className="crypto-info">
              <img src={Ethereum} alt="img" />
              <h4>ETH</h4>
              <img src={mark} alt="hss" />
            </div>
          </div>
          <div className="signup-container">
            <p>Signup to get cashback</p>
          </div>
          <div className="recipient-wallet">
            <div className="recipient-label">
              <p>Recipient Wallet</p>
            </div>
            <div className="no-wallet">
              <p>Don’t have a wallet yet?</p>
            </div>
          </div>
          <div className="wallet-input">
            <input
              type="text"
              placeholder="Enter the ETH wallet address"
            />
          </div>
          <div className="fio-protocol">
            <p>FIO protocol names are supported</p>
            <img src={fox} alt="hss" />
          </div>
          <button className="exchange-btn">Exchange</button>
        </div>
        <div className="box-2">
          <div className="sub-box">
            <p>Please make sure you’re on https://app.tochiswap.co</p>
            <button className="secure-btn">
              <img src={lock_checked} alt="img" /> secure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature2;
