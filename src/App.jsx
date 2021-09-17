import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Hire from './pages/Hire'
import Resume from './pages/Resume'
import './App.css'

import { dlModeContext } from './contexts/dlMode';

export default function App () {
    const [dlMode, setDLMode] = useState(true)
    return (
        <main>
            <dlModeContext.Provider value={[dlMode, setDLMode]}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} exact/>
                    <Route path="/contact" component={Contact} exact/>
                    <Route path="/projects" component={Projects} exact/>
                    <Route path="/hire" component={Hire} exact/>
                    <Route path="/resume" component={Resume} exact/>
                    <Route component={PathNotFound} />
                </Switch>
            </dlModeContext.Provider>
        </main>
    )
}

function PathNotFound() {
    return (
      <h3>Error 404 - Page Not Found!</h3>
    )
  }