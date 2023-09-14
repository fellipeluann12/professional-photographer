import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../Profile';
import DropDown from './DropDown';

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

const SDropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 6.1rem;
  background: ${(p) => p.theme.colors.secondaryBlack};
  width: 100%;
  border-radius: 0.5rem;
  z-index: 20;
  padding: 0.75rem;
`;

const SDropDownUl = styled.ul``;

export default function NavLinks({ navData }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the dropdownRef exists and if the click occurred outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside the dropdown, so close it
        setIsDropdownOpen(false);
      }
    }

    // Add a click event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, setIsDropdownOpen]);

  return (
    <SUl>
      {navData.map((item, index) => {
        if (item.title === 'Profile') {
          return (
            <SLi
              ref={dropdownRef}
              key={index}
              onClick={toggleDropdown}
              style={{ position: 'relative' }}
            >
              <Profile />
              {isDropdownOpen && (
                <SDropDown>
                  <SDropDownUl>
                    <DropDown />
                  </SDropDownUl>
                </SDropDown>
              )}
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
