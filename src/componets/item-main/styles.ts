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

    @media (max-width: 810px) {
      & .expenditure {
        display: none;
      }
    }

    @media (max-width: 690px) {
      & .id {
        width: 5%;
      }
      & .customer {
        width: 20%;
      }
      & .route {
        width: 25%;
      }
      & .hours {
        width: 15%;
      }
      & .km {
        width: 15%;
      }
      & .income {
        width: 20%;
      }
    }

    @media (max-width: 600px) {
      & .route {
        display: none;
      }
      & .id {
        width: 10%;
      }
      & .customer {
        width: 30%;
      }
      & .hours {
        width: 20%;
      }
      & .km {
        width: 20%;
      }
      & .income {
        width: 20%;
      }
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
