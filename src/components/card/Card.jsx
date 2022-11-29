import React from "react";
import Apps from "../../data/app.json";
import { App, Container, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from 'react-icons/ai'

function Card({app}) {
  return (
    <>
            <App>
              <Icon src={app.app_icon} alt="descr" />
              <TextContainer>
                <span>
                  <b>{app.app_name}</b>
                </span>
                <span>{app.device}</span>
                <div className="star">
                  <AiFillStar/>
                  <span>
                    <b>{app.rating}</b>
                  </span>
                </div>
                <Rating
                  name="half-rating-read"
                  defaultValue={parseInt(app.rating)}
                  precision={0.1}
                  readOnly
                />
              </TextContainer>
            </App>
         
    </>
  );
}

export default Card;
