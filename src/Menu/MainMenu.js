import React from 'react'
import StartMenuImage from './StartMenuImage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Footer from '../ConstComponents/Footer';
const MainMenu = () => {
  return (
    <>
    <StartMenuImage/>
    <Container>
    <h3 className='titles' style={{ textAlign: 'left' }}>Breakfast Menu</h3>
    <Row>
      <Breakfast/>
    </Row>
    </Container>
    <Container>
    <h3 className='titles' style={{ textAlign: 'left' }}>Lunch Menu</h3>
    <Row>
      <Lunch/>
    </Row>
    </Container>
    <Container>
    <h3 className='titles' style={{ textAlign: 'left' }}>Dinner Menu</h3>
    <Row>
      <Dinner/>
    </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default MainMenu