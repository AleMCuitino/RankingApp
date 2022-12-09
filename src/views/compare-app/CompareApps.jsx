import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Apps from "../../data/app.json";
import { App1Container, App2Container, CompareAppsContainer } from "../compare-app/CompareAppsStyle";

function CompareApp() {
  const [listApps, setListApps] = useState(Apps);

  function searchApp(word) {
    if (word !== "") {
      console.log(word);
      const result = Apps.filter((app) =>
        app.app_name.toLowerCase().includes(word)
      );

      setListApps(result);
      console.log(result);
    }

    return;
  }

  function compareRanking() {
    if (Apps[0].rating > Apps[1].rating) {
      return `La App mejor puntuada es ${Apps[0].app_name} con un rating de ${Apps[0].rating}`;
    } else if (Apps[0].rating === Apps[1].rating) {
      return "Las dos Apps tienen la mismas puntuación.";
    } else {
      return `La App mejor puntuada es ${Apps[1].app_name} con un rating de ${Apps[1].rating}`;
    }
  }

  const { id } = useParams();
  const FindApp = Apps.filter((apps) => id === ":" + apps.id);

  return (
    <CompareAppsContainer>
      <App1Container>
        <h1>{FindApp[0].app_name}</h1>
        <img src={FindApp[0].app_icon} alt="App Icon" />
        <h3>{FindApp[0].type}</h3>
        <p>{FindApp[0].app_description}</p>
      </App1Container>

      <App2Container>
        <input
          onKeyDown={(e) => searchApp(e.target.value)}
          placeholder="Search App"
        ></input>
        <ul>
          {listApps.map((app) => {
            return (
              <li value={app.id}>
                <a>{app.app_name}</a>
              </li>
            );
          })}
        </ul>
        {console.log(listApps)}
      </App2Container>
    </CompareAppsContainer>
  );
}

export default CompareApp;
