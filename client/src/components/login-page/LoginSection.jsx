import React, { useContext } from 'react';
import styled from 'styled-components';
import Input from '../ui/Input';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { auth } from '../../store/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const SLoginSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  padding: 2rem;
  margin: 1rem;
  width: 35rem;
  height: 100%;
  border-radius: 1rem;
`;

const SLoginFormulary = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
  text-align: center;
`;

const LoginSection = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: { email: '', password: '' },
  });

  const handleLogin = async ({ email, password }) => {
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <SLoginSection>
      <SLoginFormulary onSubmit={handleSubmit(handleLogin)}>
        <SH2>Hi!</SH2>
        <Input
          input={{
            placeholder: 'email',
            errors: errors,
            maxLength: 70,
            ...register('email', {
              required: 'Email required',
              minLength: {
                value: 5,
                message: 'Must exceed 5 characters',
              },
            }),
          }}
        />
        <Input
          input={{
            placeholder: 'password',
            type: 'password',
            errors: errors,
            ...register('password', {
              required: 'Password required',
              pattern: {
                value: /^[^{}[\]$&]+$/,
                message: 'Invalid',
              },
              minLength: {
                value: 5,
                message: 'Must exceed 5 characters',
              },
            }),
          }}
        />
        <Button btnText="LOGIN" type="submit" primary width="100%" />
      </SLoginFormulary>
    </SLoginSection>
  );
};

export default LoginSection;
