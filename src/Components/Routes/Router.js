import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from '../Sketches/Background.js'

import Home from '../Pages/Home.js'
import Work from '../Pages/Work.js';
import About from '../Pages/About.js';
import Creative from '../Pages/Creative.js';

export default function AppRouter () {
  return (
    <Router>
      <Background />
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/about" element={About()} />
            <Route path="/work" element={Work()} />
            <Route path="/creative" element={Creative()} />
          </Routes>
    </Router>
  )
}
