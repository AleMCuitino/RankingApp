import React from "react";
import { ContainerImgApp } from "./InfoAppStyle";
import { AiFillStar } from "react-icons/ai";

function InfoApp() {
  return (
    <>
      <ContainerImgApp>
        <img
          src="https://play-lh.googleusercontent.com/qW1OCeXIVPbBFRtmiUSYhzRfhwEV1CwJa5367zJjBwHktdp1l_tXG1zHWC5Xn4wJYQ"
          alt=""
        />
        <img
          src="https://play-lh.googleusercontent.com/OaJ9ioyoRept6HWOMXjGkA8IMkfh1st9JEdIOyvpemFmFNFI50frodVswWNcAgFxzg"
          alt=""
        />
        <img
          src="https://play-lh.googleusercontent.com/W6pBP57UU3sGnhrVO_SWywKMb5YwKcDoQW3hBxW3L0pV4UyzS7IDbxaqD_vK6qHg4i4"
          alt=""
        />
        <img
          src="https://play-lh.googleusercontent.com/j0W5FC6v_GeR-8Z-YnXqrhR3Rw2LDLJQ6yQ6HpnzzRdSrz9Wcl3bylBnjpRnrEQzBQ"
          alt=""
        />
      </ContainerImgApp>

      <div className="ContainerDataApp">
        <div>
          <img
            src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5"
            alt=""
          />
          <div>
            <h2>Name</h2>
            <p>Device</p>
            <div className="star">
              <AiFillStar />
              <span>
                <b>4,5</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoApp;
