import styled, { css } from "styled-components";

export const Root = styled.div`
  ${() => css`
    & input {
      min-width: 100px;
    }
  `}
`;
