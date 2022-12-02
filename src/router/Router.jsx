import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridSystemTrial from "../views/grid-system-trial/GridSystemTrial";
import Home from "../views/home/Home";
import SearchResult from "../views/search-result/SearchResult";
import SingleApp from "../views/single-app/SingleApp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singleapp" element={<SingleApp />}></Route>
        <Route path="/searchresult" element={<SearchResult />}></Route>
        <Route path="/gridsystem" element={<GridSystemTrial />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
