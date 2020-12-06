import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function PathNotFound() {
  return (
    <h3>Error 404 - Page Not Found!</h3>
  )
}

//Set up routes
ReactDOM.render(
  <BrowserRouter>
      <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route component={PathNotFound} />
      </Switch>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);
