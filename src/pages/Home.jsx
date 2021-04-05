import React from 'react';
import homeProfile from '../assets/images/home-profile.png'
import NavBar from '../components/NavBar'
import '../css/Home.css'
  
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