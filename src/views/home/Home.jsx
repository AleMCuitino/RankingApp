import  Card  from '../../components/card/Card'
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Apps from '../../data/app.json'
import FilterButtonsStyled from '../../components/filter-buttons/FilterButtons';
import {ContainerApps} from './HomeStyle'


export default function Home() {
  return (
    <>
      <Navbar/>
      <FilterButtonsStyled/>
      <ContainerApps>
      {Apps.map((app) => {
        return <Card key={app.app_id} app={app}/> 
      })}
      </ContainerApps>    

    </>
    )
}
