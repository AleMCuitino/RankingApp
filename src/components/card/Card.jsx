import React from "react";
import Apps from "../../data/app.json";
import { App, Container, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';


//function AddPropietyType = (app) => {
//  app.Type = (0);
//  console.log(Apps);
//}



function Card() {
  const [data] = useState(Apps)
  for (const obj of data){
    const random = Math.floor(Math.random() *3);

    switch (random) {
      case 1:
        obj.type='mobile'
        break;
      case 2:
        obj.type='desktop'
        break;
      default:
        obj.type='app'
        break;
    }
  }
  console.log(Apps)
  return (
    <Container>
      {Apps &&
        Apps.map((app) => {
          return (
            <App key={app.id}>
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
          );
        })}
    </Container>
  );
}

export default Card;
