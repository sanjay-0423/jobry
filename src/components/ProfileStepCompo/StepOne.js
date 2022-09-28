import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const StepOne = () => {
  const [birthDate, setBirthDate] = useState();
  return (
    <>
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
              controlId="dob"
              className="mb-3 readOnlyInput"
            >
              <DatePicker className='form-control' placeholderText="DOB" selected={birthDate} onChange={(date) => setBirthDate(date)} />

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
          <Col md="6">
            <FloatingLabel
              controlId="PhoneNumber"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter Phone Number" />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default StepOne