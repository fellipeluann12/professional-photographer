import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navData } from '../../assets/data/nav-data';

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
    margin-right: 3rem;
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
