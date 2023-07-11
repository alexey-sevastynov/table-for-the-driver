import styled, { css } from "styled-components";

export const Root = styled.div`
  ${() => css`
    position: absolute;
    bottom: 30px;
    left: 30px;

    display: flex;

    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-left: 6px;
    }
  `}
`;
