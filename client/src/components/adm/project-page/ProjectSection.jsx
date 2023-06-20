import React, { useState } from 'react';
import styled from 'styled-components';
import { ProjectFormulary } from './ProjectFormulary';
import { ProjectManagement } from './ProjectManagement';
import PText from '../../PText';

const SProjectSection = styled.section``;

const STabContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  gap: 1rem;
`;

const SContentContainer = styled.div``;

const STabButton = styled.button`
  border: none;
  border-radius: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.primaryGrey};
  background-color: transparent;
  font-size: 16px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transform: scale(0.9);
  transition: transform 0.1s ease-in-out, border 0.3s ease-in-out;

  &.active {
    border: 0.065rem solid ${({ theme }) => theme.colors.primaryGreen};
    transform: scale(1.1);
  }
`;

export const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <SProjectSection>
      <STabContainer>
        <STabButton
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? 'active' : ''}
        >
          <PText color="primaryGrey" fontSize="3rem">
            Create
          </PText>
        </STabButton>
        <STabButton
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? 'active' : ''}
        >
          <PText color="primaryGrey" fontSize="3rem">
            Manage
          </PText>
        </STabButton>
      </STabContainer>
      <SContentContainer>
        {activeTab === 1 && <ProjectFormulary />}
        {activeTab === 2 && <ProjectManagement />}
      </SContentContainer>
    </SProjectSection>
  );
};
