import React from "react";
import { ContainerImgApp, ContainerDataApp, ClasificationApp, TitleDataApp, IconEditApp, ContainerText, ContainerDataRanking, ContainerDataRankingLinear } from "./InfoAppStyle";
import { AiFillStar } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";
import { CiEdit }  from "react-icons/ci";
import { Rating, LinearProgress } from "@mui/material";

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

      <ContainerDataApp>
          <img src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5" alt=""/>
          <TitleDataApp>
            <h3>Name</h3>
            <p>Device</p>
            <ClasificationApp>
              <AiFillStar style={{color:"#2370e0"}}/>
              <span>
                <b>4,5</b>
              </span>
            </ClasificationApp>
          </TitleDataApp>
          <IconEditApp>
            <HiTrash style={{color:"#2370e0"}}/>
            <CiEdit style={{color:"#2370e0"}}/>
          </IconEditApp>
      </ContainerDataApp>
      <ContainerText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia laudantium architecto cupiditate mollitia! Labore, deleniti inventore natus ad dolorum blanditiis perferendis. Corrupti inventore dolor quisquam dignissimos porro obcaecati. Sunt.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci qui et. Fugiat cum distinctio error natus consequuntur tenetur blanditiis, aliquam corporis ut ipsum sit earum accusantium enim a aut.
      </ContainerText>
        <h2>Ratings and reviews</h2>
        <span>4.5</span>
      <ContainerDataRanking>
          <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.1}
                  readOnly
                />
          <ContainerDataRankingLinear>
            <LinearProgress variant="determinate" value={90} />
            <LinearProgress variant="determinate" value={1} />
            <LinearProgress variant="determinate" value={1} />
            <LinearProgress variant="determinate" value={1} />
            <LinearProgress variant="determinate" value={1} />
          </ContainerDataRankingLinear>
        </ContainerDataRanking>
      <div>   
    </div>
    </>
  );
}

export default InfoApp;
