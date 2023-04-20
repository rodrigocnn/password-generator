import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background:#f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
    --shape: #ffffff;
}

*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}


body{
    background: black;
    -webkit-font-smoothing: antialiased;
    width: 100%;


}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif ;
    font-weight: 400;
}

h1, h2, h3,h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}
`

