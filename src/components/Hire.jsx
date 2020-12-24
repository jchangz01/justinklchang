import React from 'react'
import '../css/Home.css'

function NavBar (props) {
    return (
        <div id="navbar-container" className="width-size center">
            <nav id="navbar-contents">
                <ul><a href='/about'>About</a></ul>
                <ul><a href='/contact'>Contact</a></ul>
                <ul><a id="logo"></a></ul>
                <ul><a href='/projects'>Projects</a></ul>
                <ul><a href='/hire'>Hire Me</a></ul>
            </nav>
        </div>
    )
}

export default class Hire extends React.Component {
    render () {
        return (
            <div id="content-container">
                <header>
                    <NavBar/>
                </header>
            </div>
        )
    }
}