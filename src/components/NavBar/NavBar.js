import React from 'react';
import './navBar.css'

const toggleMenu = (onShowNav, event) => {
    onShowNav(event);
}

const scrollTo = (refToScroll, onSrollToRef) => {    
    onSrollToRef(refToScroll)
}

const NavBar = (props) => {
    const active = props.showNavBar;
    return (
        <div className="head-container flex">
            <div className={`hamburger ${active}`} onClick={event => toggleMenu(props.onShowNav, event)}></div>
            <ul className={`nav-list flex flex-wrap margin-zero align-items-center ${active}`}>
                <li onClick={() => scrollTo('about', props.onSrollToRef)} className="nav-item list-item flex justify-center align-items-center">
                    About Me
                </li>
                <li onClick={() => scrollTo('projects', props.onSrollToRef)} className="nav-item list-item flex justify-center align-items-center">
                    My Projects
                </li>
                <li onClick={() => scrollTo('contactMe', props.onSrollToRef)} className="nav-item list-item flex justify-center align-items-center">
                    Contact Me
                </li>
            </ul>
        </div>

    );
};

export default NavBar;


