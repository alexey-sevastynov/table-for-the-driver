import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;

    height: 100%;

    & .colum_2 {
      width: calc(100% - 300px);

      & h2 {
        padding: 30px 0px 20px 60px;
      }

      & main {
        margin: 0 auto;
        padding: 60px 50px 20px 50px;

        background-color: ${theme.colors.white};
        border-radius: 25px;
        max-width: 790px;
        height: calc(100vh - 120px);

        & .flex {
          display: flex;
          flex-wrap: wrap;
        }

        & .overflow {
          height: calc(100% - 80px);
          overflow: scroll;
        }

        & .overflow::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        & h3 {
          line-height: 23px;
          margin-bottom: 34px;
        }

        & h4 {
          margin: 50px 0px 13px 0px;
        }

        & form {
          & .items__input_date,
          .items__input_data,
          .items__input_route,
          .items__input_money {
            & .input__block {
              position: relative;
              height: 70px;

              & select {
                height: 36px;
                margin: 0;
              }

              & .active_error {
                border: 1px solid ${theme.colors.error};
              }
              & .active_error::placeholder {
                color: ${theme.colors.error};
              }

              & .error {
                position: absolute;
                bottom: 0;
                color: ${theme.colors.error};
              }
            }
          }

          & .items__input_date {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          & .items__input_data {
            margin-top: 6px;
            display: flex;
          }

          & .items__input_route {
            margin-top: 6px;
            & input {
              width: 100%;
            }
          }

          & .items__input_money {
            display: flex;
            margin-top: 6px;

            & input {
              width: 200px;
              border: none;
            }

            & .income {
              & input {
                background-color: ${theme.colors.paid};
              }
            }

            & .expenditure {
              & input {
                background-color: ${theme.colors.debt};
              }
            }
          }

          & .items__input_status {
            margin-top: 6px;

            & .error {
              color: ${theme.colors.error};
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
        }

        & h5 {
          margin-bottom: 6px;
          font-weight: 700;
        }

        & input {
          height: 36px;
          width: 100px;
          padding: 0px 5px;
          margin-right: 20px;
        }

        & .btns {
          float: right;
        }
      }
    }
    @media (max-width: 1120px) {
      flex-direction: column;

      & .colum_2 {
        width: 100%;

        & main {
          height: unset;
          border-radius: 25px 25px 0px 0px;
        }
      }
    }
    @media (max-width: 810px) {
      & .colum_2 {
        & main {
          max-width: 665px;
        }
      }
    }

    @media (max-width: 690px) {
      & .colum_2 {
        & h2 {
          padding: 30px 0px 20px 20px;
        }
        & main {
          margin-left: 10px;
          margin-right: 10px;
          padding: 60px 0px 20px 0px;
          max-width: 765px;
        }
      }
    }
  `}
`;
