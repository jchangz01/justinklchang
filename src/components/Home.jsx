import React from 'react'
import '../css/Home.css'


export default class Home extends React.Component {
    render() {
        return (
            <div id="content-container">
                <header>
                    <div id="navbar-container" class="width-size center">
                        <nav id="navbar-contents">
                            <ul><a>About</a></ul>
                            <ul><a>Contact</a></ul>
                            <ul><a id="logo"></a></ul>
                            <ul><a>Projects</a></ul>
                            <ul><a>MISC</a></ul>
                        </nav>
                    </div>
                </header>
                <section>
                    <div class="width-size" id="home-section">
                        <div class="home-section-content"></div>
                        <div class="home-section-content"></div>
                    </div>
                </section>
            </div>
        )
    }
}