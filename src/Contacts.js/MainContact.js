import React from 'react'
import StartContactImage from './StartContactImage'
import Container from 'react-bootstrap/Container'
import Response from './Response'
import Map from './Map'
import Footer from '../ConstComponents/Footer'
export const MainContact = () => {
  return (
    <>
    <StartContactImage/>
    <Container>
    <h3 className='titles' style={{ textAlign: 'left' }}>Leave a message</h3>
    </Container>
    <Response/>
    <Container style={{marginTop:'100px'}}>
        <h2 className='story_title'>121 Einstein Loop N, Bronx, NY 10475, United States</h2>
        <Map/>
    </Container>
    <Footer/>
    </>
  )
}
