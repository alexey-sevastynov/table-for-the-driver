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
         
          height: calc(100% - 80px);
          overflow: scroll;


       

        }

        & .overflow::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

       

        & h3 {
            line-height: 23px;
            margin-bottom: 24px;
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
            & h3{
              padding-left: 10px;
            }
         
        }
      }
    }
    }

   

   
  `}
`;
