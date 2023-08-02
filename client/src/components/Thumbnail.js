import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PText from './PText';
import {
  Card,
  CardDeleteTool,
  CardEditTool,
  CardHeading,
  CardImage,
  CardImageContainer,
  CardTextBody,
  CardYellowStar,
} from './ui/Card';
import { ReactComponent as YellowStar } from '../assets/svgs/yellowstar.svg';
import { ReactComponent as Edit } from '../assets/svgs/edit.svg';
import { ReactComponent as Delete } from '../assets/svgs/delete.svg';
import styled from 'styled-components';
import Loader from './ui/Loader';

const SAdmModal = styled.div`
  position: absolute;
  border-radius: 1rem;
  background-color: black;
  opacity: 0.9;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 3rem;
`;

const Thumbnail = ({ item, type, onDelete, id, isLoadingSolo, onEdit }) => {
  const [hovered, setHovered] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(item);
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

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
      toUrl = null;
      break;
  }

  if (type === 'adm') {
    return (
      <Card isAdm onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        {isLoadingSolo[id] ? (
          <SAdmModal>
            <Loader />
          </SAdmModal>
        ) : (
          hovered && (
            <SAdmModal>
              <CardEditTool>
                <Edit onClick={handleEdit} />
              </CardEditTool>
              <CardDeleteTool onClick={handleDelete}>
                <Delete />
              </CardDeleteTool>
            </SAdmModal>
          )
        )}

        <CardYellowStar>{item.featured && <YellowStar />}</CardYellowStar>
        <CardTextBody>
          <CardHeading>{item.title}</CardHeading>
          <PText color="primaryGrey" textAlign="justify">
            {item.description}
          </PText>
        </CardTextBody>
        <CardImageContainer image={item.coverImg}></CardImageContainer>
        {console.log('coverImg chega aqui? thumbnail:', item.coverImg)}
      </Card>
    );
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
