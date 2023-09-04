import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PText from './PText';
import {
  Card,
  CardDeleteTool,
  CardEditTool,
  CardHeading,
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

const Thumbnail = ({
  item,
  type,
  onDelete,
  id,
  isLoadingSolo,
  onEdit,
  coverImg,
}) => {
  const [hovered, setHovered] = useState(false);
  console.log('item inside ', item);

  const handleDelete = () => {
    onDelete(id, item.coverImg || item);
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
            <Loader circle width="3.28571429rem" height="3.28571429rem" />
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
        <CardImageContainer image={item.coverImg.url}></CardImageContainer>
      </Card>
    );
  }

  if (type === 'photo') {
    return (
      <CardImageContainer
        isAdm
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        image={item.original}
      >
        {isLoadingSolo[id] ? (
          <SAdmModal>
            <Loader circle width="3.28571429rem" height="3.28571429rem" />
          </SAdmModal>
        ) : (
          hovered && (
            <SAdmModal>
              <CardDeleteTool onClick={handleDelete}>
                <Delete />
              </CardDeleteTool>
            </SAdmModal>
          )
        )}
      </CardImageContainer>
    );
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
        <CardImageContainer image={item.coverImg.url}></CardImageContainer>
      </Card>
    </NavLink>
  );
};

export default Thumbnail;
