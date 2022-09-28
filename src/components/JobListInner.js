import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import CompLogo from '../images/companylogo.png';

const JobListInner = (props) => {
    return (
        <div className="job-listing wtabs">
            <div className="job-title-sec">
                <div className="c-logo">
                    <img src={CompLogo} alt="" />
                </div>
                <h3>
                    <Link to="/job">Web Designer / Developer</Link>
                </h3>
                <span>Massimo Artemisis</span>
                <div className="job-lctn"><i className="la la-map-marker"></i>Sacramento, California</div>
            </div>
            <div className="job-style-bx">
                <span className="job-is ft">Full time</span>
                <span className="fav-job"><BiHeart /></span>
                <i>5 months ago</i>
            </div>
        </div>
    )
}

export default JobListInner