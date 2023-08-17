import { Colors, overrides } from '../../styles';
import styled from 'styled-components';

export const Span = styled.span`
  color: ${Colors.primary};
  font-weight: bold;
  @media only screen and (min-width: ${overrides.breakpoints.values.mobile}px) {
    margin: 10px 0 0;
  }
  @media only screen and (min-width: ${overrides.breakpoints.values.laptop}px) {
    margin: 20px 0;
  }
`;
