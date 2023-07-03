import styled, { css } from "styled-components";

export const Root = styled.header`
  ${({ theme }) => css`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 280px;
    width: 100%;
    border-radius: 0px 0px 25px 25px;
    background-color: ${theme.colors.white};

    & h1 {
      line-height: 80px;
    }

    @media (min-width: 1120px) {
      display: none;
    }
  `}
`;
