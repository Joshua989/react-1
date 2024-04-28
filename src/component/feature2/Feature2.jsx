
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
    <div className="main-f">
      <div className="box">
        <div className="box1">
          <div className="sub-b11">
            <button className="btn-gra">
              <p className="e">Exchange Crypto</p>
            </button>
            <div className="sm-1">
              <p className="p2">Buy / Sell Crypto</p>
              <img
                style={{ width: "30px", height: "30px" }}
                src={wallet}
                alt="man"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "varela Round",
                  fontSize: "30px",
                  marginRight: "5px",
                }}
              >
                Exchange Pro
              </p>
              <img
                style={{ width: "30px", height: "30px" }}
                src={Vector}
                alt="Man"
              />
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between", paddingRight: "100px" }}
            className="sub-b11"
          >
            <div
              style={{
                display: " flex",
                flexDirection: "column",
                paddingTop: "30px",
              }}
            >
              <p
                style={{
                  color: "#7A7A77",
                  width: "300",
                  fontSize: "36px",
                  fontFamily: "varela Round",
                }}
              >
                You Send
              </p>
              <h4
                style={{
                  color: "#FBAD70",
                  fontWeight: "400",
                  fontSize: "60PX",
                  fontFamily: "varera Round",
                }}
              >
                0.01
              </h4>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ width: "62px", height: "62px" }}
                src={Bitcoin}
                alt="img"
              />
              <h4
                style={{
                  fontWeight: "400",
                  fontSize: "35px",
                  fontFamily: "varela Round",
                  marginRight: "10px,",
                }}
              >
                BTC
              </h4>
              <img
                style={{ width: "10px", height: "10px", marginLeft: "30px" }}
                src={mark}
                alt="hss"
              />
            </div>
          </div>
          <div
            style={{
              height: "100px",
              border: "none",
              flexDirection: "column",
              paddingRight: "0",
              paddingLeft: "0px",
              justifyContent: "space-between",
            }}
            className="sub-b11"
          >
            <p style={{ fontSize: "20px" }}>No hidden fees</p>
            <p style={{ fontSize: "20px" }}>
              Estimated rate: 1BTC - 13.488888 ETH
            </p>
          </div>
          <div
            style={{ justifyContent: "space-between", paddingRight: "30px" }}
            className="sub-b11"
          >
            <div
              style={{
                display: " flex",
                flexDirection: "column",
                paddingTop: "30px",
              }}
            >
              <p
                style={{
                  color: "#7A7A77",
                  width: "300",
                  fontSize: "36px",
                  fontFamily: "varela Round",
                }}
              >
                You Get
              </p>
              <h4
                style={{
                  color: "#FBAD70",
                  fontWeight: "400",
                  fontSize: "60PX",
                  fontFamily: "varera Round",
                }}
              >
                0.1953883
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderLeft: "solid 1px #C9C9C9",
                marginTop: "15px",
                marginBottom: "15px",
                width: "300px",
                paddingLeft: "50px",
              }}
            >
              <img
                style={{ width: "62px", height: "62px" }}
                src={Ethereum}
                alt="img"
              />
              <h4
                style={{
                  fontWeight: "400",
                  fontSize: "40px",
                  fontFamily: "varela Round",
                  marginRight: "10px,",
                }}
              >
                ETH
              </h4>
              <img
                style={{ width: "10px", height: "10px", marginLeft: "30px" }}
                src={mark}
                alt="hss"
              />
            </div>
          </div>
          <p style={{ fontFamily: "varela Round" }}>Signup to get cashback</p>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              border: "none",
              flexDirection: "column",
              width: "1079px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "30px",
                marginleft: "0",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#FF0091",
                    fontFamily: "varela Round",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  Recipient Wallet
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#FF0091",
                    fontFamily: "varela Round",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  Don’t have a wallet yet?
                </p>
              </div>
            </div>
            <div>
              <input
                style={{
                  backgroundColor: "black",
                  height: "110px",
                  borderRadius: "10px",
                  border: "solid 1px #5F5F5F",
                  width: "1060px",
                  fontSize: "35px",
                  paddingLeft: "30px",
                  marginTop: "20px",
                }}
                type="text"
                placeholder="Enter the ETH wallet address"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <p
                style={{
                  fontFamily: "varela Round",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                FIO protocol names are supported
              </p>
              <img
                style={{ width: "30px", height: "30px", marginLeft: "30px" }}
                src={fox}
                alt="hss"
              />
            </div>
            <button
              style={{
                width: "900px",
                height: "100.5px",
                color: "white",
                fontFamily: "Varela Round",
                fontSize: "35px",
                border: "none",
                borderRadius: "14px",
                background: "linear-gradient(90deg, #5200FF 0%, #FF0059 100%)",
              }}
            >
              Exchange
            </button>
          </div>
        </div>
        <div className="box-2">
          <div className="sub-box">
            <p
              style={{
                fontFamily: "Varela Round",
                fontSize: "30px",
                fontWeight: "36px",
                textAlign: "left",
              }}
            >
              Please make sure you’re on https://app.tochiswap.co
            </p>
            <button
              style={{ backgroundColor: "black", margin: "auto" }}
              className="btn-bum"
            >
              <img src={lock_checked} alt="img" /> secure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature2;
