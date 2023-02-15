import React from 'react'
import ConstSubheader from '../ConstComponents/ConstSubheader'
import menuImg from './../Assets/menu.jpg'
const StartMenuImage = () => {
    var items = {
        image: menuImg,
        title: "Our Menus",
        desc: 'Perfect for all Breakfast, Lunch and Dinner'
    }
  return (
    <>
    <ConstSubheader items={items} />
    </>
  )
}

export default StartMenuImage