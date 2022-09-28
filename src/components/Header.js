import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseButton, Container, Offcanvas } from 'react-bootstrap';
import { BiLinkExternal, BiKey, BiPlus, BiMenu, BiX, BiFile, BiBriefcase, BiMoney, BiPaperPlane, BiUser, BiLockOpenAlt, BiLogOut, BiEdit } from "react-icons/bi";

import Logo from '../images/logo.png';
import ProfileImg from '../images/clientimg.jpg';
import LogoWhite from '../images/logo-white.png';
import NavMenuItems from './HeaderComp/NavMenuItems';
import MobileHeader from './HeaderComp/MobileHeader';

const Header = () => {

    // Sticky Header Function
    const [stickyHeader, setStickyHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setStickyHeader(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // Profile Side Bar Functions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MobileHeader />
            <header className={stickyHeader ? "stick-top forsticky sticky " : "stick-top forsticky"}>
                <div className="menu-sec">
                    <Container className=''>
                        <div className="logo">
                            <Link to="/">
                                <img className="hidesticky" src={LogoWhite} alt="" />
                                <img className="showsticky" src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="my-profiles-sec">
                            <span onClick={handleShow}>
                                <img src={ProfileImg} alt="" /> Rahul Sabhdaiya <BiMenu />
                            </span>
                        </div>
                        <div className="btn-extars">
                            <Link to="/post-a-job" className="post-job-btn"><BiPlus /> Post Jobs</Link>
                            <ul className="account-btns">
                                <li className="signup-popup">
                                    <Link to="/signup"><BiKey /> Sign Up</Link>
                                </li>
                                <li className="signin-popup">
                                    <Link to="/login"><BiLinkExternal /> Login</Link>
                                </li>
                            </ul>
                        </div>
                        <nav>
                            <NavMenuItems />
                        </nav>
                    </Container>
                </div>
            </header>
            <Offcanvas className="profile-sidebar" placement="end" backdrop={true} scroll={true} show={show} onHide={handleClose} >
                <Offcanvas.Body>
                    <span className="close-profile" onClick={handleClose}>
                        <BiX />
                    </span>
                    <div className="can-detail-s">
                        <div className="cst">
                            <img src={ProfileImg} alt="" />
                        </div>
                        <h3>Rahul Sabhadiya</h3>
                        <span><i>UX / UI Designer</i> at Atract Solutions</span>
                        <p>creativelayers088@gmail.com</p>
                        <p>Member Since, 2017</p>
                        <p><i className="la la-map-marker"></i>Istanbul / Turkey</p>
                    </div>
                    <div className="tree_widget-sec">
                        <ul>
                            <li>
                                <Link to="/profileinfo"><BiEdit /> Edit Profile</Link>
                            </li>
                            <li>
                                <Link><BiFile /> My Profile</Link>
                            </li>
                            <li>
                                <Link><BiBriefcase />My Resume</Link>
                            </li>
                            <li>
                                <Link><BiMoney /> Shorlisted Job</Link>
                            </li>
                            <li>
                                <Link><BiPaperPlane />Applied Job</Link>
                            </li>
                            <li>
                                <Link><BiUser />Job Alerts</Link>
                            </li>
                            <li>
                                <Link><BiFile />Cv &amp; Cover Letter</Link>
                            </li>
                            <li>
                                <Link to="/changepassword"><BiLockOpenAlt />Change Password</Link>
                            </li>
                            <li>
                                <Link><BiLogOut />Logout</Link>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header