import styled from 'styled-components';
import { FaUserAlt, FaHome, FaSearch } from 'react-icons/fa';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  width: 100%;
  height: 73px;
  background-color: ${colors.primaryColor};
`;

export const NavCentralizer = styled.div`
  max-width: 500px;
  height: 100%;
  background-color: ${colors.primaryColor};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledFaUserAlt = styled(FaUserAlt)`
  color: ${colors.tertiaryColor};
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${colors.secondaryColor};
    transform: scale(1.1);
  }
`;
export const StyledFaHome = styled(FaHome)`
  color: ${colors.tertiaryColor};
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${colors.secondaryColor};
    transform: scale(1.1);
  }
`;
export const StyledFaSearch = styled(FaSearch)`
  color: ${colors.tertiaryColor};
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${colors.secondaryColor};
    transform: scale(1.1);
  }
`;
