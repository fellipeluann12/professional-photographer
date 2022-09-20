import React from 'react';
import PText from './PText';
import { Card, CardHeading, CardImage, CardTextBody } from './ui/Card';

export default function PhotoThumbnail({ item }) {
  return (
    <a href="/`${userId}`">
      <Card featured>
        <PText color="primaryGrey">{item.date}</PText>
        <CardTextBody>
          <CardHeading>{item.name}</CardHeading>
          <PText color="primaryGrey" textAlign="justify">
            {item.description}
          </PText>
        </CardTextBody>
        <CardImage src="https://www.atrevida.com.br/wp-content/uploads/2021/03/34697-naya-rivera-fica-fora-das-homenagens-do-grammy-2021-e-revolta-fas.jpg" />
      </Card>
    </a>
  );
}
