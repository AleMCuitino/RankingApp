import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ranking-app-logo.svg";
import SearchButton from "../searchButton/SearchButton";
import { Header } from "./NavbarStyle";

function Navbar({
  renderAppsList,
  setRenderAppsList,
  originalDataOrder,
  setOriginalDataOrder,
}) {
  return (
    <Header>
      <Link to="/" className="logo">
        <img src={logo} alt="RankingApp logo" />
      </Link>
      <SearchButton
        renderAppsList={renderAppsList}
        setRenderAppsList={setRenderAppsList}
        originalDataOrder={originalDataOrder}
        setOriginalDataOrder={setOriginalDataOrder}
      />
    </Header>
  );
}

export default Navbar;
