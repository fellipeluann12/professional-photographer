import React from 'react';
import LoginSection from '../../components/login-page/LoginSection';
import styled from 'styled-components';

const SLoginSectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-image: url('https://r4.wallpaperflare.com/wallpaper/735/578/409/minimalism-airplane-colorful-red-wallpaper-3b562cfd4321cf699594fbe90dac5ce0.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

const Login = () => {
  return (
    <SLoginSectionContainer>
      <LoginSection />
    </SLoginSectionContainer>
  );
};

export default Login;
