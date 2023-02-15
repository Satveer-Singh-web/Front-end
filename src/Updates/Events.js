import React from 'react'
import articleImg1 from './../Assets/coconut.jpg'
import articleImg2 from './../Assets/pasta.jpg'
import articleImg3 from './../Assets/spoon.jpg'
import Col from 'react-bootstrap/Col';
import ConstNews2 from '../ConstComponents/ConstNews2';
const Events = () => {
    var news=[
        {article:articleImg1,button:'Promotions',title:'Is Coconut good for your health?'},
        {article:articleImg2,button:'Career',title:'How to run a sushi business?'},
        {article:articleImg3,button:'Meeting',title:'Learning a fine dining experience'}
    ]
  return (
    <>
        {
        news?.map((x) => {
            return (
                <Col style={{ marginTop: '30px' }}>
                    <ConstNews2 news={x} />
                </Col>
            )
        })
    }
    </>
  )
}

export default Events