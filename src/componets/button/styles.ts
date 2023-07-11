import styled, { css } from "styled-components";

export const Root = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    height: 36px;
    width: 120px;

    border-radius: 10px;

    border: unset;

    color: ${theme.colors.white};
    background-color: ${theme.colors.violet};

    &.unActive {
      background-color: unset;
      color: ${theme.colors.violet};
    }
  `}
`;
