import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    padding: 10px ;

    background-color: ${(props) => props.tabIndex === 1 && theme.colors.paid};
    background-color: ${(props) => props.tabIndex === 2 && theme.colors.uknown};
    background-color: ${(props) => props.tabIndex === 3 && theme.colors.debt};
    background-color: ${(props) => props.tabIndex === 4 && theme.colors.other};

    & .col__id,
    .col__route,
    .col__property,
    .col__value {
      & p {
        line-height: 20px;
      }
    }
    & .col__id {
      text-align: center;
      width: 5%;
    }

    & .col__customer{
           
       width: 95%;
    }

    & .col__route {
      width: 60%;
    }

    & .col__property {
      width: 15%;
    }

    & .col__value {
      text-align: center;
      width: 25%;
    }

    
     @media (max-width: 810px) {
       
        display: flex;
       
       
         & .col__id {
    }
         & .col__route {
            text-align: center;
             width: 100%;
    }
        & .col__property, .col__value{
              text-align: center;
              justify-content: flex-end;
              display: flex;
              width: 100%;
            & p{
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
             & .col__property, .col__value{
              text-align: unset;
             
              justify-content: unset;
              display: flex;
              flex-direction: column;
              width: unset;
            & p{
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
  `}
`;
