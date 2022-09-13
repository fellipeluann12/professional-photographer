import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../ui/Input';

const SContactFormulary = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: sp;
  height: 500px;
`;

export default function ContactFormulary() {
  const {
    register,
    formState,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: { Name: '', Email: '', Comment: '' },
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ Name: '', Email: '', Comment: '' });
    }
  }, [formState, reset, formState.isSubmitSuccessful]);

  return (
    <SContactFormulary onSubmit={handleSubmit(onSubmit)}>
      <Input
        input={{
          placeholder: 'Name',
          errors: errors,
          maxLength: 40,
          ...register('Name', {
            required: 'This input is required.',
            pattern: {
              value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
              message: 'Letters only',
            },
            minLength: {
              value: 3,
              message: 'Must exceed 3 characters',
            },
          }),
        }}
      />
      <Input
        input={{
          placeholder: 'Email',
          errors: errors,
          maxLength: 60,
          ...register('Email', {
            required: 'This input is required.',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: 'Is it really a e-mail?',
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
          textArea: 'textArea',
          placeholder: 'Comment',
          errors: errors,
          ...register('Comment', {
            required: 'What do you have to say?',
            pattern: {
              value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
              message: 'Letters only',
            },
            minLength: {
              value: 20,
              message: 'Must exceed 20 characters',
            },
          }),
        }}
      />
      <Button btnText="SEND" type="submit" primary width="100%" />
    </SContactFormulary>
  );
}
