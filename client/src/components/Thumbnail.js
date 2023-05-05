import React from 'react';
import { NavLink } from 'react-router-dom';
import PText from './PText';
import { Card, CardHeading, CardImage, CardTextBody } from './ui/Card';

export default function Thumbnail({ item }) {
  console.log('item ', item);
  const { id, title } = item;

  return (
    <NavLink to={`/projects/${item.id}/albums`}>
      <Card featured>
        <PText color="primaryGrey">{item.date}</PText>
        <CardTextBody>
          <CardHeading>{item.title}</CardHeading>
          <PText color="primaryGrey" textAlign="justify">
            {item.description}
          </PText>
        </CardTextBody>
        <CardImage src={item.image} />
      </Card>
    </NavLink>
  );
}
