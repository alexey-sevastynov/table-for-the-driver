import React from "react";
import styled, { css } from "styled-components";

export const Root = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    background-color: ${(props) =>
      //@ts-ignore
      props.color === "active" ? theme.colors.violet : null};

    width: 240px;
    height: 40px;

    border-radius: 10px;

    margin-bottom: 6px;

    & h3 {
      color: ${(props) =>
        //@ts-ignore
        props.color === "active" ? theme.colors.white : theme.colors.grey};
    }

    & svg {
      margin: 0px 20px 0px 10px;
      & path {
        stroke: ${(props) =>
          //@ts-ignore
          props.color === "active" ? theme.colors.white : theme.colors.grey};
      }
    }
  `}
`;
