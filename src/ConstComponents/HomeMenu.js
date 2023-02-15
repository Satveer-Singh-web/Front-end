import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HomeMenu = ({ menu }) => {
  return (
    <>

      <div className='main_box'>
        <div className='food_box' style={{ backgroundImage: `url('${menu.image}')` }}>

          <button className='eating_time'>{menu.eating}</button>
        </div>

        <div className='flex'>
        <h3 className='food_item'>{menu.name}</h3>
        <button className='price_button'>{menu.price}</button>
        </div>
      </div>
    </>
  )
}

export default HomeMenu