import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { uiActions } from '../store/ui-slice';

const Li = styled.li`
  display: flex;
`;

const NLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.primaryGrey};
  font-size: 2.3rem;
  width: 100%;
  padding: 0.5rem;
  transition: all 0.2s linear;

  &:hover {
    margin-left: 1rem;
    border-right: 1rem solid #a1ed00;
  }
`;

const NLinkSub = styled(NavLink)`
  font-size: 1.5rem;
  margin-left: 2.3rem;
  padding: 0.3rem;
  color: ${(p) => p.theme.colors.primaryGrey};
`;

export default function NavMobileLinks({ item }) {
  const dispatch = useDispatch();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const toggleMobileNavBarHandler = () => {
    dispatch(uiActions.showNavBarMobile());
    dispatch(uiActions.toggleBurger());
  };

  return (
    <>
      <Li>
        <NLink
          to={item.path}
          onClick={item.dropDown ? showSubnav : toggleMobileNavBarHandler}
        >
          {item.title}
        </NLink>
      </Li>
      {subnav &&
        item.dropDown.map((item, index) => (
          <Li key={index}>
            <NLinkSub to={item.path} onClick={toggleMobileNavBarHandler}>
              - {item.title}
            </NLinkSub>
          </Li>
        ))}
    </>
  );
}
