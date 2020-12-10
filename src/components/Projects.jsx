import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
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
            <div id="content-container">
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
                            <FontAwesomeIcon className="scroll-down-icon" icon={faCaretDown}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}