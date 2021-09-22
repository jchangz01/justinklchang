import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import navLogoBlack from '../../assets/images/portfolio_logo_black.svg';
import navLogoWhite from '../../assets/images/portfolio_logo_white.svg';
import DLModeBtn from './DLModeBtn';
import './index.css';

export default function NavBar ({dlMode}) {
    const [menu, toggleMenu] = useState(false);
    const onClick = () => toggleMenu(!menu);
        
    return (
        <div id="navbar-container" className="center width-size">
            <nav id="navbar-contents">
                <ul key="About">
                    <a className={dlMode ? 'white' : 'black'} href='/#about'>About</a>
                </ul>
                <ul key="Contact"><a className={dlMode ? 'white' : 'black'} href='/#contact'>Contact</a></ul>
                <ul key="Home">
                    <a href='/#' id="logo" className={dlMode ? 'bg-white' : 'bg-black'} style={{marginBottom:"8px"}}><img id="portfolio-logo" alt="JC" src={dlMode ? navLogoBlack : navLogoWhite}/></a>
                    <DLModeBtn />
                </ul>
                <ul key="Projects"><a className={dlMode ? 'white' : 'black'} href='/#projects'>Projects</a></ul>
                <ul key="Hire"><a className={dlMode ? 'white' : 'black'} href='/#hire'>Hire Me</a></ul>
            </nav>
            { menu ?
                <React.Fragment>
                    <FontAwesomeIcon icon={faTimes} id="navbar-menu-button" onClick={onClick} className={dlMode ? 'white' : 'black'} style={{top: "40px"}} />
                    <div className="white-overlay"></div> 
                </React.Fragment> :
                <FontAwesomeIcon icon={faBars} id="navbar-menu-button" onClick={onClick} className={dlMode ? 'white' : 'black'}  style={{position: "absolute", top: "40px"}}/>
            }
            <nav id="navbar-menu-content" className={menu ? (dlMode ? "active bg-black" : "active bg-white") : null}>
                <ul key="About"><a className={dlMode ? 'white' : 'black'} href='/#about'>About</a></ul>
                <hr></hr>
                <ul key="Contact"><a className={dlMode ? 'white' : 'black'} href='/#contact'>Contact</a></ul>
                <hr></hr>
                <ul key="Projects"><a className={dlMode ? 'white' : 'black'} href='/#projects'>Projects</a></ul>
                <hr></hr>
                <ul key="Hire"><a className={dlMode ? 'white' : 'black'} href='/#hire'>Hire Me</a></ul>
                <hr></hr>
            </nav>
        </div>
    )
}