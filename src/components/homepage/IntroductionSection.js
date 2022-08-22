import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Center from '../Center';
import PText from '../PText';

const SIntroductionSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  padding: 7rem 0rem 7rem;
`;

const SH1 = styled.h1`
  font-size: 5rem;
  letter-spacing: 0.09rem;
  ${({ theme }) => theme.gradientGreen.word}
`;

const STitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

const SActions = styled.div`
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function IntroductionSection() {
  return (
    <SIntroductionSection>
      <Center>
        <STitle>
          <SH1>PROFESSIONAL PHOTOGRAPHER</SH1>
          <PText letterSpacing="0.7rem" fontSize="2.3rem" color="primaryGrey">
            turning a moment into an eternity
          </PText>
        </STitle>
        <SActions>
          <Button primary btnText="ABOUT ME" />
        </SActions>
      </Center>
    </SIntroductionSection>
  );
}
