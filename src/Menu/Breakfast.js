import React from 'react'
import img1 from './../Assets/brett.jpg'
import img4 from './../Assets/keriliwi.jpg'
import img6 from './../Assets/toast.jpg'
import Col from 'react-bootstrap/Col';
import HomeMenu from '../ConstComponents/HomeMenu';
const Breakfast = () => {
    var menu =[
        { image:img1, eating: 'BreakFast', name: 'Morning fresh', price: '$12.50' },
        { image:img4, eating: 'BreakFast', name: 'Seafood Set', price: '$86' },
        { image:img6, eating: 'Dinner', name: 'Healthy Soup', price: '$34.20' }
    ]
  return (
    <>
         {
              menu?.map((items) => {
                return (
                  <Col style={{marginTop:'30px'}}>
                  <HomeMenu menu={items} />
                  </Col>
                )
              })
            }
    </>
  )
}

export default Breakfast