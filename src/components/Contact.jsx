import React from 'react'
import '../css/Contact.css'

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
                    <NavBar />
                </header>
                <section>
                </section>
            </div>
        )
    }
}