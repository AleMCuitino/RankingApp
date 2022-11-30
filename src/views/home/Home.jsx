import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FilterButtonsStyled from '../../components/filter-buttons/FilterButtons';
import  Card  from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import {ContainerApps} from './HomeStyle'
import Apps from '../../data/app.json'


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
