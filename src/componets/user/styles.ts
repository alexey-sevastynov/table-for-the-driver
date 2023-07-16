import styled, { css } from "styled-components";

export const Root = styled.div<{ isauth: boolean }>`
  ${({ isauth }) => css`
    position: absolute;
    bottom: 30px;
    left: 30px;

    display: flex;
    cursor: ${isauth ? "unset" : "pointer"};

    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-left: 6px;
    }
  `}
`;
