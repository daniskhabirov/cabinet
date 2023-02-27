import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    };
    
    html {
        background-color: #f0f0f0;
    };

    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-size: 16px;
        font-family: sans-serif;
    };
`;