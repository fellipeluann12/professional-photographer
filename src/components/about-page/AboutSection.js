import React from 'react';
import Center from '../Center';
import styled from 'styled-components';
import PText from '../PText';
import { CardHeading, CardTextBody, CardWrapper } from '../ui/Card';

const SAboutSection = styled.div`
  padding: 7rem 0rem;
`;

const SGridContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: auto 260px;

  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    display: block;
  }
`;

const SLeftSection = styled.div``;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

const RightSection = styled.div`
  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    margin-top: 2rem;
  }
`;

const SImg = styled.img`
  max-width: 100%;
`;

export default function AboutSection() {
  return (
    <SAboutSection>
      <Center>
        <SH2>ABOUT ME</SH2>
        <SGridContainer>
          <SLeftSection>
            <PText color="primaryGrey" fontSize="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet felis a dolor sodales consectetur. Nulla tristique neque
              eu lacus blandit, a egestas metus facilisis. Nam malesuada tellus
              a dolor tincidunt. Nulla tristique neque eu lacus blandit, a
              egestas metus facilisis. Nam malesuada tellus a dolor tincidunt
              auctor. Nulla tristique neque eu lacus blandit, a egestas metus
              facilisis. Nam malesuada tellus a dolor tincidunt auctor. Nulla
              tristique neque eu lacus blandit, a egestas metus facilisis. Nam
              malesuada tellus a dolor tincidunt auctor.
            </PText>
          </SLeftSection>
          <RightSection>
            <CardWrapper>
              <CardTextBody>
                <CardHeading>Hi ;]</CardHeading>
              </CardTextBody>
              <SImg
                src="https://images.pexels.com/photos/1962567/pexels-photo-1962567.jpeg"
                alt="lol"
              />
            </CardWrapper>
          </RightSection>
        </SGridContainer>
      </Center>
    </SAboutSection>
  );
}
