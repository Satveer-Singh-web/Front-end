import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Style.css'
const Footer = () => {
    return (
        <>
            <div className='main_div_foot' style={{ marginBottom: '0px' }}>
                <div className='main-div-opa'>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h5 className='footer_title'>Crispy Kitchen</h5>
                            </Col>
                            <Col md={4}>
                                <h6 className='footer_title'>Location</h6>
                                <p className='member_desc' style={{ marginTop: '30px' }}>121 Einstein Loop N, Bronx, NY 10475, United States</p>
                                <Button variant="dark" className='footer_button' size="lg">
                                    Location
                                </Button>
                            </Col>
                            <Col md={4} style={{ marginLeft: '' }}>
                                <h6 className='footer_title'>Opening Hours</h6>
                                <p className='member_desc' style={{ marginTop: '30px' }}>Monday - Friday</p>
                                <p className='member_desc'>10:00 AM - 08:00 PM</p>
                                <p className='member_desc'>Tel: 010-02-0340</p>
                            </Col>
                            <Col md={4} style={{ marginLeft: '' }}>
                                <h6 className='footer_title'>Social</h6>
                                <p className='member_desc'>
                                    Copyright © 2022 Crispy Kitchen Co., Ltd.
                                    Design: Tooplate
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Footer