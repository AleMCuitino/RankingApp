import React from 'react'
import Apps from "../../data/app.json";
import { App, Container, Icon, TextContainer } from "../card/CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from 'react-icons/ai'

function InfoApp() {
    return (
      <Container>
        {Apps &&
          Apps.map((app) => {
            return (
              <App key={app.id}>
                <Icon src={app.app_icon} alt="descr" />
                <TextContainer>
                  <h2>{app.app_name}</h2>
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
  )
}

export default InfoApp