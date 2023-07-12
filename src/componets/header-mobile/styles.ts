import styled, { css } from "styled-components";

export const Root = styled.header`
  ${({ theme }) => css`
    position: relative;

    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    /* border-radius: 0px 0px 25px 25px;
    background-color: ${theme.colors.white}; */
    z-index: 50;

    &.top__80 {
      margin-top: 80px;
    }

    & .hidden {
      display: none;
    }

    & .wallpaper {
      position: fixed;
      overflow: hidden;
      top: 0px;
      left: 0px;
      height: 100vh;

      width: 100vw;

      background-color: ${theme.colors.white};
      border-radius: 0px;
      z-index: 20;
      transition: all 0.3s ease;

      &__active {
        position: absolute;
        top: calc(80px - 100vh);
        left: 0px;
        height: 100vh;

        width: 100vw;

        background-color: ${theme.colors.white};
        border-radius: 0px 0px 25px 25px;
        z-index: 20;

        transition: all 0.3s ease;
      }
    }

    & .buttons {
      height: calc(100vh - 80px - 100px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    & .icon {
      height: 80px;

      z-index: 50;

      &.fixed {
        position: fixed;
        right: 20px;
        top: 0px;
        height: 80px;

        z-index: 50;
      }
    }

    & h1 {
      line-height: 80px;
      z-index: 50;
    }

    & a {
      z-index: 50;

      &.fixed {
        position: fixed;
        left: 20px;
        top: 0px;
        z-index: 50;
      }
    }

    @media (min-width: 1120px) {
      display: none;
    }
  `}
`;
