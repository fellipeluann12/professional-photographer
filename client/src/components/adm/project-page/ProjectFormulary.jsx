import React from 'react';
import Input from '../../ui/Input';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProject } from '../../../store/project/project-actions';
import Button from '../../Button';

const SProjectFormularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

const SProjectFormulary = styled.form`
  padding: 1rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : '')};
`;

export const ProjectFormulary = () => {
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
      isFeatured: false,
    },
  });

  const dispatch = useDispatch();

  const onSubmit = ({ title, description, coverImg, isFeatured }) => {
    const coverImgFile = coverImg[0];

    dispatch(
      createProject({ title, description, coverImg: coverImgFile, isFeatured })
    );
  };

  return (
    <SProjectFormularyContainer>
      <SH2>CREATE PROJECT</SH2>
      <SProjectFormulary onSubmit={handleSubmit(onSubmit)}>
        <Input
          input={{
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
            ...register('isFeatured', {
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
        <Button btnText="CREATE" type="submit" primary width="100%" />
      </SProjectFormulary>
    </SProjectFormularyContainer>
  );
};
