import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const SLi = styled.li`
  //flex: 0 0 40rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 0.5rem;
  box-shadow: 20px 20px 7px -10px ${({ theme }) => theme.colors.boxShadowGrey};
  transition: 0.4s ease-out transform;

  &:hover {
    transform: translate(0%, -3%);
  }

  @media ${({ theme }) => theme.breakpoints.lgMaxW} {
    flex: 0 1 70rem;
  }
`;

const SText = styled.div`
  padding: 2rem;
  flex: 1;
`;

const SH3 = styled.h3`
  font-size: 2.5rem;
  text-align: center;
`;

const SImgContainer = styled.div`
  flex: 2;
`;

const SImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function PhotoThumbnail() {
  return (
    <SLi>
      <SText>
        <SH3>Maio de 2022</SH3>
        <PText textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet felis a dolor sodales consectetur. Nulla tristique neque eu lacus
          blandit, a egestas metus facilisis.
        </PText>
      </SText>
      <SImgContainer>
        <SImage src="https://www.atrevida.com.br/wp-content/uploads/2021/03/34697-naya-rivera-fica-fora-das-homenagens-do-grammy-2021-e-revolta-fas.jpg" />
      </SImgContainer>
    </SLi>
  );
}
