import styled from 'styled-components';

export const BurgerStyles = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 20;
  width: 4rem;
  height: 4rem;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 4rem;
    height: 0.5rem;
    background-color: white;
    border-radius: 1rem;
    transform-origin: 0.1rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${(props) =>
        props.isOpen ? 'rotate(45deg)' : 'translateX(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => (props.isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const BurgerBracket = styled.div``;
