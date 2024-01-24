import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root, html, body {
        font-family: Inter, sans-serif;
        line-height: 1.2;
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.white};
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: inherit;
    }

    * {
        font-family: inherit;
        transition-property: box-shadow, color, opacity;
        transition-duration: ${({ theme }) => theme.transitions.speed};

        &:focus-visible {
            outline: ${({ theme }) => theme.spaces.two} solid ${({ theme }) => theme.colors.blue};
            outline-offset: ${({ theme }) => `-${theme.spaces.two}`};
        }
    }

    abbr{
        text-decoration: none;
    }
`
