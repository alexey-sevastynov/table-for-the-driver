import styled, { css } from "styled-components";

export const Root = styled.aside`
  ${({ theme }) => css`
    position: relative;

    background-color: ${theme.colors.white};
    width: 300px;

    padding: 30px 0px 0px 30px;

    & .buttons {
      height: calc(100vh - 250px);
      display: flex;
      flex-direction: column;

      justify-content: space-between;
    }
    & h1 {
      padding-bottom: 75px;
    }

    @media (max-width: 1120px) {
      display: none;
    }
  `}
`;
