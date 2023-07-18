import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Root = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 130px;
    width: 130px;
    &:hover {
      background-color: ${theme.colors.hover};
    }

    &:active {
      background-color: ${theme.colors.active};
    }

    cursor: pointer;

    /* forbid select text */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
    & .icon__1,
    .icon__2,
    .icon__3,
    .icon__4,
    .icon__5,
    .icon__6,
    .icon__7,
    .icon__8,
    .icon__9,
    .icon__10,
    .icon__11,
    .icon__12 {
      width: 80px;

      color: ${theme.colors.white};
      & h1 {
        text-align: center;
        line-height: 80px;
      }
    }
    & .icon {
      &__1 {
        background-color: ${theme.colors.january};
      }
      &__2 {
        background-color: ${theme.colors.february};
      }
      &__3 {
        background-color: ${theme.colors.march};
      }
      &__4 {
        background-color: ${theme.colors.april};
      }
      &__5 {
        background-color: ${theme.colors.may};
      }
      &__6 {
        background-color: ${theme.colors.june};
      }
      &__7 {
        background-color: ${theme.colors.july};
      }
      &__8 {
        background-color: ${theme.colors.august};
      }
      &__9 {
        background-color: ${theme.colors.september};
      }
      &__10 {
        background-color: ${theme.colors.october};
      }
      &__11 {
        background-color: ${theme.colors.november};
      }
      &__12 {
        background-color: ${theme.colors.december};
      }
    }

    & h5 {
      /* text-align: center; */
      line-height: 30px;
      font-size: 12px;
    }
  `};
`;
