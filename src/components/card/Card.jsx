import {React,useState} from "react";
import Apps from "../../data/app.json";
import { App, Container, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from 'react-icons/ai';



function Card(app) {

  // const [data] = useState(Apps)
  // for (const obj of data){
  //   const random = Math.floor(Math.random() *3);

  //   switch (random) {
  //     case 1:
  //       obj.type='mobile'
  //       break;
  //     case 2:
  //       obj.type='desktop'
  //       break;
  //     default:
  //       obj.type='app'
  //       break;
  //   }
  // }
  // console.log(Apps)
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
