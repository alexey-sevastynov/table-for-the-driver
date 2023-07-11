import styled, { css } from "styled-components";

export const Root = styled.header`
  ${({ theme }) => css`
    position: relative;

    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    border-radius: 0px 0px 25px 25px;
    background-color: ${theme.colors.white};

    & .icon {
      height: 80px;
    }

    & h1 {
      line-height: 80px;
    }

    &.active {
      position: absolute;
      background-color: ${theme.colors.white};
      height: 100vh;
      align-items: flex-start;
      border-radius: 0px;
      z-index: 2;
    }

    @media (min-width: 1120px) {
      display: none;
    }
  `}
`;
