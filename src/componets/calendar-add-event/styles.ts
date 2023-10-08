import styled, { css } from "styled-components";

export const Root = styled.form`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 1000px;

    background-color: white;
    box-shadow: 10px 0px 100px ${theme.colors.grey};

    button {
      cursor: pointer;
    }

    & .close {
      position: absolute;
      top: 0;
      right: 0;

      font-size: 20px;
      background-color: unset;
      border: unset;

      display: flex;
      justify-content: center;
      align-items: center;
      & svg {
        width: 25px;
        height: 25px;
      }
    }

    & main {
      padding: 10px 5px;
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 1020px) {
      position: absolute;
      width: calc(100vw - 10px);

      top: 0;
      left: unset;
      transform: unset;

      background-color: white;
      box-shadow: unset;

      & .close {
        position: absolute;
        top: 0;
        right: 0;

        background-color: unset;
        border: unset;

        display: flex;
        justify-content: center;
        align-items: center;
        & svg {
          width: 80px;
          height: 50px;
        }
      }

      & main {
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  `}
`;
