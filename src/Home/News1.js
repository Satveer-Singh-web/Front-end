import React from 'react'
import ConstNews1 from '../ConstComponents/ConstNews1'
import newImg1 from './../Assets/news1.jpg'
import newImg2 from './../Assets/news2.jpg'
import Col from 'react-bootstrap/Col';
const News1 = () => {
    var data = [
        { newImage: newImg1, button: 'Featured', title: 'Healthy Lifestyle and happy living tips' },
        { newImage: newImg2, button: 'Featured', title: 'How to make a healthy meal' }
    ]
    return (
        <>
            {
                data?.map((elem) => {
                    return (
                        <Col style={{ marginTop: '30px' }}>
                            <ConstNews1 data={elem} />
                        </Col>
                    )
                })
            }
        </>
    )
}

export default News1