import { React, useState } from "react";

import { App, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({ app }) {
  return (
    <>
<<<<<<< HEAD
      <App key={app.id}>
        <Link to={`/${app.id}`}>
          <Icon src={app.app_icon} alt="descr" />
        </Link>
=======
      <App>
        <Icon src={app.app_icon} alt="descr" />
>>>>>>> 9ee13074a19bc158379b8130faf1d57fe15786b4
        <TextContainer>
          <span>
            <b>{app.app_name}</b>
          </span>
          <span>{app.type}</span>
          <div className="star">
<<<<<<< HEAD
            <AiFillStar style={{ color: "#2670E0" }} />
=======
            <AiFillStar />
>>>>>>> 9ee13074a19bc158379b8130faf1d57fe15786b4
            <span>
              <b>{app.rating.toString()}</b>
              {console.log(app.rating.valueOf())}
            </span>
          </div>
          <Rating
            name="half-rating-read"
            defaultValue={parseFloat(app.rating)}
            style={{ color: "#2670E0" }}
            precision={1}
            readOnly
          />
        </TextContainer>
      </App>
    </>
  );
}

export default Card;
