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
  width: 100%;
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
  word-wrap: break-word;
`;

const STextContainer = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  const { user } = UserAuth();
  const location = useLocation();
  const hideTextContainer = location.pathname !== '/dashboard';

  return (
    <>
      <Nav title="DASHBOARD" navData={navDataAdm} isAdm />
      <SDashboard>
        <Center>
          {hideTextContainer ? null : (
            <STextContainer>
              <SH2>WELCOME BACK,</SH2>
              <PText color="primaryGrey" fontSize="6rem">
                {user.email}. ola teste
              </PText>
              <SH2>PLEASE SELECT AN OPTION</SH2>
            </STextContainer>
          )}
          <Outlet />
        </Center>
      </SDashboard>
    </>
  );
};

export default Dashboard;
