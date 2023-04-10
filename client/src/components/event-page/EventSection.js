import React from 'react';
import styled from 'styled-components';
import Center from '../Center';

const SEventsSection = styled.div`
  padding: 7rem 0;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

const SGridContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export default function EventsSection() {
  return (
    <SEventsSection>
      <Center>
        <SH2>EVENTS</SH2>
        <SGridContainer></SGridContainer>
      </Center>
    </SEventsSection>
  );
}
