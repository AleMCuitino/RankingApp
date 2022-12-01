import { React, useState } from "react";

import { App, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({ app }) {
  return (
    <>
      <App key={app.app_id}>
        <Link to={`/${app.app_id}`}>
          <Icon src={app.app_icon} alt="descr" />
        </Link>
        <TextContainer>
          <span>
            <b>{app.app_name}</b>
          </span>
          <span>{app.type}</span>
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
