import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Background from '../Sketches/Background.js'

import Navbar from '../Nav/NavBar.js';
import Home from '../Pages/Home.js'
import Projects from '../Pages/Projects.js';
import About from '../Pages/About.js';
import Creative from '../Pages/Creative.js';
import Contact from '../Pages/Contact.js';

export default function AppRouter () {

  return (
    <Router>
      <Background />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route exact path="/creative" component={Creative} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </Router>
  )
}
