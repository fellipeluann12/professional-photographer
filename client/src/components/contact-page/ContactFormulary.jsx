import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { notifyError, notifySuccess } from '../../assets/functionsHelper';
import Button from '../Button';
import Input from '../ui/Input';
import Loader from '../ui/Loader';

const SContactFormulary = styled.form`
  width: 40rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : '')};
`;

export default function ContactFormulary() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact-sent', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        reset({ name: '', email: '', message: '' });
        notifySuccess('');
      }
    } catch (error) {
      notifyError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SContactFormulary
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
        <Input
          input={{
            placeholder: 'Name',
            errors: errors,
            maxLength: 40,
            ...register('name', {
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
            placeholder: 'E-mail',
            errors: errors,
            maxLength: 60,
            ...register('email', {
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
            placeholder: 'message',
            errors: errors,
            ...register('message', {
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
      {isLoading && <Loader />}
    </>
  );
}
