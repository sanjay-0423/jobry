import React from 'react';
import { Accordion } from 'react-bootstrap';
import { BiSearch, BiMap } from 'react-icons/bi';

import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";

const JobSidebarFilter = () => {
    return (
        <aside>

            <div className='widget'>
                <div className="search_widget_job">
                    <div className="field_w_search">
                        <input type="text" placeholder="Search Keywords" />
                        <BiSearch />
                    </div>
                    <div className="field_w_search">
                        <input type="text" placeholder="All Locations" />
                        <BiMap />
                    </div>
                </div>
            </div>

            <div className='widget'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Date Posted</Accordion.Header>
                        <Accordion.Body>
                            <div className="posted_widget form-check ps-0">
                                <input type="radio" name="posteddate" id="232" />
                                <label htmlFor="232">Last Hour</label><br />
                                <input type="radio" name="posteddate" id="wwqe" />
                                <label htmlFor="wwqe">Last 24 hours</label><br />
                                <input type="radio" name="posteddate" id="erewr" />
                                <label htmlFor="erewr">Last 7 days</label><br />
                                <input type="radio" name="posteddate" id="qwe" />
                                <label htmlFor="qwe">Last 14 days</label><br />
                                <input type="radio" name="posteddate" id="wqe" />
                                <label htmlFor="wqe">Last 30 days</label><br />
                                <input type="radio" name="posteddate" id="qweqw" />
                                <label className="nm" htmlFor="qweqw">All</label><br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='widget'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Job Type</Accordion.Header>
                        <Accordion.Body>
                            <div className="type_widget form-check ps-0">
                                <p className="flchek">
                                    <input type="checkbox" name="choosetype" id="freelance" />
                                    <label htmlFor="freelance">Freelance (9)</label>
                                </p>
                                <p className="ftchek">
                                    <input type="checkbox" name="choosetype" id="fulltime" />
                                    <label htmlFor="fulltime">Full Time (8)</label>
                                </p>
                                <p className="ischek">
                                    <input type="checkbox" name="choosetype" id="internship" />
                                    <label htmlFor="internship">Internship (8)</label>
                                </p>
                                <p className="ptchek">
                                    <input type="checkbox" name="choosetype" id="parttime" />
                                    <label htmlFor="parttime">Part Time (5)</label>
                                </p>
                                <p className="tpchek">
                                    <input type="checkbox" name="choosetype" id="temporary" />
                                    <label htmlFor="temporary">Temporary (5)</label>
                                </p>
                                <p className="vtchek">
                                    <input type="checkbox" name="choosetype" id="volunteer" />
                                    <label htmlFor="volunteer">Volunteer (8)</label>
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='widget'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Specialism</Accordion.Header>
                        <Accordion.Body>
                            <div className="specialism_widget">
                                <div className="field_w_search">
                                    <input type="text" placeholder="Search Spaecialisms" />
                                </div>

                                <SimpleBar forceVisible="y" autoHide={false} className='simple-checkbox scrollbar ss-container' style={{ maxHeight: 232 }}>
                                    <div className="ss-wrapper">
                                        <div className="ss-content form-check">
                                            <p>
                                                <input type="checkbox" name="spealism" id="as" />
                                                <label htmlFor="as">Accountancy (2)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="asd" />
                                                <label htmlFor="asd">Banking (2)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="errwe" />
                                                <label htmlFor="errwe">Charity &amp; Voluntary (3)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="fdg" />
                                                <label htmlFor="fdg">Digital &amp; Creative (4)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="sc" />
                                                <label htmlFor="sc">Estate Agency (3)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="aw" />
                                                <label htmlFor="aw">Graduate (2)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="ui" />
                                                <label htmlFor="ui">IT Contractor (7)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="saas" />
                                                <label htmlFor="saas">Charity &amp; Voluntary (3)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="rrrt" />
                                                <label htmlFor="rrrt">Digital &amp; Creative (4)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="eweew" />
                                                <label htmlFor="eweew">Estate Agency (3)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="bnbn" />
                                                <label htmlFor="bnbn">Graduate (2)</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" name="spealism" id="ffd" />
                                                <label htmlFor="ffd">IT Contractor (7)</label>
                                            </p>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='widget'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Offerd Salary</Accordion.Header>
                        <Accordion.Body>
                            <div className="specialism_widget form-check ps-0">
                                <div className="simple-checkbox">
                                    <p><input type="checkbox" name="offerdsalary" id="1" /><label htmlFor="1">10k - 20k</label></p>
                                    <p><input type="checkbox" name="offerdsalary" id="2" /><label htmlFor="2">20k - 30k</label></p>
                                    <p><input type="checkbox" name="offerdsalary" id="3" /><label htmlFor="3">30k - 40k</label></p>
                                    <p><input type="checkbox" name="offerdsalary" id="4" /><label htmlFor="4">40k - 50k</label></p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='widget'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Career Level</Accordion.Header>
                        <Accordion.Body>
                            <div className="specialism_widget form-check ps-0">
                                <div className="simple-checkbox">
                                    <p><input type="checkbox" name="careerlevel" id="5" /><label htmlFor="5">Intermediate</label></p>
                                    <p><input type="checkbox" name="careerlevel" id="6" /><label htmlFor="6">Normal</label></p>
                                    <p><input type="checkbox" name="careerlevel" id="7" /><label htmlFor="7">Special</label></p>
                                    <p><input type="checkbox" name="careerlevel" id="8" /><label htmlFor="8">Experienced</label></p>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='widget'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Experince</Accordion.Header>
                        <Accordion.Body>
                            <div className="specialism_widget form-check ps-0">
                                <div className="simple-checkbox">
                                    <p><input type="checkbox" name="experince" id="1-2" /><label htmlFor="1-2">1Year to 2Year</label></p>
                                    <p><input type="checkbox" name="experince" id="2-3" /><label htmlFor="2-3">2Year to 3Year</label></p>
                                    <p><input type="checkbox" name="experince" id="3-4" /><label htmlFor="3-4">3Year to 4Year</label></p>
                                    <p><input type="checkbox" name="experince" id="4-5" /><label htmlFor="4-5">4Year to 5Year</label></p>
                                    <p><input type="checkbox" name="experince" id="5+" /><label htmlFor="5+">5+ Year</label></p>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='widget'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='d-inline-block w-100'>Qualification</Accordion.Header>
                        <Accordion.Body>
                            <div className="specialism_widget form-check ps-0">
                                <div className="simple-checkbox">
                                    <p><input type="checkbox" name="qualification" id="matriculation" /><label htmlFor="matriculation">Matriculation</label></p>
                                    <p><input type="checkbox" name="qualification" id="intermidiate" /><label htmlFor="intermidiate">Intermidiate</label></p>
                                    <p><input type="checkbox" name="qualification" id="gradute" /><label htmlFor="gradute">Gradute</label></p>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </aside>
    )
}

export default JobSidebarFilter