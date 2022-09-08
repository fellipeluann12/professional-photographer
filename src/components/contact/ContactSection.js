import React from 'react';
import styled from 'styled-components';
import Center from '../Center';
import PText from '../PText';
import ContactFormulary from './ContactFormulary';

const SContactSection = styled.div`
  padding: 7rem 0rem;
`;

const SGridContainer = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: auto 40rem;
`;

const SLeftSection = styled.div``;

const SRightSection = styled.div`
  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    margin-top: 2rem;
  }
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

export default function ContactSection() {
  return (
    <SContactSection>
      <Center>
        <SGridContainer>
          <SLeftSection>
            <SH2>CONTACT</SH2>
            <PText color="primaryGrey" fontSize="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet felis a dolor sodales consectetur.
            </PText>
          </SLeftSection>
          <SRightSection>
            <ContactFormulary />
          </SRightSection>
        </SGridContainer>
      </Center>
    </SContactSection>
  );
}
