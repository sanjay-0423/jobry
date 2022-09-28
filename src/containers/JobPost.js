import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import InnerHeader from '../components/InnerHeader'
import { useFormik } from 'formik';
import Select from 'react-select';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';


const validate = values => {
    const errors = {};
    if (!values.jobtitle) {
        errors.jobtitle = 'Job title must be Required';
    } else if (values.jobtitle.length > 15) {
        errors.jobtitle = 'Must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Email is Required';
    }

    if (!values.location) {
        errors.location = 'Location is Required';
    }

    if (!values.jobtype) {
        errors.jobtype = 'Please select Job Type';
    }

    if (!values.jobcategory) {
        errors.jobcategory = 'Please select Job Category';
    }

    if (!values.jobsalary) {
        errors.jobsalary = 'Please select Sallery Range';
    }

    if (!values.jobcareerlevel) {
        errors.jobcareerlevel = 'Please select Sallery Range';
    }

    if (!values.jobexperience) {
        errors.jobexperience = 'Please select Job Experience';
    }

    if (!values.jobgender) {
        errors.jobgender = 'Please select Job Gender';
    }

    if (!values.jobindustry) {
        errors.jobindustry = 'Please select Job Industry';
    }

    if (!values.jobqualification) {
        errors.jobqualification = 'Please select Job Qualification';
    }

    return errors;
};

const JobPost = () => {
    const formik = useFormik({
        initialValues: {
            jobtitle: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const JobTypes = [
        { value: 'Freelance', label: 'Freelance' },
        { value: 'Full Time', label: 'Full Time' },
        { value: 'Internship', label: 'Internship' },
        { value: 'Part Time', label: 'Part Time' },
        { value: 'Temporary', label: 'Temporary' },
    ];

    const jobcategorylist = [
        { value: 'Construction', label: 'Construction' },
        { value: 'Corodinator', label: 'Corodinator' },
        { value: 'Employer', label: 'Employer' },
        { value: 'Financial Career', label: 'Financial Career' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Quality check', label: 'Quality check' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Supporting', label: 'Supporting' },
        { value: 'Teaching', label: 'Teaching' },
    ];

    const jobcareerlevellist = [
        { value: 'Assistant Manager', label: 'Assistant Manager' },
        { value: 'Department Head', label: 'Department Head' },
        { value: 'Executive', label: 'Executive' },
        { value: 'Intermediate', label: 'Intermediate' },
        { value: 'Junior', label: 'Junior' },
        { value: 'Lead', label: 'Lead' },
        { value: 'Manager', label: 'Manager' },
        { value: 'Senior', label: 'Senior' }
    ];

    const jobsalaryrange = [
        { value: '$10000 - $15000', label: '$10000 - $15000' },
        { value: '$15000 - $20000', label: '$15000 - $20000' },
        { value: '$20000 - $25000', label: '$20000 - $25000' },
        { value: '$25000 - $30000', label: '$25000 - $30000' },
        { value: '$30000 - $35000', label: '$30000 - $35000' },
        { value: '$35000 - $40000', label: '$35000 - $40000' },
        { value: '$40000 - $45000', label: '$40000 - $45000' },
        { value: '$45000 - $50000', label: '$45000 - $50000' },
        { value: '$50000 - $100000', label: '$50000 - $100000' },
    ];

    const jobexperiencelist = [
        { value: '0-2 Years', label: '0-2 Years' },
        { value: '2-3 Years', label: '2-3 Years' },
        { value: '3-5 Years', label: '3-5 Years' },
        { value: '5-6 Years', label: '5-6 Years' },
        { value: '6-7 Years', label: '6-7 Years' },
        { value: '7+ Years', label: '7+ Years' },
    ];

    const jobgenderlist = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
    ];

    const jobindustrylist = [
        { value: 'Agriculture', label: 'Agriculture' },
        { value: 'Arts', label: 'Arts' },
        { value: 'Construction', label: 'Construction' },
        { value: 'Education', label: 'Education' },
        { value: 'Electricity', label: 'Electricity' },
        { value: 'Financial', label: 'Financial' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Manufacturing', label: 'Manufacturing' },
        { value: 'Mining', label: 'Mining' },
        { value: 'Retail Trade', label: 'Retail Trade' },
        { value: 'Transport', label: 'Transport' },
    ];

    const jobqualificationlist = [
        { value: 'Associate Degree', label: 'Associate Degree' },
        { value: 'Bachelor Degree', label: 'Bachelor Degree' },
        { value: 'Certificate', label: 'Certificate' },
        { value: 'Diploma', label: 'Diploma' },
        { value: 'Doctorate Degree', label: 'Doctorate Degree' },
        { value: 'Master Degree', label: 'Master Degree' },
    ];

    const selectCustomStyles = {
        control: (base) => ({
            ...base,
            height: 56,
            minHeight: 56
        })
    };

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty(),
    );

    return (
        <>
            <InnerHeader title="Post a Job" />
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col>
                            <Card className='shadow'>
                                <Card.Body className='contact-form p-4'>
                                    <Form className='p-0' onSubmit={formik.handleSubmit}>
                                        <Row>
                                            <Col md="12">
                                                <Form.Group className="mb-3 pf-field" controlId="jobtitle">
                                                    <Form.Label className='pf-title mb-1'>Job Title</Form.Label>
                                                    <Form.Control type="text" name="jobtitle" placeholder="Enter Job Title" onChange={formik.handleChange} value={formik.values.jobtitle} className="mb-0" />
                                                    {formik.errors.jobtitle ? <div className='form_error text-danger'>{formik.errors.jobtitle}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field" controlId="location">
                                                    <Form.Label className='pf-title mb-1'>Location</Form.Label>
                                                    <Form.Control type="text" name="location" placeholder="Enter Location" className='mb-0' onChange={formik.handleChange} value={formik.values.location} />
                                                    {formik.errors.location ? <div className='form_error text-danger'>{formik.errors.location}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobtype">
                                                    <Form.Label className='pf-title mb-1'>Job type</Form.Label>
                                                    {/* <Form.Control type="text" name="jobtype" placeholder="Enter Job Type" className='mb-0' onChange={formik.handleChange} value={formik.values.jobtype} /> */}
                                                    <Select Clearable name="jobtype" options={JobTypes} className="" placeholder="Select Job Type" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobtype ? <div className='form_error text-danger'>{formik.errors.jobtype}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobcategory">
                                                    <Form.Label className='pf-title mb-1'>Job category</Form.Label>
                                                    <Select Clearable name="jobcategory" options={jobcategorylist} className="" placeholder="Select Job category" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobcategory ? <div className='form_error text-danger'>{formik.errors.jobcategory}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobsalary">
                                                    <Form.Label className='pf-title mb-1'>Job Salary</Form.Label>
                                                    <Select Clearable name="jobsalary" options={jobsalaryrange} className="" placeholder="Select Job Salary" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobsalary ? <div className='form_error text-danger'>{formik.errors.jobsalary}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobcareerlevel">
                                                    <Form.Label className='pf-title mb-1'>Job Career Level</Form.Label>
                                                    <Select Clearable name="jobcareerlevel" options={jobcareerlevellist} className="" placeholder="Select Job Career Level" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobcareerlevel ? <div className='form_error text-danger'>{formik.errors.jobcareerlevel}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobexperience">
                                                    <Form.Label className='pf-title mb-1'>Job Experience</Form.Label>
                                                    <Select Clearable name="jobexperience" options={jobexperiencelist} className="" placeholder="Select Job Experience" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobexperience ? <div className='form_error text-danger'>{formik.errors.jobexperience}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobgender">
                                                    <Form.Label className='pf-title mb-1'>Job Gender</Form.Label>
                                                    <Select Clearable name="jobgender" options={jobgenderlist} className="" placeholder="Select Job Gender" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobgender ? <div className='form_error text-danger'>{formik.errors.jobgender}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobindustry">
                                                    <Form.Label className='pf-title mb-1'>Job Industry</Form.Label>
                                                    <Select Clearable name="jobindustry" options={jobindustrylist} className="" placeholder="Select Job Industry" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobindustry ? <div className='form_error text-danger'>{formik.errors.jobindustry}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="4">
                                                <Form.Group className="mb-3 pf-field selectblock" controlId="jobqualification">
                                                    <Form.Label className='pf-title mb-1'>Job Qualification</Form.Label>
                                                    <Select Clearable name="jobqualification" options={jobqualificationlist} className="" placeholder="Select Job Qualification" onChange={formik.handleChange} styles={selectCustomStyles} />
                                                    {formik.errors.jobqualification ? <div className='form_error text-danger'>{formik.errors.jobqualification}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="12">
                                                <Form.Group className="mb-3 pf-field" controlId="jobtype">
                                                    <Form.Label className='pf-title mb-1'>Job Qualification</Form.Label>
                                                    <Editor editorState={editorState} onChange={setEditorState} />
                                                    {formik.errors.jobqualification ? <div className='form_error text-danger'>{formik.errors.jobqualification}</div> : null}
                                                </Form.Group>
                                            </Col>

                                            <Col md="12">
                                                <Button variant="primary" type="submit">
                                                    Post
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default JobPost