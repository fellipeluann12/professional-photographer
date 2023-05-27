import React from 'react';
import { NavLink } from 'react-router-dom';
import PText from './PText';
import {
  Card,
  CardHeading,
  CardImage,
  CardImageContainer,
  CardTextBody,
} from './ui/Card';

const Thumbnail = ({ item, type }) => {
  let toUrl = '';

  switch (type) {
    case 'project':
      toUrl = `${item.id}/albums`;
      break;
    case 'album':
      toUrl = `${item.id}/photos`;
      break;
    default:
      toUrl = '/';
      break;
  }

  if (type === 'photo') {
    return <CardImage src={item.url} />;
  }

  return (
    <NavLink to={toUrl}>
      <Card featured>
        <CardTextBody>
          <CardHeading>{item.title}</CardHeading>
          <PText color="primaryGrey" textAlign="justify">
            {item.description}
          </PText>
        </CardTextBody>
        <CardImageContainer image={item.coverImg}></CardImageContainer>
      </Card>
    </NavLink>
  );
};

export default Thumbnail;
