import React from 'react'
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import PlantsPots from '../PlantsPotsSection/PlantsPots'
import NursaryMenuTypes from '../NursaryMenuTypes/NursaryMenuTypes'

const Header = () => {
  return (
    <>
        <Navbar/>
        <Searchbar/>
        <PlantsPots/>
        <NursaryMenuTypes/>
    </>
  )
}

export default Header