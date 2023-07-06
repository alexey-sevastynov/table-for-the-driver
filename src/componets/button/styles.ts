import styled, { css } from "styled-components";

export const Root = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    height: 36px;
    width: 120px;

    border-radius: 10px;

    border: ${(props) => (props.itemScope ? "none" : "")};

    color: ${(props) =>
      props.itemScope ? theme.colors.violet : theme.colors.white};
    background-color: ${(props) =>
      props.itemScope ? theme.colors.white : theme.colors.violet};
  `}
`;
