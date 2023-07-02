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
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto; 
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

h1 {
    font-size: 36px;
    font-weight: 700;
}
h2 {
    font-size: 24px;
}
h3 {
    font-size: 18px;
}
h4 {
    font-size: 16px;
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
