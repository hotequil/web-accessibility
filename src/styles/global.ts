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
        transition-property: box-shadow, color;
        transition-duration: ${({ theme }) => theme.transitions.speed};

        &:focus-visible {
            outline: transparent solid ${({ theme }) => theme.spaces.one};
            outline-offset: ${({ theme }) => theme.spaces.one};
            box-shadow: inset 0 0 0 ${({ theme }) => theme.spaces.two} ${({ theme }) => theme.colors.blue};
        }
    }
`
