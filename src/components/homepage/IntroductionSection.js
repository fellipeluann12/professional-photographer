import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Center from '../Center';

const Wrapper = styled.section`
  background-color: ${(p) => p.theme.colors.secondaryBlack};
  padding: 7rem 0rem 7rem;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 5rem;
  letter-spacing: 0.09rem;
  ${(p) => p.theme.gradients.words};
`;

const PText = styled.p`
  padding-top: 0.3rem;
  letter-spacing: 0.7rem;
  text-align: center;
  font-size: 2.3rem;
  color: ${(p) => p.theme.colors.primaryGrey};
`;

const Actions = styled.div`
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionsWrapper = styled.div`
  ${(p) => {
    switch (p.$primary) {
      case 'true':
        return css`
          margin-right: 2rem;
          height: auto;
        `;
      default:
        return;
    }
  }}
`;

const NLink = styled(NavLink)`
  font-size: 1.6rem;
  display: inline-block;

  ${(p) => {
    switch (p.$primary) {
      case 'true':
        return css`
          border: 2px solid;
          ${(p) => p.theme.gradients.borders}
          color: white;
          padding: 1rem 2rem;
        `;
      default:
        return css`
          ${(p) => p.theme.gradients.words};
        `;
    }
  }}
`;

export default function IntroductionSection() {
  return (
    <Wrapper>
      <Center>
        <H1>PROFESSIONAL PHOTOGRAPHER</H1>
        <PText>turning a moment into an eternity</PText>
        <Actions>
          <ActionsWrapper $primary="true">
            <NLink to="/" $primary="true">
              About
            </NLink>
          </ActionsWrapper>
          <ActionsWrapper>
            <NLink to="/">Contact me </NLink>
          </ActionsWrapper>
        </Actions>
      </Center>
    </Wrapper>
  );
}
