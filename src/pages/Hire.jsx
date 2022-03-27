import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import hireProfile from '../assets/images/hire-profile.png';
import './css/Hire.css';

import { dlModeContext } from '../contexts/dlMode';

export default class Hire extends React.Component {
    static contextType = dlModeContext;

    render () {
        let [dlMode] = this.context;
        return (
            <>
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
                                <h4><u><a target="_blank" href="/#resume" className={dlMode ? 'white' : 'black'}>Link to Resume</a></u></h4>
                                <h4 className={dlMode ? 'white' : 'black'}>justinklchang@yahoo.com</h4>
                                <h4 className={dlMode ? 'white' : 'black'}>(707) 534-8001</h4>
                            </div>
                            <div style={{marginBottom: "32px"}}>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/" className={`hire-social ${dlMode ? 'white' : 'black'}`}><FontAwesomeIcon icon={faInstagram}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/" className={`hire-social ${dlMode ? 'white' : 'black'}`}><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/" className={`hire-social ${dlMode ? 'white' : 'black'}`}><FontAwesomeIcon icon={faFacebook}/></a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01" className={`hire-social ${dlMode ? 'white' : 'black'}`}><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                            <img src={hireProfile} id="hire-vector-pic" alt="Justin Kyle Chang Vector Drawing"/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}