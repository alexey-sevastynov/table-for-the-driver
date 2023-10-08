import styled, { css } from "styled-components";

export const Root = styled.header`
  ${({ theme }) => css`
    padding: 20px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }

    .btns {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;

        font-size: 20px;

        background-color: unset;
        border: 1px solid ${theme.colors.grey};
        border-radius: 7px;

        cursor: pointer;

        &:hover {
          background: white;
        }
      }

      .today {
      }
    }
  `}
`;
