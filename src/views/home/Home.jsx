import  Card  from '../../components/card/Card'
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import FilterButtonsStyled from '../../components/filter-buttons/FilterButtons';


export default function Home() {
  return (
    <>
      <Navbar/>
      <FilterButtonsStyled/>
      <Card/>      

    </>
    )
}
