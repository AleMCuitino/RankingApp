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

  const [orderApps, setOrderApps] = useState(bestAppsList);
  const [appTypes, setDevices] = useState(allAppTypes);

  const [filterApps, setFilterApps] = useState(orderApps);

  const filterDevice = (type) => {
    if (type === "All") {
      setOrderApps(orderApps);
      return;
    }
    const filteredData = Apps.filter((app) => app.type === type);
    setOrderApps(filteredData);
  };

  const updateAppsList = (order) => {
    if (order === "Mejores") {
      setOrderApps(bestAppsList);
    }
    if (order === "Intermedias") {
      setOrderApps([
        ...new Set(
          Apps.filter((app) => app.rating >= 3 && app.rating < 4).sort((a, b) =>
            a.rating > b.rating ? -1 : 1
          )
        ),
      ]);
    }
    if (order === "Peores") {
      setOrderApps([
        ...new Set(
          Apps.filter((app) => app.rating <= 2).sort((a, b) =>
            parseFloat(a.rating) > parseFloat(b.rating) ? 1 : -1
          )
        ),
      ]);
    }
  };

  return (
    <>
      <Navbar />
      <ButtonsList devices={allAppTypes} filterDevice={filterDevice} />
      <button onClick={() => updateAppsList("Mejores")}>Mejores</button>
      <button onClick={() => updateAppsList("Intermedias")} button>
        Intermedias
      </button>
      <button onClick={() => updateAppsList("Peores")}>Peores</button>
      <FilterButtonsStyled />
      {orderApps.map((app) => {
        return (
          <div key={Math.random(1000000000000000000 * 0.1)}>
            <h2>{app.app_name}</h2>
            <h3>{app.rating}</h3>
          </div>
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
