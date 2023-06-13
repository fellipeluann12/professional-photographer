import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
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
import { Error } from './main-app/Error';
import Album from './main-app/Album';
import { Album as AlbumADM } from './adm/Album';
import Projeto from './adm/Projeto';
import Fotos from './adm/Fotos';
import { Root } from './adm/Root';
import Photo from './main-app/Photo';
import ProtectedRoute from '../components/adm/dashboard-page/ProtectedRoute';

const SApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SMain = styled.main`
  flex: 1 1;
  /* background-color: ${({ theme }) => theme.colors.primaryBlack}; */
`;

function App() {
  return (
    <SApp>
      <Nav />
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
          <Routes>
            <Route path="*" element={<Navigate to="/error" />} />
            <Route path="error" element={<Error />} />
            <Route path="/login" element={<Login key="error" />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Root />
                </ProtectedRoute>
              }
            >
              <Route path="album" element={<AlbumADM />} />
              <Route path="projeto" element={<Projeto />} />
              <Route path="fotos" element={<Fotos />} />
            </Route>
            <Route element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Project />} />
              <Route path="projects/:projectIdRef/" element={<Album />} />
              <Route
                path="projects/:projectIdRef/:albumIdRef"
                element={<Photo />}
              />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </SMain>
      <Footer />
    </SApp>
  );
}

export default App;
