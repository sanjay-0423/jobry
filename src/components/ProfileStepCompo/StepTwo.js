import React from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

const StepTwo = () => {
  return (
    <div className='formblock border-top p-4 border-bottom'>
      <Row>
        <Col md="6">
          <FloatingLabel
            controlId="fullname"
            label="Full Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Name" />
          </FloatingLabel>
        </Col>
        <Col md="6">
          <FloatingLabel
            controlId="email"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Enter Email" value="info@gmail.com" readOnly />
          </FloatingLabel>
        </Col>
        <Col md="6">
          <FloatingLabel
            controlId="JobTitle"
            label="Job Title"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Job Title" />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  )
}

export default StepTwo