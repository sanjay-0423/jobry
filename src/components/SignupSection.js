import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Select from 'react-select';

const SignupSection = () => {
  const JobLocations = [
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Web Designing', label: 'Web Designing' },
    { value: 'Art & Culture', label: 'Art & Culture' },
    { value: 'Reading & Writing', label: 'Reading & Writing' },
  ];
  const UserTypeSelect = [
    { value: 'Candidate', label: 'Candidate' },
    { value: 'Employer', label: 'Employer' }
  ];
  return (
    <section>
      <div className="block remove-bottom">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="account-popup-area signup-popup-box static">
                <div className="account-popup">
                  <h3>Sign Up</h3>
                  <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span>
                  <div className="dropdown-field mb-0 mt-4">
                    <Select Clearable options={UserTypeSelect} className="text-start selectblock h-100" placeholder="I want to register as" />
                  </div>
                  <form>
                    <div className="cfield">
                      <input type="text" placeholder="Username" />
                      <i className="la la-user"></i>
                    </div>
                    <div className="cfield">
                      <input type="password" placeholder="********" />
                      <i className="la la-key"></i>
                    </div>
                    <div className="cfield">
                      <input type="text" placeholder="Email" />
                      <i className="la la-envelope-o"></i>
                    </div>
                    <div className="dropdown-field">
                      <Select Clearable options={JobLocations} className="text-start selectblock h-100" placeholder="Please Select Specialism" />
                    </div>
                    <div className="cfield">
                      <input type="text" placeholder="Phone Number" />
                      <i className="la la-phone"></i>
                    </div>
                    <button type="submit">Signup</button>
                  </form>
                  <div className="extra-login">
                    <span>Already registered with <b>Jobry</b>? </span>
                    <div className='signupbtnblock'>
                      <Link to="/login" className='sitebtn w-100 mt-3 btn-solid'>Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

  )
}

export default SignupSection