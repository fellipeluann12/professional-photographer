import React from 'react';
import { NavLink } from 'react-router-dom';
import PText from './PText';
import {
  Card,
  CardHeading,
  CardImage,
  CardImageContainer,
  CardTextBody,
  CardYellowStar,
} from './ui/Card';
import { ReactComponent as YellowStar } from '../assets/svgs/yellowstar.svg';

const Thumbnail = ({ item, type }) => {
  let toUrl = '';

  switch (type) {
    case 'project':
      toUrl = `${item.id}`;
      break;
    case 'album':
      toUrl = `${item.id}`;
      break;
    case 'featured':
      toUrl = `projects/${item.id}`;
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
        <CardYellowStar>{item.featured && <YellowStar />}</CardYellowStar>
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
