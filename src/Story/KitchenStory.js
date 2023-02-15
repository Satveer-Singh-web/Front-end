import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
const KitchenStory = () => {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    <Col md={5}>
                        <h3 className='story_title'>Crispy Kitchen is the latest Bootstrap 5 HTML template provided by Tooplate website.</h3>
                        <div className='flex_button'>
                            <Button variant="dark" className='story_button'>Check Out News</Button>
                            <Button variant='danger' className='story_button'>Say Hi</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <p className='story_desc'>
                            Since this website template is 100% free to use, you can edit and apply it for your commercial restaurant websites. There are 6 HTML pages included in this template. Please click "Reservation" button on the top right to see the pop-up reservation form.
                        </p>
                        <p className='story_desc'>
                            You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default KitchenStory