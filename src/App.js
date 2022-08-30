import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Nav from './components/navbar/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import LiveMusic from './pages/LiveMusic';
import Personal from './pages/Personal';
import Projects from './pages/Projects';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SMain = styled.main`
  flex: 1 1;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Nav />
        <SMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/events" element={<Events />} />
            <Route path="/livemusic" element={<LiveMusic />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </SMain>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
