import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Nav from '../components/navbar/Nav';
import Home from './main-app/Home';
import Project from './main-app/Project';
import About from './main-app/About';
import Contact from './main-app/Contact';
import Login from './adm/Login';
import { AuthContextProvider } from '../AuthContext';

const SApp = styled.div`
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
    <SApp>
      <SMain>
        <AuthContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Outlet />
        </AuthContextProvider>
      </SMain>
      <Footer />
    </SApp>
  );
}

export default App;
