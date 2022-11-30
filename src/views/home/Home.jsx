import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import  Card  from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import {ContainerApps} from './HomeStyle'
import Apps from '../../data/app.json'
import FilterButtons from '../../components/filter-buttons/FilterButtons';


export default function Home() {
  return (
    <>
      <Navbar/>
      <FilterButtons/>
      <ContainerApps>
      {Apps && Apps.map((app) => {
        return <Card key={app.app_id} app={app}/>
      })}
      </ContainerApps>    
    </>
    )
}
