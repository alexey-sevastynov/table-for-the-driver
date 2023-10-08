import styled, { css } from "styled-components";

export const Root = styled.button`
  ${({ theme }) => css`
    padding: 7px 14px;
    border: 1px solid ${theme.colors.grey};
    border-radius: 30px;

    background-color: unset;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 2px 2px ${theme.colors.grey};

    font-size: 20px;

    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.white};
      box-shadow: 0px 4px 6px ${theme.colors.grey};
    }
  `}
`;
