import React from 'react'
import '../ConstComponents/Style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillStar } from "react-icons/ai";
const StartPhoto = () => {
  return (
    <>
      <div>
        <div className='main_Div_Video'>
          <div className='main_div_img_overlay'>
            <Container>
              <Row>
                <Col className='Steak'>
                  <h1>Delicious</h1>
                  <h1>Steak</h1>
                  <div className='steak_review'>
                    <span className='steak_review_number'>4.4/5</span>
                    <AiFillStar className='steak_review_icon'/>
                    <AiFillStar className='steak_review_icon'/>
                    <AiFillStar className='steak_review_icon'/>
                    <AiFillStar className='steak_review_icon'/>
                    <AiFillStar className='steak_review_icon'/>
                  </div>
                  <div className='steak_desc'>
                    <p>From <strong>1,206+</strong>Customer Reviews</p>
                  </div>
                </Col>
                <Col className='Steak steak_slider'></Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartPhoto