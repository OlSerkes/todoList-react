import { Colors, overrides } from '../../styles';
import styled from 'styled-components';

export const ListItem = styled.li`
  background: ${Colors.white};
  border-radius: 6px;
  margin: 15px;
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
`;

export const TextInput = styled.p`
  flex-grow: 1;
  word-break: break-all;
  hyphens: auto;
  text-align: justify;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  color: ${({ checked }) => (checked ? Colors.light : Colors.black)};
  font-weight: 500;
`;

export const ButtonsBox = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  background: ${Colors.light};
  border-radius: 11px;
  @media only screen and (min-width: ${overrides.breakpoints.values.mobile}px) {
    min-width: 288px;
    margin: 0 16px 10px;
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.tablet}px) {
    width: 550px;
    margin: 0 auto 10px;
  }
`;

export const TextBox = styled.div`
  text-align: center;
  padding: 10px;
`;
