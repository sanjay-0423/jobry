import React from 'react'
import { Container, Row, Col, Form, Button,Card } from 'react-bootstrap'
import InnerHeader from '../components/InnerHeader'

const ChangePassword = () => {
    return (
        <>
            <InnerHeader title="Change Password" />
            <section className='contactsection py-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg="5">
                            <Card className='shadow'>
                                <Card.Body>
                                    <div className='contact-form'>
                                        <Form className='p-0'>
                                            <Form.Group className="mb-0 pf-field" controlId="oldpassword">
                                                <Form.Label className='pf-title'>Old Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter Old Password" />
                                            </Form.Group>

                                            <Form.Group className="mb-0 pf-field" controlId="newpassword">
                                                <Form.Label className='pf-title'>New Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter New Password" />
                                            </Form.Group>

                                            <Form.Group className="mb-0 pf-field" controlId="confirmpassword">
                                                <Form.Label className='pf-title'>Confirm Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter Confirm Password" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit" className='w-100'>
                                                Update
                                            </Button>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ChangePassword