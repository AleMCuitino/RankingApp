import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.svg"
import SearchButton from '../searchButton/SearchButton'

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="RankingApp logo" />
      </Link>
      <SearchButton />
    </header>
  )
}

export default Navbar