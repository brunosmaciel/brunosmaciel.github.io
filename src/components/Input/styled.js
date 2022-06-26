import styled from 'styled-components';
import * as colors from '../../config/colors';

export const InputText = styled.input`
  width: 500px;
  height: 60px;
  font-size: 36px;
  border: none;
  border-bottom: 3px solid ${colors.secondaryColor};
`;

export const FormField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 300ms ease-in-out;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 24px;
  left: 400px;
  right: 50px;
  color: ${colors.secondaryColor};
`;

export const Li = styled.li`
  transition: all 300ms ease-in-out;
`;
