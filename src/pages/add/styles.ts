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

            & input {
              margin: 0;
              width: 36px;
              height: 36px;
              background-color: yellow;
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
