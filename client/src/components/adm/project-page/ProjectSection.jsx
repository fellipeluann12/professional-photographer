import React from 'react';
import styled from 'styled-components';
import { ProjectFormulary } from './ProjectFormulary';
import { ProjectManagement } from './ProjectManagement';

const SProjectSection = styled.section`
  padding: 7rem 0;
`;

const SContentContainer = styled.div``;

export const ProjectSection = () => {
  return (
    <SProjectSection>
      <SContentContainer>
        <ProjectFormulary />
        <ProjectManagement />
      </SContentContainer>
    </SProjectSection>
  );
};
