import React from 'react'
import img1 from './../Assets/brett.jpg'
import img2 from '../Assets/farhad.jpg'
import img3 from '../Assets/ibrahi.jpg'
import HomeMenu from '../ConstComponents/HomeMenu'
import img4 from './../Assets/keriliwi.jpg'
import img5 from './../Assets/louis.jpg'
import img6 from './../Assets/toast.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Menus = () => {
  var menu = [
    { image:img1, eating: 'BreakFast', name: 'Morning fresh', price: '$12.50' },
    { image: img2, eating:'Lunch', name: 'Tooplate Soup', price: '$24.50' },
    { image:img3, eating: 'Dinner', name: 'Premium Steak', price: '$45' },
    { image:img4, eating: 'BreakFast', name: 'Seafood Set', price: '$86' },
    { image:img5, eating: 'Lunch', name: 'Burger Set', price: '$20.50' },
    { image:img6, eating: 'Dinner', name: 'Healthy Soup', price: '$34.20' }
  ]
  return (
    <>
      {/* <h3 className='titles'>Special Menus</h3> */}
     
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

export default Menus