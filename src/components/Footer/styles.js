import { Colors, overrides } from '../../styles';
import styled from 'styled-components';

export const Typography = styled.p`
  color: ${Colors.shaft};
  font-weight: 700;
  margin: 10px auto;
  @media only screen and (min-width: ${overrides.breakpoints.values.mobile}px) {
    font-size: 12px;
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.tablet}px) {
    font-size: 14px;
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.laptop}px) {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  color: ${Colors.shaft};
  margin: 10px auto;
  text-decoration: none;
  transition: 1s;
  &:hover {
    transform: scale(1.2);
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.mobile}px) {
    font-size: 12px;
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.tablet}px) {
    font-size: 14px;
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.laptop}px) {
    font-size: 18px;
  }
`;
