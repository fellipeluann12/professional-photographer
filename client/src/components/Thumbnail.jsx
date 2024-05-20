import React from 'react';
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
  background-color: black;
  opacity: 0.9;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 3rem;
`;

const Thumbnail = ({ item, type, onDelete, id, isLoadingSolo, onEdit }) => {
  const handleDelete = () => {
    onDelete(id, item.coverImg || item);
  };

  const handleEdit = () => {
    onEdit(item);
  };

  let toUrl = '';

  switch (type) {
    case 'project':
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

  const renderActions = () => {
    if (isLoadingSolo[id]) {
      return (
        <SAdmModal>
          <Loader circle width="3.28571429rem" height="3.28571429rem" />
        </SAdmModal>
      );
    } else {
      return (
        <SAdmModal>
          <CardEditTool>
            <Edit onClick={handleEdit} />
          </CardEditTool>
          <CardDeleteTool onClick={handleDelete}>
            <Delete />
          </CardDeleteTool>
        </SAdmModal>
      );
    }
  };

  const renderThumbnail = () => {
    switch (type) {
      case 'adm':
        return (
          <Card isAdm>
            {renderActions()}
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
      case 'photo':
        return (
          <CardImageContainer isAdm image={item.original}>
            {renderActions()}
          </CardImageContainer>
        );
      default:
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
              <CardImageContainer
                image={item.coverImg.url}
              ></CardImageContainer>
            </Card>
          </NavLink>
        );
    }
  };

  return renderThumbnail();
};

export default Thumbnail;
