import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

import StepZilla from "react-stepzilla";

import InnerHeader from '../components/InnerHeader'
import StepOne from '../components/ProfileStepCompo/StepOne';
import StepThree from '../components/ProfileStepCompo/StepThree';
import StepTwo from '../components/ProfileStepCompo/StepTwo';

const ProfileInfo = () => {
    const steps =
        [
            { name: 'Step 1', component: <StepOne /> },
            { name: 'Step 2', component: <StepTwo /> },
            { name: 'Step 3', component: <StepThree /> }
        ]
    return (
        <>
            <InnerHeader title="Profile Steps" />
            <section className='block bg-light'>
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col lg="10">
                            <Card className='shadow'>
                                <Card.Body className='p-0'>
                                    <div className='step-progress profilestepform'>
                                        <StepZilla steps={steps} />
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

export default ProfileInfo