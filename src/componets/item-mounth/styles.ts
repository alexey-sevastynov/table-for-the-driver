import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Root = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    &:hover {
      background-color: ${theme.colors.hover};
  
    }

    &:active {
      background-color: ${theme.colors.active};

    }

    cursor: pointer;

    /* forbid select text */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */
};

  

    & .icon {
      width: 50px;

      background-color: brown;
      color: ${theme.colors.white};

      & h1 {
        text-align: center;
        line-height: 50px;
      }
    }

    & h5 {
      /* text-align: center; */
      line-height: 30px;
    }
  `}
`;
