import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../css/Projects.css'


function NavBar (props) {
    return (
        <div id="navbar-container" className="width-size center">
            <nav id="navbar-contents">
                <ul><a href='/about'>About</a></ul>
                <ul><a href='/contact'>Contact</a></ul>
                <ul><a id="logo" href='/'></a></ul>
                <ul><a href="/projects">Projects</a></ul>
                <ul><a>MISC</a></ul>
            </nav>
        </div>
    )
}

export default class Contact extends React.Component {
    render() {
        return (
            <div id="content-container" style={{height: "auto"}}>
                <header>
                    <NavBar/>
                </header>
                <section>   
                    <div className="width-size fade-in-4" id="project-main"> 
                        <div className="project-main-content">
                            <h1 id="project-main-title">Projects</h1>
                            <h2 id="project-main-subtitle">Check out some of my personal works!</h2>
                            <hr class="project-main-linebr"></hr>
                            <p id="project-main-des">
                                The projects displayed below are a collection of some of my works. These can range from personal projects, 
                                group projects created during hackathons, or assigned school works. Each project below will have a 
                                description, the associated source code, and the coding languages/tech stack used to develop the product. 
                                Some projects will have links to the complete product if it is hosted online. Please note that most of 
                                these projects are a work in progress meaning they are not perfect and improvements can be made. 
                                In contrast to the previous statement, I like to consider my projects as statements of mastery/experience 
                                in a particular programming language(s). Overall, I had lots of fun, gained tons of knowledge, and exceeded many of 
                                my learning outcomes I had in mind while creating these projects!
                                Click the arrow below to check out my latest piece of work and navigate below this to view a general display of all my works.
                            </p>
                            <ScrollLink to="latest" spy={true} smooth={true} duration={320}><FontAwesomeIcon className="scroll-down-icon" icon={faCaretDown}/></ScrollLink>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="project-section">
                        <div className="fade-in-4 width-size" id="latest">
                            <div style={{paddingTop: "3vh"}}>
                                <hr style={{height: "4px", backgroundColor: "black", border: "none", display: "inline-block", marginBottom: "16px", width: "10%"}}></hr>
                                <h1 className="project-section-title">Latest Project</h1>
                                <hr style={{height: "4px", backgroundColor: "black", border: "none", display: "inline-block", marginBottom: "16px", width: "60%"}}></hr>
                            </div>
                            <div style={{marginTop: "4vh"}}>
                                <h2 id="latest-project-title">Introducing <ul>BruinPlanner</ul>!</h2>
                                <div id="latest-project-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}