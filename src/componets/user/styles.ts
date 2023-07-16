import styled, { css } from "styled-components";

export const Root = styled.div<{ isauth: string }>`
  ${({ isauth }) => css`
    position: absolute;
    bottom: 30px;
    left: 30px;

    display: flex;
    cursor: ${isauth === "true" ? "unset" : "pointer"};

    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-left: 6px;
    }
  `}
`;
