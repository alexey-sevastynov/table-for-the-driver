import styled, { css } from "styled-components";

export const Root = styled.div<{ isAuth: boolean }>`
  ${({ isAuth }) => css`
    position: absolute;
    bottom: 30px;
    left: 30px;

    display: flex;
    cursor: ${isAuth ? "unset" : "pointer"};

    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-left: 6px;
    }
  `}
`;
