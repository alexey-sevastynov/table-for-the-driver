import styled, { css } from "styled-components";

export const Root = styled.div`
  ${() => css`
    width: 100%;

    margin-bottom: 10px;

    &:hover {
      //id svg
      & #active {
        opacity: 1;
        transition: all 0.2s ease;
      }
    }
    &:hover {
      //id svg
      & #edit {
        opacity: 1;
        transition: all 0.2s ease;
      }
    }

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
  ${() => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    & h4 {
      font-weight: 700;
      padding-right: 6px;
      &:hover {
        text-decoration: underline;
      }
    }

    & .edit__link{
              position: absolute;
              top: 0;
              right: 40px;
              cursor: pointer;
                & .edit {
                    opacity: 0;

                &#edit:hover  {
 
                 & rect{
                     fill: #737373;
                     fill-opacity: 0.2;
             }        
          }
       }
    }

    

    & .close {
      position: absolute;
      right: 10px;
      cursor: pointer;
      opacity: 0;

       &#active:hover  {
       
           & rect{
              fill: #737373;
              fill-opacity: 0.2;
           }        
      }

  `}
`;
export const TableHead = styled.div`
  ${() => css`
    height: 28px;
    display: flex;
  `}
`;
