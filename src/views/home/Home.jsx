import Card from "../../components/card/Card";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Apps from "../../data/app.json";
import FilterButtonsStyled from "../../components/filter-buttons/FilterButtons";
import { ContainerApps } from "./HomeStyle";

import ButtonsList from "../../components/filter-buttons/ButtonsList";

export default function Home() {
  // New array with ordered apps from higher to lower ranking value.
  const bestAppsList = [
    ...new Set(
      Apps.filter((app) => app.rating >= 4).sort((a, b) =>
        parseFloat(a.rating) > parseFloat(b.rating) ? -1 : 1
      )
    ),
  ];

  //New array with all "Type" values and add "All" as a "Type" value.
  const allAppTypes = ["All", ...new Set(Apps.map((app) => app.type))];

  const [orderApps, setOrderApps] = useState(bestAppsList); // Render
  const [appTypes, setDevices] = useState(allAppTypes);

  const [currentListOrder, setCurrentListOrder] = useState();

  const filterDevice = (type) => {
    if (type === "All") {
      setOrderApps(currentListOrder);
      return;
    }
    const filteredData = currentListOrder.filter((app) => app.type === type);
    setOrderApps(filteredData);
  };

  const updateAppsList = (order) => {
    if (order === "Mejores") {
      setOrderApps(bestAppsList);
      setCurrentListOrder(bestAppsList);
    }
    if (order === "Intermedias") {
      const intermediateAppsList = [
        ...new Set(
          Apps.filter((app) => app.rating > 2 && app.rating < 4).sort((a, b) =>
            a.rating > b.rating ? -1 : 1
          )
        ),
      ];
      setOrderApps(intermediateAppsList);
      setCurrentListOrder(intermediateAppsList);
    }
    if (order === "Peores") {
      const worstAppsList = [
        ...new Set(
          Apps.filter((app) => app.rating <= 2).sort((a, b) =>
            parseFloat(a.rating) > parseFloat(b.rating) ? 1 : -1
          )
        ),
      ];
      setOrderApps(worstAppsList);
      setCurrentListOrder(worstAppsList);
    }
  };

  return (
    <>
      <Navbar />
      <ButtonsList devices={allAppTypes} filterDevice={filterDevice} />
      <button onClick={() => updateAppsList("Mejores")}>Mejores</button>
      <button onClick={() => updateAppsList("Intermedias")}>Intermedias</button>
      <button onClick={() => updateAppsList("Peores")}>Peores</button>
      <FilterButtonsStyled />
      {orderApps.sort().map((app) => {
        return (
          <>
            {/* {console.log(app.id)} */}
            <div key={app.id}>
              <h2>{app.app_name}</h2>
              <h3>{app.rating}</h3>
              <h4>{app.id}</h4>
            </div>
          </>
        );
      })}
      {/* <ContainerApps apps={apps}>
        {apps.map((app) => {
          return <Card key={app.app_id} app={app} />;
        })}
      </ContainerApps> */}
    </>
  );
}
