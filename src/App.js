import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Hire from './pages/Hire';
import NavBar from './components/Navbar';
import './App.css';

import { dlModeContext } from './contexts/dlMode';

export default function App () {
    const [dlMode, setDLMode] = useState(true);
    const url = window.location.href;
    const pathname = url.split('/').splice(-1)[0];

    return (
        <main>
            <dlModeContext.Provider value={[dlMode, setDLMode]}>
                <div id="content-container" className={dlMode ? "bg-black" : "bg-white"}>
                    <header className="fade-in-6" style={pathname === 'resume' ? {display: 'none'} : null}>
                        <NavBar dlMode={dlMode}/>
                    </header>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} exact/>
                        <Route path="/contact" component={Contact} exact/>
                        <Route path="/projects" component={Projects} exact/>
                        <Route path="/hire" component={Hire} exact/>
                        <Route component={PathNotFound} />
                    </Switch>
                </div>
            </dlModeContext.Provider>
        </main>
    )
}

function PathNotFound() {
    return (
      <h3>Error 404 - Page Not Found!</h3>
    )
  }