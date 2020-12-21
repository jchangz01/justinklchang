import { Link as ScrollLink } from 'react-scroll';
import ImageGallery from 'react-image-gallery';
import React from 'react'
import '../css/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import projectInfo from './project_info.json'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

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

class LatestProject extends React.Component {
    render () {
        return (
            <div id="latest-project-content">
                <div style={{flexBasis: "100%"}}>
                    <h2 id="latest-project-title">Introducing <span style={{color: "#2774AE"}}>BruinPlanner!</span></h2>
                    <h3 id="latest-project-stack">Tech Stack: MongoDB, ExpressJS, NodeJS, ReactJS</h3>
                    <div id="latest-project-des">
                        <div className="latest-project-left">
                            <ImageGallery items={images}/>
                        </div>
                        <div className="latest-project-right">
                            <p>
                            Committing to a four year university may find seem like a major accomplishment and stress reliever 
                            as you no longer have to deal with high school; however, the reality is that the real pressure is only 
                            getting started. At a prestigious college such as the University of California, Los-Angeles, not only do 
                            students have to compete and strive for good grades, they have to worry about clubs, and more importantly, 
                            the classes they need to take to graduate. As a student myself, I understand that coursework 
                            itself is taxing enough; I don’t want to have to constantly meet up with counselors, 
                            maintain an updated Google doc, and surf through the UCLA coursework website to formulate a 
                            four-year plan that will inevitably change throughout my years at college. 
                            </p>
                            <br></br>
                            <p>
                            BruinPlanner is an interactive application for UCLA students to help design a 4-year plan. UCLA has always 
                            struggled with presenting course requirements and requisites due to them having too many websites with 
                            unnecessary information such as outdated 4-year plans. Instead, if students had an interactive 4-year planner, 
                            where they could select their major and visually see what the required classes and their respective 
                            prereqs are, it would save them a lot of time and pain. This website allows students to create an account 
                            that would give them access to 4-year planners based on a major in which they could organize their classes 
                            based on requirements.
                            </p>
                            <br></br>
                            <p>
                            BruinPlanner is my first ever full stack web application! It was created using the MERN stack and extracts UCLA course
                            data from the UCLA DevX Api (<a target="_blank" rel="noreferrer" href="http://api.ucladevx.com/" style={{color: "blue"}}>http://api.ucladevx.com/</a>). In addition, the website utilizes many open-source npm packages/libraries 
                            such as passport, bcrypt, and react-dnd. A majority of this project was created individually receiving only very minor assistance 
                            from my UCLA Computer Science Peers. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ProjectsGrid extends React.Component {
    render () {
        /* create grid entries for each project */
        var gridRows = [];
        var rowEntry = [];
        var rowIndex = 0;
        for (var i = 0; i < this.props.data.length; i++)
        {
            if ( i % 3 === 0 && i != 0 ) {
                gridRows[rowIndex] = rowEntry;
                rowIndex++;
                rowEntry = [];
            }
            rowEntry[i % 3] = (
                <div className="all-projects-entry">
                    <img src={projectInfo[i]} style={{width: "100%", height: "100%"}}></img>
                </div>
            )
        }
        if (rowEntry.length > 0) {
            gridRows[rowIndex] = rowEntry;
        }
        
        return (
            <div id="all-projects-grid"> 
                { gridRows.map ( row => {
                    <div className="all-projects-row">
                        {row}
                    </div>
                })}
                <div className="all-projects-row">
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/seed/picsum/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/1/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/1015/1000/600/" style={{width: "100%", height: "100%"}}></img>
                    </div>
                </div>
                <div className="all-projects-row">
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/27/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/20/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/32/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                </div>
                <div className="all-projects-row">
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/seed/picsum/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/10/300/200" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className="all-projects-entry">
                        <img src="https://picsum.photos/id/1015/1000/600/" style={{width: "100%", height: "100%"}}></img>
                    </div>
                </div>
            </div>
        )
    }
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
                            <hr className="project-main-linebr"></hr>
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
                            <LatestProject />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="project-section" style={{backgroundColor: "black"}}>
                        <div id="all-projects-content" className="fade-in-4 width-size">
                            <div style={{flexBasis: "100%", textAlign: 'center'}}>
                                <h1 id="all-projects-title">Project Gallery</h1>
                                <h2 id="all-projects-subtitle">Hover over each thumbnail to learn more!</h2>
                                <hr style={{width: "640px", margin: "24px auto"}}></hr>
                                <ProjectsGrid data="project_info"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}