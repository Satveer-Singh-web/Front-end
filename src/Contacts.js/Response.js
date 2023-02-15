import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Response = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <p className='left'>Name</p>
                                <Form.Control type="text" id="inputGroup-sizing-lg" placeholder="Ur-Name" />
                            </Col>
                            <Col>
                                <p className='left'>Number</p>
                                <Form.Control type="text" id="inputGroup-sizing-lg" placeholder="123-456-7890" />
                            </Col>
                        </Row>
                        <p className='left'>Email</p>
                        <Form.Control type="email" id="inputGroup-sizing-lg" placeholder="Enter ur email" />
                        <p className='left'>Message</p>
                        <Form.Control as="textarea" style={{ height: '120px' }} id="inputGroup-sizing-lg" placeholder="your Message" />
                        <Button className='form-button' variant="dark" size="lg">
                            Submit
                        </Button>
                    </Col>
                    <Col style={{ marginLeft: '100px' }}>
                        <h2 className='story_title' style={{ textAlign: 'center' }}>Weekdays</h2>
                        <div style={{marginTop:'20px'}} >
                            <span className='member_desc'>Monday to Friday</span>
                            <span className='member_desc' style={{ marginLeft: '60px' }}>10:00 AM - 08:00 PM</span>
                        </div>
                        <h2 className='story_title' style={{ textAlign: 'center' , marginTop:'40px' }}>Weekends</h2>
                        <div style={{marginTop:'20px'}} >
                            <span className='member_desc'>Saturday and Sunday</span>
                            <span className='member_desc' style={{ marginLeft: '60px' }}>11:00 AM - 11:00 PM</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Response