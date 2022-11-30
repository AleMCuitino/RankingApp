import {React,useState} from "react";

import { App, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from 'react-icons/ai';
import {Link} from "react-router-dom";



function Card({app}) {


  return (
    <>
      <App>
      <a href={app.app_page_link}>
        <Icon src={app.app_icon} alt="descr" />
        </a>
        <TextContainer>
          <span>
            <b>{app.app_name}</b>
          </span>
          <span>{app.device}</span>
          <div className="star">
            <AiFillStar style={{ color: "#2670E0" }} />
            <span>
              <b>{app.rating}</b>
            </span>
          </div>
          <Rating
            name="half-rating-read"
            style={{ color: "#2370E0" }}
            defaultValue={parseFloat(app.rating)}
            precision={0.5}
            readOnly
          />
        </TextContainer>
      </App>
    </>
  );
}

export default Card;
