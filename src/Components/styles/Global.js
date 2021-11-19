import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyled