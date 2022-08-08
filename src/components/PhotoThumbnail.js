import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  height: auto;
  //flex: 0 0 40rem;
  border: 1px solid ${(p) => p.theme.colors.primaryGrey};
  border-radius: 0.5rem;
  box-shadow: ${(p) => p.theme.boxShadows.Card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s ease-out transform;

  &:hover {
    transform: translate(0%, -3%);
  }
`;

const Text = styled.div`
  padding: 2rem;
  flex: 1;
`;

const H3 = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const Span = styled.span`
  font-size: 1.3rem;
`;

const ImgContainer = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default function PhotoThumbnail() {
  const [isHover, setAnimated] = useState(false);

  return (
    <Wrapper>
      <Text>
        <H3>Maio de 2022</H3>
        <Span>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum
        </Span>
      </Text>
      <ImgContainer>
        <Image src="https://www.atrevida.com.br/wp-content/uploads/2021/03/34697-naya-rivera-fica-fora-das-homenagens-do-grammy-2021-e-revolta-fas.jpg" />
      </ImgContainer>
    </Wrapper>
  );
}
