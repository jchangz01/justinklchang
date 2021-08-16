import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import navLogo from '../../assets/images/portfolio_logo_black.svg'
import './index.css'

export default function NavBar () {
    const [menu, toggleMenu] = useState(false);
    const onClick = () => toggleMenu(!menu);
        
    return (
        <div id="navbar-container" className="center width-size">
            <nav id="navbar-contents">
                <ul key="About"><a href='/#about'>About</a></ul>
                <ul key="Contact"><a href='/#contact'>Contact</a></ul>
                <ul key="Home"><a href='/#' id="logo"><img id="portfolio-logo" alt="JC" src={navLogo}/></a></ul>
                <ul key="Projects"><a href='/#projects'>Projects</a></ul>
                <ul key="Hire"><a href='/#hire'>Hire Me</a></ul>
            </nav>
            { menu ?
                <React.Fragment>
                    <FontAwesomeIcon icon={faTimes} id="navbar-menu-button" onClick={onClick} style={{top: "40px"}} />
                    <div className="white-overlay"></div> 
                </React.Fragment> :
                <FontAwesomeIcon icon={faBars} id="navbar-menu-button" onClick={onClick} style={{position: "absolute"}}/>
            }
            <nav id="navbar-menu-content" className={menu ? "active" : null}>
                <ul key="About"><a href='/#about'>About</a></ul>
                <hr></hr>
                <ul key="Contact"><a href='/#contact'>Contact</a></ul>
                <hr></hr>
                <ul key="Projects"><a href='/#projects'>Projects</a></ul>
                <hr></hr>
                <ul key="Hire"><a href='/#hire'>Hire Me</a></ul>
                <hr></hr>
            </nav>
        </div>
    )
}