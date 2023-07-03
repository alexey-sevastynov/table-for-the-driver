import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    height: 28px;
    display: flex;

    background-color: ${(props) =>
      props.tabIndex === 1 ? theme.colors.paid : null};
    background-color: ${(props) =>
      props.tabIndex === 2 ? theme.colors.uknown : null};
    background-color: ${(props) =>
      props.tabIndex === 3 ? theme.colors.debt : null};
    background-color: ${(props) =>
      props.tabIndex === 4 ? theme.colors.other : null};

    border-radius: ${(props) =>
      props.tabIndex === 1 ? "10px 10px 0px 0px" : null};
    border-radius: ${(props) =>
      props.results === props.inlist ? "0px 0px 10px 10px" : null};

    /* & .id,
    .customer,
    .route,
    .hours,
    .km,
    .income,
    .expenditure {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .id {
      width: 30px;
    }
    & .customer {
      width: 130px;
    }
    & .route {
      width: 250px;
    }
    & .hours {
      width: 50px;
    }
    & .km {
      width: 50px;
    }
    & .income {
      width: 75px;
    }
    & .expenditure {
      width: 105px;
    } */
  `}
`;
