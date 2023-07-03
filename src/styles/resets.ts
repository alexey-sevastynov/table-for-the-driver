import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;

    background-color: #E2F3FF;
}

.wrapper{
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto; 
}

input {
        font-family:'Montserrat', sans-serif;

     border: 1px solid ${(props) => props.theme.colors.grey};
     border-radius: 5px;

     color: ${(props) => props.theme.colors.grey};
     font-size: 14px;

       &::placeholder {
            font-family:'Montserrat', sans-serif;
            color: ${(props) => props.theme.colors.grey};
        }
}

a {
    color: inherit;
    text-decoration: none;

    font-size: 18px;
}

h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 400;
 
}

h3, h4, h5{
    color: ${(props) => props.theme.colors.grey};
}

h1 {
    font-size: 36px;
    font-weight: 700;

    @media(max-width: 600px){
        font-size: 28px;
        font-weight: 700;
    }
}
h2 {
    font-size: 24px;
    font-weight: 700;
     @media(max-width: 600px){
        font-size: 20px;
        font-weight: 700;
    }
}
h3 {
    font-size: 18px;
     @media(max-width: 600px){
        font-size: 16px;
       
    }
}
h4 {
    font-size: 16px;
     @media(max-width: 600px){
        font-size: 14px;
       
    }
}
h5 {
    font-size: 12px;
     
}

p {
    font-size: 14px;
}

* {
    box-sizing: border-box;
}

`;

export default ResetStyles;
