import React, { useContext } from "react";
import {
  ContainerImgApp,
  ContainerDataApp,
  ClasificationApp,
  TitleDataApp,
  IconEditApp,
  ContainerText,
  ContainerDataRanking,
  ContainerDataRankingLinear,
  ContainerInfoApp,
  ClasificationInfoApp
} from "./InfoAppStyle";
import { AiFillStar } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { Rating, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import Apps from "../../data/app.json";
import ComentsList from "../coments-list/ComentsList";
import ComentForm from "../coment-form/ComentForm";

function InfoApp() {
  const { id } = useParams();

  // console.log(id)

  const FindApp = Apps.filter((apps) => apps.app_id === id);

  return (
    <>
      {FindApp.map((apps, index) => (
        <div key={index}>
          <ContainerImgApp>
            <img src={apps.photos[0]} alt="descr1" />
            <img src={apps.photos[2]} alt="descr2" />
            <img src={apps.photos[3]} alt="descr3" />
            <img src={apps.photos[4]} alt="descr4" />
          </ContainerImgApp>

          <ContainerDataApp>
            <img src={apps.app_icon} alt="" />
            <TitleDataApp>
              <h2>{apps.app_name}</h2>
              <p>{apps.type}</p>
              <ClasificationApp>
                <AiFillStar style={{ color: "#2370e0" }} />
                <span>
                  <b>{apps.rating}</b>
                </span>
              </ClasificationApp>
            </TitleDataApp>
            <IconEditApp>
              <HiTrash style={{ color: "#2370e0" }} />
              <CiEdit style={{ color: "#2370e0" }} />
            </IconEditApp>
          </ContainerDataApp>

          <ContainerInfoApp>
            <ClasificationInfoApp>
              <h3>Ratings and reviews</h3>
              <span>{apps.rating}</span>
              <ContainerDataRanking>
                <Rating
                  name="half-rating-read"
                  defaultValue={parseFloat(apps.rating)}
                  precision={0.1}
                  readOnly
                />
                <ContainerDataRankingLinear>
                  1<LinearProgress variant="determinate" value={1} />
                  2<LinearProgress variant="determinate" value={10} />
                  3<LinearProgress variant="determinate" value={50} />
                  4<LinearProgress variant="determinate" value={60} />
                  5<LinearProgress variant="determinate" value={95} />
                </ContainerDataRankingLinear>
              </ContainerDataRanking>
            </ClasificationInfoApp>
            <ContainerText>{apps.app_description}</ContainerText>
          </ContainerInfoApp>  
        </div>
      ))}
    </>
  );
}

export default InfoApp;
