import React from 'react'
import teamImg1 from './../Assets/member1.jpg'
import teamImg2 from './../Assets/member2.jpg'
import teamImg3 from './../Assets/member3.jpg'
import Col from 'react-bootstrap/Col';
import Members from '../ConstComponents/Members';
const TeamMembers = () => {
    var team =[
        {image:teamImg1,title:'Sophia',desc:'CEO & Founder'},
        {image:teamImg2,title:'Benjamin W.',desc:'Restaurant Manager'},
        {image:teamImg3,title:'Muchen Jack',desc:'Senior Chef'}

    ]

  return (

    <>
      {
            team?.map((items) => {
              return (
                <Col style={{marginTop:'30px'}}>
                <Members team={items} />
                </Col>
              )
            })
          }

    
    </>
  )
}

export default TeamMembers