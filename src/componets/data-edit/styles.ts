import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 790px;

    padding: 10px;

    background-color: ${(props: any) =>
      (props.tabIndex === 1 || props.tabIndex === "1") && theme.colors.paid};

    background-color: ${(props: any) =>
      props.tabIndex === 2 && theme.colors.uknown};

    background-color: ${(props: any) =>
      props.tabIndex === 3 && theme.colors.debt};

    background-color: ${(props: any) =>
      props.tabIndex === 4 && theme.colors.other};
    form {
      width: 100%;
      & .row__id,
      .row__customer,
      .row__route,
      .row__hours,
      .row__km,
      .row__income,
      .row__expenditure,
      .row__description,
      .row__status {
        position: relative;

        display: flex;
        height: 43px;

        & .border {
          border: 1px solid ${theme.colors.error};
        }

        & p {
          width: 20%;
          line-height: 23px;
        }

        & input,
        select {
          height: 23px;
          width: 80%;
        }

        & h6 {
          color: ${theme.colors.error};

          line-height: 20px;
          bottom: 0;
          left: 20%;
          position: absolute;
        }

        & .radio__block {
          display: flex;
        }

        & .items__input {
          position: relative;

          & input {
            margin: 0;
            width: 36px;
            height: 36px;
            cursor: pointer;
            border: unset;
            z-index: 3;
          }
          & .radio {
            position: relative;
            width: 36px;
            height: 36px;

            margin-right: 20px;

            & .paid__input,
            .unknown__input,
            .debt__input,
            .other__input {
              -webkit-appearance: none;
              appearance: none;
              position: absolute;
            }

            & .paid__label::before,
            .unknown__label::before,
            .debt__label::before,
            .other__label::before {
              content: "";
              display: block;
              width: 34px;
              height: 34px;
              border-radius: 10px;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
            }

            & .paid__label::before {
              background-color: ${theme.colors.paid};
              border: 1px solid ${theme.colors.paid};
            }
            & .unknown__label::before {
              background-color: ${theme.colors.uknown};
              border: 1px solid ${theme.colors.uknown};
            }
            & .debt__label::before {
              background-color: ${theme.colors.debt};
              border: 1px solid ${theme.colors.debt};
            }
            & .other__label::before {
              background-color: ${theme.colors.other};
              border: 1px solid ${theme.colors.other};
            }

            & .paid__label::after,
            .unknown__label::after,
            .debt__label::after,
            .other__label::after {
              content: "";
              display: block;
              width: 10px;
              height: 10px;

              background-color: ${theme.colors.violet};
              border-radius: 10px;
              opacity: 0;

              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 2;
            }

            & .paid__input:checked + .paid__label::before,
            .unknown__input:checked + .unknown__label::before,
            .debt__input:checked + .debt__label::before,
            .other__input:checked + .other__label::before {
              border-color: ${theme.colors.violet};
            }
            & .paid__input:checked + .paid__label::after,
            .unknown__input:checked + .unknown__label::after,
            .debt__input:checked + .debt__label::after,
            .other__input:checked + .other__label::after {
              opacity: 1;
            }
          }
        }
      }

      & .btns {
        float: right;
      }

      @media (max-width: 600px) {
        & .row__id,
        .row__customer,
        .row__route,
        .row__hours,
        .row__km,
        .row__income,
        .row__expenditure,
        .row__description,
        .row__status {
          & p {
            width: 35%;
          }
          & input,
          select {
            width: 65%;
          }
        }
      }
    }
  `}
`;
