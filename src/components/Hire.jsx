import React, { useState } from 'react';
import '../css/Hire.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import navLogo from '../assets/images/portfolio_logo_black.svg'
import hireProfile from '../assets/images/hire-profile.png'

function NavBar (props) {
    const [menu, toggleMenu] = useState(false);
    const onClick = () => toggleMenu(!menu);

    if (menu === true)
        document.querySelector('body').classList.add('no-scroll')
    else 
        document.querySelector('body').classList.remove('no-scroll')
        
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
                    <FontAwesomeIcon icon={faTimes} id="navbar-menu-button" onClick={onClick}/>
                    <div className="white-overlay"></div> 
                </React.Fragment> :
                <FontAwesomeIcon icon={faBars} id="navbar-menu-button" onClick={onClick}/>
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


export default class Hire extends React.Component {
    render () {
        return (
            <div id="content-container">
                <header>
                    <NavBar/>
                </header>
                <section>
                    <div className="width-size fade-in-3" id="hire-main">
                        <div className="hire-main-content">
                            <div style={{marginBottom: "80px"}}> 
                                <h2 id="hire-name">Justin Kyle Chang</h2>
                                <h3>Software Engineer Intern</h3>
                                <h3>Bay Area &#183; San Francisco &#183; Silicon Valley</h3>
                            </div>
                            <div style={{marginBottom: "80px"}}>
                                <h3 id="hire-advertise">Please consider hiring me by checking out my resume and reaching out to me!</h3>
                                <h4><u><a target="_blank" href="/#resume">Link to Resume</a></u></h4>
                                <h4>justinklchang@yahoo.com</h4>
                                <h4>(707) 534-8001</h4>
                            </div>
                            <div style={{marginBottom: "32px"}}>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/" className="hire-social"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/" className="hire-social"><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/" className="hire-social"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01" className="hire-social"><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                            <img src={hireProfile} id="hire-vector-pic" alt="Justin Kyle Chang Vector Drawing"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}