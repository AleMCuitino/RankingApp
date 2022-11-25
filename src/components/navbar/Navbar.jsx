import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/ranking-app-logo.svg"
import SearchButton from '../searchButton/SearchButton'
import { Header } from './NavbarStyle'

function Navbar() {
  return (
    <Header>
      <Link to="/" className='logo'>
        <img src={logo} alt="RankingApp logo" />
      </Link>
      <SearchButton />
    </Header>
  )
}

export default Navbar