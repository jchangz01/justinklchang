import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faStrava, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import aboutProfile from '../assets/images/about-profile.jpg';
import './css/About.css';

import { dlModeContext } from '../contexts/dlMode';

export default class Contact extends React.Component {
    static contextType = dlModeContext;

    render() {
        let [dlMode] = this.context;
        return (
            <>
                <section>
                    <div className="width-size fade-in-3" id="about-main">
                        <div className="about-main-content" style={{textAlign: "right"}}>
                            <img className="about-main-pic" src={aboutProfile} alt="Did not load, please refresh"/>
                        </div>
                        <div className={`about-main-content ${dlMode ? 'white' : 'black'}`}>
                            <div style={{marginLeft: "40px"}}>
                                <h1 className={`about-main-title ${dlMode ? 'white' : 'black'}`}>About Me</h1>
                                <hr className={`about-main-linebreak ${dlMode ? 'bg-white' : 'bg-black'}`}></hr>
                                <p className={`about-main-paragraph ${dlMode ? 'white' : 'black'}`}>
                                    Hello! My name is <b>Justin Kyle Chang</b>. I am a 3rd-year student at UCLA (from the Bay Area) pursuing a 
                                    B.E. degree in Computer Science and aspiring to be a software engineer. 
                                </p>
                                <p className={`about-main-paragraph ${dlMode ? 'white' : 'black'}`}>
                                    My focus and interest lie in web development; however, I am open to exploring all fields of Computer Science! 
                                    I am knowledgeable in full stack development (Vue.js, React.js, Node.js, Express, and MongoDB), data structures 
                                    and algorithms (C++), Bash / Shell, and Git.
                                </p> 
                                <p className={`about-main-paragraph ${dlMode ? 'white' : 'black'}`}>
                                    I love to solve problems, build applications, collaborate in teams, and during my free time, 
                                    go on runs and hikes! I am currently looking for a 2022 summer internship! 
                                </p>
                                <p className={`about-main-paragraph ${dlMode ? 'white' : 'black'}`}>
                                    Check out my projects <a href="/#projects" className={dlMode ? 'white' : 'black'}>here</a> and/or connect with me <a href="/#contact" className={dlMode ? 'white' : 'black'}>here</a>.
                                </p>
                                <div className="about-main-socials">
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/"><FontAwesomeIcon className={dlMode ? 'white' : 'black'} icon={faInstagram}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/"><FontAwesomeIcon className={dlMode ? 'white' : 'black'} icon={faLinkedin}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/"><FontAwesomeIcon className={dlMode ? 'white' : 'black'} icon={faFacebook}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01"><FontAwesomeIcon className={dlMode ? 'white' : 'black'} icon={faGithub}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@j.changz?lang=en"><FontAwesomeIcon className={dlMode ? 'white' : 'black'} icon={faTiktok}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/51901493"><FontAwesomeIcon className={dlMode ? 'white' : 'black'} icon={faStrava}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}