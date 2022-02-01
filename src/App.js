import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import LiveMusic from './pages/LiveMusic';
import Personal from './pages/Personal';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/livemusic" element={<LiveMusic />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
