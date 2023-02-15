import React from 'react'
import ConstSubheader from '../ConstComponents/ConstSubheader'
import KitchenStory from './KitchenStory'
import StartStoryImage from './StartStoryImage'
import Container from 'react-bootstrap/Container'
import Members from '../ConstComponents/Members'
import TeamMembers from './TeamMembers'
import Row from 'react-bootstrap/Row';
import NewsLetters from './NewsLetters'
import Footer from '../ConstComponents/Footer'
const MainStory = () => {
  return (
    <>
      <StartStoryImage />
      <KitchenStory />
      <Container>
        <h3 className='titles' style={{ textAlign: 'left' }}>Team Members</h3>
        <Row>
          <TeamMembers />
        </Row>
      </Container>
      <NewsLetters/>
      <Footer/>

    </>
  )
}

export default MainStory