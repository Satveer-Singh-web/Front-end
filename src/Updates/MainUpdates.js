import React from 'react'
import Lastest from './Lastest'
import StartUpdateImage from './StartUpdateImage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Events from './Events';
import Footer from '../ConstComponents/Footer';
const MainUpdates = () => {
  return (
    <>
    <StartUpdateImage/>
    <Container>
    <h3 className='titles' style={{ textAlign: 'left' }}>Latest Updates</h3>
    <Row>
      <Lastest/>
    </Row>
    </Container>
    <Container>
    <h3 className='titles' style={{ textAlign: 'left' , fontSize:'34px'}}>News And Events</h3>
    <Row>
      <Events/>
    </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default MainUpdates