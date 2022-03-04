import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #dbeb51;
        --accent-pink: #827d1a;
        --neutral-light: #000000;
        --lavender-secondary: #cfe5e9; /*Primary Font Color*/
        --dark-primary:#6467ac;
        --border-colour: black;
        
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: var(--neutral-light);
        color: white;
        font-size: 1.2rem;
    }

    a{
        color: inherit;
    }
    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem;
    }
    .secondary-heading{
        font-size: 3rem;
        color: var(--purple-primary);
        
    }
    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }

    //Utilities
    .c-para{
        text-align: center;
    }

  
`;

export default GlobalStyle;