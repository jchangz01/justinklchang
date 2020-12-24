import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hire from './components/Hire'

//Set up routes
ReactDOM.render(
  <BrowserRouter>
      <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/projects" component={Projects} exact/>
        <Route path="/hire" component={Hire} exact/>
        <Route component={PathNotFound} />
      </Switch>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);

function PathNotFound() {
  return (
    <h3>Error 404 - Page Not Found!</h3>
  )
}