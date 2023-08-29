import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlbum } from '../../../store/album/album-actions';
import { fetchProject } from '../../../store/project/project-actions';
import styled from 'styled-components';
import Button from '../../Button';
import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Loader from '../../ui/Loader';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';

const SAlbumFormularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

const SAlbumFormulary = styled.form`
  max-width: 50rem;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '1')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
`;

export const AlbumFormulary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const project = useSelector((state) => state.project);
  const [projectId, setProjectId] = useState('');

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
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

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const onSubmit = ({ title, description, projectId, coverImg }) => {
    setIsLoading(true);
    const coverImgFile = coverImg[0];
    console.log(title, description, projectId, coverImg);

    dispatch(
      createAlbum({ title, description, projectId, coverImg: coverImgFile })
    )
      .then(() => {
        setIsLoading(false);
        reset({
          title: '',
          description: '',
          projectId: '',
          coverImg: '',
          featured: 'false',
        });
        setProjectId('');
        notifySuccess('Album created.');
      })
      .catch((error) => {
        setProjectId('');
        setIsLoading(false);
        notifyError(error);
      });
  };

  const handleProjectChange = (e) => {
    const selectedProjectValue = e.target.value;
    setProjectId(selectedProjectValue);
    setValue('projectId', selectedProjectValue, { shouldValidate: true });
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
            placeHolder: 'PROJECT SELECT',
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
            }),
          }}
        />
        <Button btnText="CREATE" type="submit" config="primary" width="100%" />
      </SAlbumFormulary>
      {isLoading && <Loader />}
    </SAlbumFormularyContainer>
  );
};
