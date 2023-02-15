import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menus from './Menus'
import StartPhoto from './StartPhoto'
import Background from './Background';
import ConstNews1 from '../ConstComponents/ConstNews1';
import News1 from './News1';
import ConstNews2 from '../ConstComponents/ConstNews2';
import News2 from './News2';
import Footer from '../ConstComponents/Footer';

const MainHome = () => {
  return (
    <>
      <StartPhoto />
      <h3 className='titles'>Special Menus</h3>
      <Container>
        <Row>
          <Menus/>
        </Row>
      </Container>
      <Background />
      <h3 className='titles'>News & Events</h3>
      <Container>
        <Row>
          <News1/>
        </Row>
      </Container>
 
      <Container>
        <Row>
          <News2/>
        </Row>
      </Container>
    <Footer/>
    </>
  )
}

export default MainHome