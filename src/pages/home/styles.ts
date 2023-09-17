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
          position: relative;
          height: calc(100% - 80px);
          overflow-y: scroll;

          & .overflow::-webkit-scrollbar {
            position: absolute;
            left: 50px;
          }

          & .center {
            overflow: hidden;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          & .btns {
            margin-top: 50px;
            float: right;
          }
        }

        & .header {
          display: flex;
          justify-content: space-between;

          & h3 {
            line-height: 23px;
          }

          &__input {
            position: relative;
            margin-bottom: 24px;

            & input {
              padding: 0px 5px 0px 32px;
              width: 160px;
              height: 23px;
            }

            & svg {
              position: absolute;
              left: 7px;

              top: 50%;
              transform: translateY(-50%);
            }
          }
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
        main {
          margin-left: 10px;
          margin-right: 10px;
          padding: 60px 0px 20px 0px;
          max-width: 765px;

          min-height: calc(100vh - 154px);

          .overflow {
            height: 100%;
            overflow-y: hidden;

            & .searchHelp {
              text-align: justify;
              padding: 0px 10px;
            }

            & .center {
              /* position: absolute;
              top: 10%;
              left: 50%;
              transform: translateX(-50%); */
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            & .btns {
              padding-right: 10px;
            }
          }

          & .header {
            padding: 0px 10px;
          }
        }
      }
    }
  `}
`;
