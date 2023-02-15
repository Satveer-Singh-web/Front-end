import React from 'react'
import ConstSubheader from '../ConstComponents/ConstSubheader'
import contactImage from './../Assets/contact.jpg'
const StartContactImage = () => {
    var items = {
        image: contactImage,
        title: "Say Hi",
        desc: 'We are happy to get in touch with you'
    }
  return (
    <>
     <ConstSubheader items={items} />
    </>
  )
}

export default StartContactImage