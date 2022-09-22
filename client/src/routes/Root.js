import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Nav from '../components/navbar/Nav';

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
        <Outlet />
      </SMain>
      <Footer />
    </SApp>
  );
}

export default App;
