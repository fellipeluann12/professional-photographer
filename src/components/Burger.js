import React, { useState } from 'react';
import { BurgerStyles, BurgerBracket } from '../styles/BurgerStyles';

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BurgerStyles isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </BurgerStyles>
  );
}
