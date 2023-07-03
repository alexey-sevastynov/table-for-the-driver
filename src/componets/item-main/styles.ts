import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    width: 100%;

    margin-bottom: 10px;

    & .id,
    .customer,
    .route,
    .hours,
    .km,
    .income,
    .expenditure {
      display: flex;
      justify-content: center;
      align-items: center;

      & h4 {
        font-weight: 700;
      }
    }

    & .id {
      width: 30px;
    }
    & .customer {
      width: 130px;
    }
    & .route {
      width: 230px;
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
      width: 125px;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    & h4 {
      font-weight: 700;
      padding-right: 6px;
    }
  `}
`;
export const TableHead = styled.div`
  ${({ theme }) => css`
    height: 28px;
    display: flex;
  `}
`;
