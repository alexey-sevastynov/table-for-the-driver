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

        & .overflow {
          & .addData {
            display: flex;
            flex-wrap: wrap;

            align-items: center;
            height: 50px;

            &__description {
              width: 150px;
            }
            &__data {
              width: 100px;
            }

            & input {
              text-align: center;
              height: 36px;
              width: 100px;
              padding: 0px 5px;
            }

            &__inputBlock {
              position: relative;
              margin-right: 25px;

              & h6 {
                display: block;
                width: 120px;
                position: absolute;
                bottom: -13px;
                color: ${theme.colors.error};
              }
            }
          }

          & .addOption {
            display: flex;
            height: 50px;

            margin-top: 10px;

            &__customer,
            &__hour,
            &__km {
              position: relative;

              & input {
                text-align: center;
                height: 36px;
                width: 100px;
                margin-right: 25px;
                padding: 0px 5px;
              }

              & h6 {
                position: absolute;

                bottom: 0;
                color: ${theme.colors.error};
              }
            }
          }

          & .optionTable {
            margin: 20px 0px;

            &__header {
              font-weight: 700;
            }
            &__overflow {
              height: calc(100vh - 420px);

              overflow-y: scroll;
            }
            /* &__overflow::-webkit-scrollbar {
              width: 0;
              height: 0;
            } */
            &__body {
              line-height: 36px;
            }
            &__header,
            &__body {
              text-align: center;
              display: flex;
              align-items: center;

              & p:nth-child(1) {
                width: 120px;
              }
              & p:nth-child(2),
              & p:nth-child(3) {
                width: 80px;
              }
            }

            & svg {
              margin: 0px 6px;
            }
          }
        }

        & .overflow::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        & h3 {
          line-height: 23px;
        }

        & h4 {
          margin: 50px 0px 13px 0px;
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
          padding: 60px 10px 20px 10px;
          max-width: 765px;

          min-height: calc(100vh - 120px - 36px);

          & .overflow {
            & .addData {
              width: 100%;
              position: relative;

              display: flex;
              flex-wrap: wrap;

              justify-content: space-between;
              align-items: flex-start;
              height: 94px;

              & input {
                width: 120px;
              }

              & p {
                line-height: 36px;
              }

              & button {
                position: absolute;
                top: 50px;
                right: 0;
              }

              &__description {
                width: 120px;
              }
              &__data {
                text-align: center;
                width: 80px;
              }

              &__inputBlock {
                margin-right: 0px;
              }
            }

            & .addOption {
              position: relative;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              height: 50px;

              margin-top: 10px;

              & button {
                position: absolute;
                top: 50px;
                right: 0;
              }

              &__customer,
              &__hour,
              &__km {
                position: relative;

                & input {
                  height: 36px;
                  width: 100px;
                  margin-right: 0px;
                }

                & h6 {
                  position: absolute;

                  bottom: 0;
                  color: ${theme.colors.error};
                }
              }
            }

            & .optionTable {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 60px 0px 0px;

              &__header {
                padding-right: 90px;
                text-align: unset;
              }
              &__overflow {
                height: unset;
                overflow-y: unset;
              }

              &__body {
                line-height: 50px;
              }
              &__header,
              &__body {
                text-align: center;
                & p:nth-child(1) {
                  width: 120px;
                }
                & p:nth-child(2),
                & p:nth-child(3) {
                  width: 80px;
                }
              }

              & svg {
                margin: 0px 16px;
              }
            }
          }
        }
      }
    }
  `}
`;
