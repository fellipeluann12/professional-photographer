import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { AuthContextProvider } from '../AuthContext';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/adm/dashboard-page/ProtectedRoute';
import Nav from '../components/navbar/Nav';
import { Album as AlbumAdm } from './adm/Album';
import { Photos } from './adm/Photos';
import Login from './adm/Login';
import { Project as ProjectAdm } from './adm/Project';
import About from './main-app/About';
import Album from './main-app/Album';
import Contact from './main-app/Contact';
import { Error } from './main-app/Error';
import Home from './main-app/Home';
import Photo from './main-app/Photo';
import Project from './main-app/Project';
import { Root } from './adm/Root';
import { navDataMain } from '../assets/data/nav-data';

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
      <Nav title="FELLIPE" navData={navDataMain} isMain />
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
            <Route path="login" element={<Login />} />
            <Route
              path="/dashboard/"
              element={
                <ProtectedRoute>
                  <Root />
                </ProtectedRoute>
              }
            >
              <Route path="projects" element={<ProjectAdm />} />
              <Route path="albums" element={<AlbumAdm />} />
              <Route path="photos" element={<Photos />} />
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
