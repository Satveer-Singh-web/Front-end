import React from 'react'
import img2 from '../Assets/farhad.jpg'
import img5 from './../Assets/louis.jpg'
import img3 from '../Assets/ibrahi.jpg'
import HomeMenu from '../ConstComponents/HomeMenu'
import Col from 'react-bootstrap/Col';
const Lunch = () => {
    var menu =[
        { image: img2, eating:'Lunch', name: 'Tooplate Soup', price: '$24.50' },
        { image:img5, eating: 'Lunch', name: 'Burger Set', price: '$20.50' },
        { image:img3, eating: 'Dinner', name: 'Premium Steak', price: '$45' }
    ]
  return (
    <>
     {
              menu?.map((items) => {
                return (
                  <Col style={{marginTop:'20px'}}>
                  <HomeMenu menu={items} />
                  </Col>
                )
              })
            }
    </>
  )
}

export default Lunch