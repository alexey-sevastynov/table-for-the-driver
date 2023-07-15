import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    padding: 10px;
    margin: 5px 0px;

    background-color: ${(props: any) =>
      props.inlist === 1 && theme.colors.paid};

    background-color: ${(props: any) =>
      props.inlist === 2 && theme.colors.uknown};

    background-color: ${(props: any) =>
      props.inlist === 3 && theme.colors.debt};

    background-color: ${(props: any) =>
      props.inlist === 4 && theme.colors.other};

    & .head {
      display: flex;
      width: 100%;
    }

    & .col__id,
    .col__customer,
    .col__route,
    .col__property,
    .col__value {
      & p {
        line-height: 20px;
      }
    }
    & .col__id {
      width: 50%;
    }

    & .col__customer {
      width: 50%;
    }

    & .col__route {
      width: 100%;
    }

    & .col__property {
      width: 100px;
    }

    & .col__value {
      text-align: center;
      width: 100px;
    }

    @media (max-width: 810px) {
      display: flex;

      & .col__id {
      }
      & .col__route {
        text-align: center;
        width: 100%;
      }
      & .col__property,
      .col__value {
        text-align: center;
        justify-content: flex-end;
        display: flex;
        width: 100%;
        & p {
          width: 20%;
        }
      }

      & .col__property {
        flex-wrap: wrap;
      }

      & .col__value {
      }

      @media (max-width: 600px) {
        & .col__id {
          font-weight: 700;
        }
        & .col__route {
        }
        & .col__property,
        .col__value {
          text-align: unset;

          justify-content: unset;
          display: flex;
          flex-direction: column;
          width: unset;
          & p {
            width: unset;
          }
        }

        & .col__property {
          align-items: flex-start;
          flex-wrap: unset;
          width: 40%;
        }

        & .col__value {
          width: 60%;
          align-items: flex-end;
        }
      }
    }
  `}
`;
