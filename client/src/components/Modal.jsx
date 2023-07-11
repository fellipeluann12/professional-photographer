import Button from './Button';
import styled from 'styled-components';
import Input from './ui/Input';
import { useForm } from 'react-hook-form';
import PText from './PText';
import Loader from './ui/Loader';

const SEditFormularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

const SEditFormulary = styled.form`
  padding: 1rem 1rem 2rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  opacity: ${(props) => (props.ísLoadingModal ? '0.3' : '1')};
  pointer-events: ${(props) => (props.ísLoadingModal ? 'none' : 'auto')};
`;

const SActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  > button {
    padding: 2rem;
  }
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

export const Modal = ({
  closeModal,
  item,
  type,
  heading,
  handleSave,
  ísLoadingModal,
}) => {
  const { id, title, description, featured } = item;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      title: title,
      description: description,
      coverImg: '',
      featured: featured,
    },
  });

  const onSubmit = async (data) => {
    handleSave(id, data);
  };

  return (
    <SEditFormularyContainer>
      <SEditFormulary
        ísLoadingModal={ísLoadingModal}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SH2>EDIT {heading}</SH2>
        <PText fontSize="2rem" color="primaryGrey">
          ID: {id}
        </PText>
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
                value: 1,
                message: 'Must exceed 1 characters',
              },
            }),
          }}
        />
        <Input
          input={{
            type: 'file',
            errors: errors,
            maxLength: 1,
            ...register('coverImg'),
          }}
        />
        {type === 'project' && (
          <Input
            input={{
              type: 'checkbox',
              errors: errors,
              maxLength: 30,
              ...register('featured', {
                required: false,
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                  message: 'Letters only',
                },
                minLength: {
                  value: 1,
                  message: 'Must exceed 1 characters',
                },
              }),
            }}
          />
        )}
        <SActionsContainer>
          <Button type="submit" btnText="SAVE" config="primary" />
          <Button
            type="button"
            btnText="X"
            config="close"
            onClick={closeModal}
          />
        </SActionsContainer>
        {ísLoadingModal && <Loader />}
      </SEditFormulary>
    </SEditFormularyContainer>
  );
};
