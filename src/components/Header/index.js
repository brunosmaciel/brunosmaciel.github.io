import React from 'react';
import {
  NavCentralizer,
  Nav,
  StyledFaUserAlt,
  StyledFaHome,
  StyledFaSearch,
} from './styled';

export default function Header() {
  return (
    <Nav>
      <NavCentralizer>
        <StyledFaUserAlt size={24} />
        <StyledFaHome size={24} />
        <StyledFaSearch size={24} />
      </NavCentralizer>
    </Nav>
  );
}
