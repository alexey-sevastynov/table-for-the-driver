import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Root = styled(NavLink)`
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

    & svg {
      margin: 0px 20px 0px 10px;
    }

    & .active {
      & path {
        stroke: ${theme.colors.white};
      }
    }
  `}
`;
