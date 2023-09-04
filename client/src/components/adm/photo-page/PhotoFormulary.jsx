import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../../store/project/project-actions';
import {
  addAlbumPhotos,
  fetchAlbumsByProjectId,
} from '../../../store/album/album-actions';
import styled from 'styled-components';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import Loader from '../../ui/Loader';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';

const SPhotoFormularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

const SPhotoFormulary = styled.form`
  max-width: 50rem;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '1')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
`;

export const PhotoFormulary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [photos, setPhotos] = useState([]);

  const project = useSelector((state) => state.project);
  const album = useSelector((state) => state.album.albums);

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
      projectId: '',
      albumId: '',
      photosToAdd: '',
    },
  });

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const handleProjectChange = (e) => {
    const selectedProjectValue = e.target.value;
    console.log('selectedProjectValue', selectedProjectValue);
    setProjectId(selectedProjectValue);
    setAlbumId('');
    setValue('projectId', selectedProjectValue, { shouldValidate: true });
    dispatch(fetchAlbumsByProjectId(selectedProjectValue));
  };

  const handleAlbumChange = (e) => {
    const selectedAlbumValue = e.target.value;
    setAlbumId(selectedAlbumValue);
    setValue('albumId', selectedAlbumValue, { shouldValidate: true });
  };

  const handleFileSelect = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newPhoto = e.target.files[i];
      setPhotos((prevState) => [...prevState, newPhoto]);
    }
  };

  const onSubmit = ({ projectId, albumId }) => {
    setIsLoading(true);
    dispatch(addAlbumPhotos({ projectId, albumId }, photos))
      .then(() => {
        reset({
          projectId: '',
          albumId: '',
          photosToAdd: '',
        });
        notifySuccess('Photos added.');
        setProjectId('');
        setAlbumId('');
        setIsLoading(false);
      })
      .catch((error) => {
        notifyError(error);
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <SPhotoFormularyContainer>
      <SPhotoFormulary isLoading={isLoading} onSubmit={handleSubmit(onSubmit)}>
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
        {projectId && (
          <Input
            input={{
              comboBox: 'comboBox',
              name: 'albumId',
              placeHolder: 'ALBUM SELECT',
              errors: errors,
              register: register,
              options: album,
              value: albumId,
              onChange: handleAlbumChange,
            }}
          />
        )}
        {projectId !== '' && albumId !== '' && (
          <Input
            input={{
              type: 'file',
              errors: errors,
              maxLength: 1,
              multiple: true,
              ...register('photosToAdd', {
                required: 'At least 1 photo is required.',
                onChange: handleFileSelect,
              }),
            }}
          />
        )}
        <Button btnText="UPLOAD" type="submit" config="primary" width="100%" />
      </SPhotoFormulary>
      {isLoading && (
        <Loader circle width="3.28571429rem" height="3.28571429rem" />
      )}
    </SPhotoFormularyContainer>
  );
};
