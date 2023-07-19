import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlbum } from '../../../store/album/album-actions';
import { fetchProject } from '../../../store/project/project-actions';
import styled from 'styled-components';
import Button from '../../Button';
import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Loader from '../../ui/Loader';

const SAlbumFormularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

const SAlbumFormulary = styled.form`
  padding: 1rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '1')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
`;

export const AlbumFormulary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const [projectId, setProjectId] = useState('');

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      title: '',
      description: '',
      projectId: '',
      coverImg: '',
      featured: false,
    },
  });

  const onSubmit = ({ title, description, projectId, coverImg }) => {
    setIsLoading(true);
    console.log(title, description, projectId, coverImg);
    dispatch(createAlbum({ title, description, projectId, coverImg })).then(
      () => {
        setIsLoading(false);
        reset({ title: '', description: '', projectId: '', coverImg: '' });
      }
    );
  };

  const handleProjectChange = (e) => {
    setProjectId(e.target.value);
  };

  return (
    <SAlbumFormularyContainer>
      <SAlbumFormulary isLoading={isLoading} onSubmit={handleSubmit(onSubmit)}>
        <Input
          input={{
            type: 'text',
            placeholder: 'TITLE',
            errors: errors,
            maxLength: 30,
            ...register('title', {
              required: 'This input is required.',
              pattern: {
                value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                message: 'Letters only',
              },
              minLength: {
                value: 1,
                message: 'Must exceed 1 characters',
              },
            }),
          }}
        />
        <Input
          input={{
            type: 'text',
            placeholder: 'DESCRIPTION',
            errors: errors,
            maxLength: 30,
            ...register('description', {
              required: 'This input is required.',
              pattern: {
                value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                message: 'Letters only',
              },
              minLength: {
                value: 5,
                message: 'Must exceed 5 characters',
              },
            }),
          }}
        />
        <Input
          input={{
            comboBox: 'comboBox',
            name: 'projectId',
            errors: errors,
            register: register,
            options: project,
            value: projectId,
            onChange: handleProjectChange,
          }}
        />
        <Input
          input={{
            type: 'file',
            errors: errors,
            maxLength: 1,
            ...register('coverImg', {
              required: 'Cover image is required.',
              required: 'Cover image is required.',
            }),
          }}
        />
        <Button btnText="CREATE" type="submit" config="primary" width="100%" />
      </SAlbumFormulary>
      {isLoading && <Loader />}
    </SAlbumFormularyContainer>
  );
};
