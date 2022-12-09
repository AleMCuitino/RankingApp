import Card from "../../components/card/Card";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Apps from "../../data/app.json";
import FilterTabs from "../../components/filter-tabs/FilterTabs";
import { ContainerApps } from "./HomeStyle";

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

  //New array with all "Type" values and add "All" as a "Type" value.
  const allAppTypes = [...new Set(Apps.map((app) => app.type))];

  const [tabsFilterOrder, setTabsFilterOrder] = useState(bestAppsList);
  const [originalDataOrder, setOriginalDataOrder] = useState(tabsFilterOrder);
  const [secondDataOrder, setSecondDataOrder] = useState(tabsFilterOrder);

  const [renderAppsList, setRenderAppsList] = useState(tabsFilterOrder); // Render

  return (
    <>
      <Navbar
        originalDataOrder={originalDataOrder}
        setOriginalDataOrder={setOriginalDataOrder}
        renderAppsList={renderAppsList}
        setRenderAppsList={setRenderAppsList}
        tabsFilterOrder={tabsFilterOrder}
        appTypes={allAppTypes}
      />
      <FilterTabs
        bestAppsList={bestAppsList}
        intermediateAppsList={intermediateAppsList}
        worstAppsList={worstAppsList}
        renderAppsList={renderAppsList}
        setRenderAppsList={setRenderAppsList}
        originalDataOrder={originalDataOrder}
        setOriginalDataOrder={setOriginalDataOrder}
        secondDataOrder={secondDataOrder}
        setSecondDataOrder={setSecondDataOrder}
      />
      <ContainerApps apps={renderAppsList}>
        {renderAppsList.map((app) => {
          return <Card key={app.app_id} app={app} />;
        })}
      </ContainerApps>
    </>
  );
}
