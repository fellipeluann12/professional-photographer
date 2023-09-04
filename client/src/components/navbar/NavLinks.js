import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../Profile';

const SUl = styled.ul`
  display: flex;

  svg {
    fill: ${({ theme }) => theme.colors.primaryGrey};
    width: 2rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lgMaxW} {
    display: none;
  }

  @media (hover: none) {
    a:visited,
    a:active,
    a:link {
      box-shadow: none;
    }
  }
`;

const SLi = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    &::after {
      content: ' | ';
      padding: 0 10px;
      color: ${({ theme }) => theme.colors.secondaryGrey};
      line-height: 1.5;
    }
  }
`;

const SNLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 1rem;
  font-size: 2.5rem;
  padding: 0.7rem;

  &:hover {
    box-shadow: 0px 15px 19px -15px #a1ed00;
  }

  &.active {
    color: ${({ to }) => (to === '#' ? 'white' : 'white')};
  }
`;

export default function NavLinks({ navData }) {
  return (
    <SUl>
      {navData.map((item, index) => {
        if (item.title === 'Profile') {
          return (
            <SLi key={index} style={{ cursor: 'pointer' }}>
              <Profile />
            </SLi>
          );
        }

        return (
          <SLi key={index}>
            <SNLink to={item.path} end>
              {item.title}
            </SNLink>
          </SLi>
        );
      })}
    </SUl>
  );
}
