import styled, { css } from "styled-components";

export const Root = styled.aside`
  ${({ theme }) => css`
    position: relative;

    background-color: ${theme.colors.white};
    width: 300px;
    height: 100%;

    padding: 30px 0px 0px 30px;

    & h1 {
      padding-bottom: 75px;
    }
  `}
`;
