import { createGlobalStyle } from "styled-components";
import wallpaper from "./wallpaper.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    button {
        cursor: pointer;
    }

    body {
        background-color: rgb(15, 15, 15);
        color: rgb(241, 239, 239);
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        line-height: 1.4;
        margin: 0 auto;
        max-width: 1000px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left 10% bottom 100%;
        background-image: url("${wallpaper}");
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
    }
`;