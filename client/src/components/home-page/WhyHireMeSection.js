import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Center from '../Center';
import PText from '../PText';

const SWhyHireMeSection = styled.section`
  padding: 4rem 0rem 4rem;
`;

const STitle = styled.div`
  margin: 0 auto;
  max-width: 37rem;
`;

const SActions = styled.div`
  padding-top: 4rem;
  text-align: center;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  ${({ theme }) => theme.gradientGreen.word};
`;

export default function WhyHireMeSection() {
  return (
    <SWhyHireMeSection>
      <Center>
        <STitle>
          <PText fontSize="1.5rem" color="primaryGrey">
            let me convince you
          </PText>
          <SH2>WHY HIRE ME</SH2>
        </STitle>
        <PText color="primaryGrey" fontSize="2rem" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet felis a dolor sodales consectetur. Nulla tristique neque eu lacus
          blandit, a egestas metus facilisis. Nam malesuada tellus a dolor
          tincidunt. Nulla tristique neque eu lacus blandit, a egestas metus
          facilisis. Nam malesuada tellus a dolor tincidunt auctor. Nulla
          tristique neque eu lacus blandit, a egestas metus facilisis. Nam
          malesuada tellus a dolor tincidunt auctor. Nulla tristique neque eu
          lacus blandit, a egestas metus facilisis. Nam malesuada tellus a dolor
          tincidunt auctor.
        </PText>
        <SActions>
          <Button nLink="personal" btnText="SEE SOME OF MY PERSONAL WORK" />
        </SActions>
      </Center>
    </SWhyHireMeSection>
  );
}
