import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
const NewsLetters = () => {
    return (
        <>
            <Container style={{ margin: '100px 0px'}} >
                <Row>
                    <Col>
                        <div className='box_newsletter'></div>
                    </Col>
                    <Col md={5} style={{marginTop:'80px'}}>
                        <h3 className='story_title'>Our Newsletter</h3>
                        <p className='member_desc'>The food news every day</p>
                        <InputGroup size="lg" style={{ marginTop: '40px' }}>
                            <Form.Control />
                        </InputGroup>
                        <Button variant="dark" size="lg" className='to_hover'>
                            SubScribe
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewsLetters