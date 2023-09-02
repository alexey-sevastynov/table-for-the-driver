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

input, select {
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

ul {
    margin: 0px;
    padding: 0px;
}

li {
     list-style: none;
 
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
    line-height: unset;
 
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
    font-size: 14px;
     @media(max-width: 600px){
        font-size: 12px;
       
    }
     
}
h6 {
    font-size: 10px;
    
     
}

p, li {
    
    font-size: 14px;
    margin: 0;
    color: ${(props) => props.theme.colors.grey};
}

button{
    font-size: 14px;
}

* {
    box-sizing: border-box;
}


          *::-webkit-scrollbar {
            width: 7px;
            width: 7px;
          }
          *::-webkit-scrollbar-track {
            border-radius: 4px;
            background-color: #ffffff;
          }

          *::-webkit-scrollbar-track:hover {
            background-color: #ffffff;
          }

          *::-webkit-scrollbar-track:active {
            background-color: #ffffff;
          }

          *::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: ${(props) => props.theme.colors.violet};
          }

          *::-webkit-scrollbar-thumb:hover {
            background-color: ${(props) => props.theme.colors.violet};
          }

          *::-webkit-scrollbar-thumb:active {
            background-color: ${(props) => props.theme.colors.violet};
          }
        
`;

export default ResetStyles;
