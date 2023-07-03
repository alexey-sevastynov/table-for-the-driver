import styled, { css } from "styled-components";

export const Root = styled.aside`
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
          height: calc(100% - 80px);
          overflow: scroll;
        }

        & .overflow::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        & .header {
          display: flex;
          justify-content: space-between;

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
  `}
`;
