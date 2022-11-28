import React from "react";
import Navbar from "../../components/navbar/Navbar";

import Apps from "../../data/app.json";

import {
  App,
  Container,
  Icon,
  TextContainer,
} from "../../components/card/CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <button id="bests_apps">Mejores</button>
          <button id="worst_apps">Peores</button>
        </div>
        <h1>De mejor a peor</h1>
        <Container>
          {Apps.sort((a, b) => a.rating < b.rating).map((app) => {
            return (
              <App key={app.id}>
                <Icon src={app.app_icon} alt="descr" />
                <TextContainer>
                  <span>
                    <b>{app.app_name}</b>
                  </span>
                  <span>{app.device}</span>
                  <div className="star">
                    <AiFillStar />
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
        <h1>De peor a mejor</h1>
        <Container>
          {Apps.sort((a, b) => a.rating > b.rating).map((app) => {
            return (
              <App key={app.id}>
                <Icon src={app.app_icon} alt="descr" />
                <TextContainer>
                  <span>
                    <b>{app.app_name}</b>
                  </span>
                  <span>{app.device}</span>
                  <div className="star">
                    <AiFillStar />
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
      </div>
    </>
  );
}
