import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/project/project-actions';
import styled from 'styled-components';
import Input from '../../components/ui/Input';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';

const SProjectFormulary = styled.form`
  padding: 1rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: ${(props) => (props.isLoading ? '0.3' : '')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : '')};
`;

export const Project = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImg, setCoverImg] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);

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

      {/* <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="coverImg">Imagem:</label>
        <input
          type="file"
          title="coverImg"
          onChange={(e) => setCoverImg(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="isFeatured">Is featured?</label>
        <input
          type="checkbox"
          name="isFeatured"
          checked={isFeatured}
          onChange={(e) => setIsFeatured(e.target.checked)}
        />
      </div>
      <button type="submit">Criar projeto</button> */}
    </SProjectFormulary>
  );
};
