import React from 'react'
import '../css/Hire.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


function NavBar (props) {
    return (
        <div id="navbar-container" className="width-size center">
            <nav id="navbar-contents">
                <ul><a href='/about'>About</a></ul>
                <ul><a href='/contact'>Contact</a></ul>
                <ul><a href='/' id="logo"><img id="portfolio-logo" alt="JC" src={'/images/portfolio_logo_black.svg'}/></a></ul>
                <ul><a href='/projects'>Projects</a></ul>
                <ul><a href='/hire'>Hire Me</a></ul>
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
                    <div className="width-size fade-in-4" id="hire-main">
                        <div className="hire-main-content">
                            <div style={{marginBottom: "80px"}}> 
                                <h2 id="hire-name">Justin Kyle Chang</h2>
                                <h3>Software Engineer Intern</h3>
                                <h3>Bay Area &#183; San Francisco &#183; Silicon Valley</h3>
                            </div>
                            <div style={{marginBottom: "80px"}}>
                                <h3 id="hire-advertise">Please consider hiring me by checking out my resume and then reaching out to me!</h3>
                                <h4><ul><a href="#">Link to Resume</a></ul></h4>
                                <h4>justinklchang@yahoo.com</h4>
                                <h4>(707) 534-8001</h4>
                            </div>
                            <div style={{marginBottom: "32px"}}>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/" className="hire-social"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/" className="hire-social"><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/" className="hire-social"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01" className="hire-social"><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}