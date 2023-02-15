import React from 'react'
import img1 from './../Assets/brett.jpg'
import img3 from '../Assets/ibrahi.jpg'
import img6 from './../Assets/toast.jpg'
import HomeMenu from '../ConstComponents/HomeMenu'
import Col from 'react-bootstrap/Col';
const Dinner = () => {
    var menu = [
        { image: img1, eating: 'BreakFast', name: 'Morning fresh', price: '$12.50' },
        { image: img3, eating: 'Dinner', name: 'Premium Steak', price: '$45' },
        { image: img6, eating: 'Dinner', name: 'Healthy Soup', price: '$34.20' }
    ]
    return (
        <>
            {
                menu?.map((items) => {
                    return (
                        <Col style={{ marginTop: '20px' }}>
                            <HomeMenu menu={items} />
                        </Col>
                    )
                })
            }
        </>
    )
}

export default Dinner