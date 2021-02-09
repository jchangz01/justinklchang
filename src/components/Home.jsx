import React, { useState } from 'react';
import '../css/Home.css'
import homeProfile from '../assets/images/home-profile.png'
import navLogo from '../assets/images/portfolio_logo_black.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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
  
export default class Home extends React.Component {
    render() {
        return (
            <div id="content-container">
                <header className="fade-in-6">
                    <NavBar/>
                </header>
                <section>
                    <div className="width-size fade-in-3" id="home-main">
                        <div className="home-main-content">
                            <div style={{marginBottom: "80px"}}>
                                <h1 className="home-main-title">Justin Kyle</h1>
                                <h1 className="home-main-title">Chang</h1>
                                <h2 className="home-main-subtitle">2nd Year Computer Science Student at UCLA</h2>
                                <p style={{fontSize: "64px", "marginBottom": "36px"}}> . . . </p>
                                <h3 className="home-main-subsubtitle"><a href="/#about">Learn more about Justin</a></h3>
                            </div>
                        </div>
                        <div className="home-main-content">
                            <img src={homeProfile} alt="Did not load, please refresh" className="home-main-pic float"/>
                            <div className="home-main-circ float">
                                <div className="home-main-subcirc"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div id="footer-info">Designed and <u><a target="_blank" rel="noreferrer" href="https://github.com/jchangz01/justinklchang" style={{color: 'lightgray'}}>Coded</a></u> by Justin Kyle Chang</div>
                    <div id="copyright">&#169; <b>justinklchang.com</b></div>
                </footer>
            </div>
        )
    }
}