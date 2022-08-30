import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import { CardWrapper } from './ui/Card';

const SLi = styled.li`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const SText = styled.div`
  padding: 2rem;
`;

const SH3 = styled.h3`
  font-size: 2.5rem;
  padding-bottom: 1rem;
  text-align: center;
  ${({ theme }) => theme.gradientGreen.word}
`;

const SImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export default function PhotoThumbnail() {
  return (
    <CardWrapper featured>
      <SLi>
        <SText>
          <SH3>Maio de 2022</SH3>
          <PText textAlign="justify" color="primaryGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
            amet felis a dolor sodales consectetur. Nulla tristique neque eu
            lacus blandit, a egestas metus facilisis.
          </PText>
        </SText>
        <SImage src="https://www.atrevida.com.br/wp-content/uploads/2021/03/34697-naya-rivera-fica-fora-das-homenagens-do-grammy-2021-e-revolta-fas.jpg" />
      </SLi>
    </CardWrapper>
  );
}
