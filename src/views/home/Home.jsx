import Card from "../../components/card/Card";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Apps from "../../data/app.json";
import FilterButtons from "../../components/filter-buttons/FilterButtons";
import { ContainerApps } from "./HomeStyle";

import CheckboxList from "../../components/filter-buttons/ButtonsList";
import ButtonsList from "../../components/filter-buttons/ButtonsList";

export default function Home() {
  // New array with ordered apps from higher to lower ranking value.
  const bestAppsList = Apps.filter((app) => app.rating >= 4).sort((a, b) =>
    a.rating > b.rating ? -1 : 1
  );
  const intermediateAppsList = [
    ...new Set(
      Apps.filter((app) => app.rating > 2 && app.rating < 4).sort((a, b) =>
        a.rating > b.rating ? -1 : 1
      )
    ),
  ];
  const worstAppsList = [
    ...new Set(
      Apps.filter((app) => app.rating <= 2).sort((a, b) =>
        a.rating > b.rating ? 1 : -1
      )
    ),
  ];

  const searchWord = document.getElementById("searchByWord");

  //New array with all "Type" values and add "All" as a "Type" value.
  const allAppTypes = [...new Set(Apps.map((app) => app.type))];

  const [appsList, setAppsList] = useState(bestAppsList); // Render
  const [currentListOrder, setCurrentListOrder] = useState(bestAppsList);

  const filterAppType = (type) => {
    const filteredData = currentListOrder.filter((app) => app.type === type);
    setAppsList(filteredData); // Estado 1
  };

  const updateAppsList = (order) => {
    //Mejores, Peores, Intermedias
    if (order === "Mejores") {
      setAppsList(bestAppsList); // Estado 1 - Render
      setCurrentListOrder(bestAppsList); // Estado 2 - Original Copy
    }
    if (order === "Intermedias") {
      setAppsList(intermediateAppsList); // Render
      setCurrentListOrder(intermediateAppsList); // Original Copy
    }
    if (order === "Peores") {
      setAppsList(worstAppsList); // Render
      setCurrentListOrder(worstAppsList); // Original Copy
    }
  };

  const filterByName = (word) => {
    if (word === "") {
      setAppsList(currentListOrder);
    } else {
      const filteredResult = appsList.filter((app) =>
        app.app_name.toLowerCase().includes(word)
      );
      console.log(filteredResult);
      setAppsList(filteredResult);
    }
  };

  return (
    <>
      <Navbar />
      <input
        type="text"
        id="searchByWord"
        placeholder="Buscar..."
        onKeyUp={() => filterByName(searchWord.value)}
      />
      <CheckboxList appTypes={allAppTypes} filterAppType={filterAppType} />
      <FilterButtons updateAppsList={updateAppsList} />
      <ContainerApps apps={appsList}>
        {appsList.map((app) => {
          return <Card key={app.app_id} app={app} />;
        })}
      </ContainerApps>
      <Footer/>
    </>
  );
}
