import React from 'react'
import '../css/Contact.css'

export default class Contact extends React.Component {
    render() {
        return (
            <div id="content-container">
                <header>
                    <div id="navbar-container" className="width-size center">
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
                </section>
            </div>
        )
    }
}