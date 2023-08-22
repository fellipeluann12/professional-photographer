import React, { useState } from 'react';
import Input from '../../ui/Input';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProject } from '../../../store/project/project-actions';
import Button from '../../Button';
import Loader from '../../ui/Loader';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';

const SProjectFormularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 5rem;
  gap: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

const SProjectFormulary = styled.form`
  max-width: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '1')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
`;

export const ProjectFormulary = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

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
      coverImg: '',
      featured: false,
    },
  });

  const onSubmit = ({ title, description, coverImg, featured }) => {
    setIsLoading(true);
    const coverImgFile = coverImg[0];
    console.log('formulary sub', coverImgFile);

    dispatch(
      createProject({ title, description, coverImg: coverImgFile, featured })
    )
      .then(() => {
        setIsLoading(false);
        reset({ title: '', description: '', coverImg: '', featured: false });
        notifySuccess('Project created.');
      })
      .catch((error) => {
        setIsLoading(false);
        notifyError(error);
      });
  };

  return (
    <SProjectFormularyContainer>
      <SProjectFormulary
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
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
            type: 'file',
            errors: errors,
            maxLength: 1,
            ...register('coverImg', {
              required: 'Cover image is required.',
            }),
          }}
        />
        <Input
          input={{
            type: 'checkbox',
            errors: errors,
            maxLength: 30,
            ...register('featured', {
              required: false,
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
        <Button btnText="CREATE" type="submit" config="primary" width="100%" />
      </SProjectFormulary>
      {isLoading && <Loader />}
    </SProjectFormularyContainer>
  );
};
