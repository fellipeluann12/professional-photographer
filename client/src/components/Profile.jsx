import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import { UserAuth } from '../AuthContext';
import userImg from '../assets/imgs/user.png';
import { ReactComponent as Caret } from '../assets/svgs/caret.svg';

const SProfileContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SProfileImage = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 50%;
  margin-right: 10px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export default function Profile() {
  const { user } = UserAuth();

  const userStored = user;
  const userEmail = userStored.email;

  return (
    <SProfileContainer style={{ cursor: 'pointer' }}>
      <SProfileImage image={userImg}></SProfileImage>
      <PText color="primaryGrey" fontSize="1.5rem" maxWidth="10rem">
        {userEmail}
      </PText>
      <Caret />
    </SProfileContainer>
  );
}
