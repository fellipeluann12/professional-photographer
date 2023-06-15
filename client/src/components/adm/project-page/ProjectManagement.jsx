import React from 'react';
import styled from 'styled-components';

const SProjectManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

export const ProjectManagement = () => {
  return (
    <SProjectManagementContainer>
      <SH2>MANAGEMENT</SH2>
    </SProjectManagementContainer>
  );
};
