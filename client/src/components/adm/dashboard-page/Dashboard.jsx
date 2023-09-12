import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../../navbar/Nav';
import { navDataAdm } from '../../../assets/data/nav-data';
import styled from 'styled-components';
import Center from '../../Center';
import { UserAuth } from '../../../AuthContext';
import PText from '../../PText';

const SDashboard = styled.div`
  padding: 7rem 0;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  word-wrap: break-word;

  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    font-size: 4rem;
  }
`;

const STextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    font-size: 4rem;
  }
`;

const Dashboard = () => {
  const { user } = UserAuth();
  const location = useLocation();
  const hideTextContainer = location.pathname !== '/dashboard';

  const userStored = user;
  const userEmail = userStored.email;
  console.log('???', userEmail);

  return (
    <>
      <Nav title="DASHBOARD" navData={navDataAdm} isAdm />
      <SDashboard>
        <Center>
          {hideTextContainer ? null : (
            <STextContainer>
              <SH2>WELCOME BACK,</SH2>
              <PText color="primaryGrey">{userEmail}</PText>
            </STextContainer>
          )}
          <Outlet />
        </Center>
      </SDashboard>
    </>
  );
};

export default Dashboard;
