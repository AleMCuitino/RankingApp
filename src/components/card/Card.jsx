import React from "react";
import Apps from "../../data/app.json";
import { App, Container, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from 'react-icons/ai'

<<<<<<< HEAD
function Card() {

//   function adddevice(AppsD) {
//     for(const element of AppsD) {
//         element.device = Math.random() > 0.5 ? 'Mobil' : 'Desktop';
//     }
//     return AppsD
// }

=======
function Card({app}) {
>>>>>>> 71410ce8df41344dffde85cdb46634171db45885
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
                  <AiFillStar style={{color: "#2670E0"}}/>
                  <span>
                    <b>{app.rating}</b>
                  </span>
                </div>
                <Rating
                  name="half-rating-read"
                  style={{color: "#2370E0"}}
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
