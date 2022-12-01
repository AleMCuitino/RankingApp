import React from "react";
import { ContainerImgApp, ContainerDataApp, ClasificationApp, TitleDataApp, IconEditApp, ContainerText, ContainerDataRanking, ContainerDataRankingLinear } from "./InfoAppStyle";
import { AiFillStar } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";
import { CiEdit }  from "react-icons/ci";
import { Rating, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import Apps from "../../data/app.json"

function InfoApp() {

  const {id} = useParams()

  // console.log(id)
  

  const FindApp = Apps.filter(
    (apps) => apps.app_id === id
  )

  return (
    <>
    {
      FindApp.map((apps,index) =>  (

        <div key={index}>


      <ContainerImgApp>
        <img
          src={apps.photos[0]}
          alt="descr1"
          />
          <img
          src={apps.photos[2]}
          alt="descr2"
          />
          <img
          src={apps.photos[3]}
          alt="descr3"
          />
          <img
          src={apps.photos[4]}
          alt="descr4"
          />
        
      </ContainerImgApp>

      <ContainerDataApp>
          <img src={apps.app_icon} alt=""/>
          <TitleDataApp>
            <h3>{apps.app_name}</h3>
            <p>{apps.type}</p>
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
    
      <ContainarText>
      {apps.app_description}
      </ContainarText>
      </div>
    ))
  }

    </>
  );
}

export default InfoApp;
