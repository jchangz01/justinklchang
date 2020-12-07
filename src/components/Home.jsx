import React from 'react'
import '../css/Home.css'
import profile from './images/home-profile.png'

export default class Home extends React.Component {
    render() {
        return (
            <div id="content-container">
                <header>
                    <div id="navbar-container" className="width-size center">
                        <nav id="navbar-contents">
                            <ul><a>About</a></ul>
                            <ul><a href='/contact'>Contact</a></ul>
                            <ul><a id="logo"></a></ul>
                            <ul><a>Projects</a></ul>
                            <ul><a>MISC</a></ul>
                        </nav>
                    </div>
                </header>
                <section>
                    <div className="width-size" id="home-main">
                        <div className="home-main-content">
                            <div style={{marginBottom: "80px"}}>
                                <h1 className="home-main-title">Justin Kyle</h1>
                                <h1 className="home-main-title">Chang</h1>
                                <h2 className="home-main-subtitle">2nd Year Computer Science Student at UCLA</h2>
                                <p style={{fontSize: "64px", "marginBottom": "36px"}}> . . . </p>
                                <h3 className="home-main-subsubtitle"><a>Learn more about Justin</a></h3>
                            </div>
                        </div>
                        <div class="home-main-content">
                            <img src={profile} className="home-main-pic"/>
                            <div className="home-main-circ">
                                <div className="home-main-subcirc"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}