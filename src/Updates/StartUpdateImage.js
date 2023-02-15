import React from 'react'
import ConstSubheader from '../ConstComponents/ConstSubheader'
import updateImage from './../Assets/update.jpg'
const StartUpdateImage = () => {
    var items = {
        image: updateImage,
        title: "Kitchen's Story",
        desc: 'this is how our kitchen evolved in new digital era'
    }
  return (
    <>
        <ConstSubheader items={items} />
    </>
  )
}

export default StartUpdateImage