import React from 'react'
import articleImg1 from './../Assets/coconut.jpg'
import articleImg2 from './../Assets/pasta.jpg'
import articleImg3 from './../Assets/spoon.jpg'
import Col from 'react-bootstrap/Col';
import ConstNews2 from '../ConstComponents/ConstNews2';
const News2 = () => {
    var news=[
        {article:articleImg1,button:'Promotions',title:'Is Coconut good for you?'},
        {article:articleImg2,button:'News',title:'Salmon Steak Noodle'},
        {article:articleImg3,button:'News',title:'Salmon Steak Noodle'}
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


export default News2