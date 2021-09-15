import React from 'react';

import { StyledHeader } from './styles';

import logo from '../../assets/images/logo.svg'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={logo} width={162} height={24} alt="Weather Now Logo" />
    </StyledHeader>
  );
}

export default Header;