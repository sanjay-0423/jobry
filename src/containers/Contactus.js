import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import InnerHeader from '../components/InnerHeader'

const Contactus = () => {
  return (
    <>
      <InnerHeader title="Contact Us" />
      <section className='contactsection py-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg="6">
              <div className='contact-form'>
                <h3>Keep In Touch</h3>
                <Form className='p-0'>
                  <Form.Group className="mb-0 pf-field" controlId="fullname">
                    <Form.Label className='pf-title'>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>
                  
                  <Form.Group className="mb-0 pf-field" controlId="email">
                    <Form.Label className='pf-title'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  
                  <Form.Group className="mb-0 pf-field" controlId="subject">
                    <Form.Label className='pf-title'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>
                  
                  <Form.Group className="mb-0 pf-field" controlId="message">
                    <Form.Label className='pf-title'>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Message" className='p-3' rows={3} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contactus