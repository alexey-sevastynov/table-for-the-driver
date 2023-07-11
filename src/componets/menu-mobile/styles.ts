import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 80px;
    left: 0px;

    background-color: ${theme.colors.white};

    width: 100vw;
    height: calc(100vh - 80px);

    & .buttons {
      height: calc(100vh - 80px - 100px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  `};
`;
