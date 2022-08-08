import React from 'react';
import homeProfile from '../assets/images/home-profile.png';
import './css/Home.css';
  
import { dlModeContext } from '../contexts/dlMode';

export default class Home extends React.Component {
    static contextType = dlModeContext;
    
    render() {
        let [dlMode] = this.context;
        return (
            <>
                <section>
                    <div className="width-size fade-in-3" id="home-main">
                        <div className="home-main-content">
                            <div style={{marginBottom: "80px"}}>
                                <h1 className={`home-main-title ${dlMode ? 'white' : 'black'}`} onClick={() => console.log(dlMode)}>Justin Kyle</h1>
                                <h1 className={`home-main-title ${dlMode ? 'white' : 'black'}`} >Chang</h1>
                                <h2 className="home-main-subtitle" >4th Year Computer Science Student at UCLA</h2>
                                <p className={dlMode ? 'white' : 'black'} style={{fontSize: "64px", "marginBottom": "36px"}}> . . . </p>
                                <h3><a className={`home-main-subsubtitle ${dlMode ? 'white' : 'black'}`} href="/#about">Learn more about Justin</a></h3>
                            </div>
                        </div>
                        <div className="home-main-content">
                            <img src={homeProfile} alt="Did not load, please refresh" className={`home-main-pic ${dlMode ? 'float-white' : 'float-black'}`} />
                            <div className={`home-main-circ ${dlMode ? 'float-white circ-dark' : 'float-black circ-light'}`}>
                                <div className={`home-main-subcirc ${dlMode ? 'subcirc-dark' : 'subcirc-light'}`}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div id="footer-info" className={dlMode ? 'white' : 'black'}>
                        Designed and 
                        <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01/justinklchang" style={{color: 'lightgray'}}> <u>Coded</u> </a>
                         by Justin Kyle Chang
                    </div>
                    <div id="copyright" className={dlMode ? 'white' : 'black'}>&#169; 
                        <b>justinklchang.com</b>
                    </div>
                </footer>
            </>
        )
    }
}