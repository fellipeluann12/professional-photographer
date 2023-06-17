import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProject } from '../../../store/project/project-actions';
import Thumbnail from '../../Thumbnail';
import Loader from '../../ui/Loader';

const SProjectManagementContainer = styled.div``;

const SFlexContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ProjectManagement = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const project = useSelector((state) => state.project);

  useEffect(() => {
    setLoading(true);

    dispatch(fetchProject())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <SProjectManagementContainer>
      <SFlexContainer>
        {loading ? (
          <p>
            <Loader width="10rem" height="10rem" />
          </p>
        ) : (
          project.map((project) => (
            <Thumbnail item={project} type="adm" key={project.id} />
          ))
        )}
      </SFlexContainer>
    </SProjectManagementContainer>
  );
};
