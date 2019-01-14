import React from 'react'
import './AboutMe.css'
import myImg from '../../assets/images/myPic.jpg'
import AboutTxt from './AboutTxt'

const AboutMe = () => {
    return (
        <React.Fragment>
            <h2>Who Am I</h2>
            <div className="about-me flex align-items-center margin-zero">
                <AboutTxt/>
                <img src={myImg} alt="me"/>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;
