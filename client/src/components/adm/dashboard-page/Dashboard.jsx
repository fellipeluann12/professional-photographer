import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Nav from '../../navbar/Nav';
import { navDataAdm } from '../../../assets/data/nav-data';
import styled from 'styled-components';
import Center from '../../Center';
import { UserAuth } from '../../../AuthContext';
import PText from '../../PText';

const SDashboard = styled.div`
  padding: 7rem 0;
  word-wrap: break-word;
  word-break: break-all;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

const STextContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
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
                {user.email}
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
