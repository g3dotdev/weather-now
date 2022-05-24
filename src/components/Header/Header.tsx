import React from 'react';

import { StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src="/assets/images/logo.svg" width={162} height={24} alt="Weather Now Logo" />
    </StyledHeader>
  );
}

export default Header;