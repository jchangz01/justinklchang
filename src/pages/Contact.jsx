import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faSpotify, faStrava } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import './css/Contact.css';

import { dlModeContext } from '../contexts/dlMode';

function Socials ({dlMode}) {
    return (
        <div id="contact-main-icon-container">
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/" className={`icon-circle instagram ${dlMode ? 'float-white bg-black' : 'float-black bg-white'}`}><FontAwesomeIcon className={`icon ${dlMode ? 'white' : 'black'}`} icon={faInstagram}/></a>
                <h4 className="icon-name">Instagram</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/" className={`icon-circle linkedin ${dlMode ? 'float-white bg-black' : 'float-black bg-white'}`}><FontAwesomeIcon className={`icon ${dlMode ? 'white' : 'black'}`} icon={faLinkedin}/></a>
                <h4 className="icon-name">LinkedIn</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/" className={`icon-circle facebook ${dlMode ? 'float-white bg-black' : 'float-black bg-white'}`}><FontAwesomeIcon className={`icon ${dlMode ? 'white' : 'black'}`} icon={faFacebook}/></a>
                <h4 className="icon-name">Facebook</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01" className={`icon-circle github ${dlMode ? 'float-white bg-black' : 'float-black bg-white'}`}><FontAwesomeIcon className={`icon ${dlMode ? 'white' : 'black'}`} icon={faGithub}/></a>
                <h4 className="icon-name">GitHub</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/justinklchang?si=f50776d8724a43c5" className={`icon-circle spotify ${dlMode ? 'float-white bg-black' : 'float-black bg-white'}`}><FontAwesomeIcon className={`icon ${dlMode ? 'white' : 'black'}`} icon={faSpotify}/></a>
                <h4 className="icon-name">Spotify</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/51901493" className={`icon-circle strava ${dlMode ? 'float-white bg-black' : 'float-black bg-white'}`}><FontAwesomeIcon className={`icon ${dlMode ? 'white' : 'black'}`} icon={faStrava}/></a>
                <h4 className="icon-name">Strava</h4>
            </div>
        </div>
    )
}
export default class Contact extends React.Component {
    static contextType = dlModeContext;

    state = {
        message: "",
        updateKey: 0,
    }

    copyToClipboard = type => {
        var text = (type === "personal" ? "justinklchang@yahoo.com" : "jchangz01@g.ucla.edu")
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            this.setState({message: type, updateKey: this.state.updateKey + 1})
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    render() {
        let [dlMode] = this.context;
        return (
            <section>   
                <div className="width-size fade-in-3" id="contact-main"> 
                    <div className="contact-main-content">
                        <h1 id="contact-main-title" className={dlMode ? 'white' : 'black'}>Contact Me</h1>
                        <h2 id="contact-main-subtitle">Get in touch with me now!</h2>
                        <div id="contact-main-email-container">
                            <h3 className={`email-content ${dlMode ? 'white' : 'black'}`}>Personal Email: <span onClick={() => this.copyToClipboard("personal")}>justinklchang@yahoo.com
                                    <FontAwesomeIcon style={{marginLeft: "12px"}} className={dlMode ? 'white' : 'black'} icon={faClipboard}/>
                                </span>
                            </h3>
                            <h3 className={`email-content ${dlMode ? 'white' : 'black'}`}>School Email: <span onClick={() => this.copyToClipboard("school")}> jchangz01@g.ucla.edu
                                    <FontAwesomeIcon style={{marginLeft: "12px"}} className={dlMode ? 'white' : 'black'} icon={faClipboard}/>
                                </span>
                            </h3>
                        </div>
                        {this.state.message ? <div key={this.state.updateKey} className="contact-message fade-in-2">Copied to Clipboard</div> : null}
                        <Socials dlMode={dlMode} />
                    </div>
                </div>
            </section>
        )
    }
}