import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string
            black: string
            blue: string
            red: string
            green: string
        }
        spaces: {
            one: string
            two: string
            four: string
            six: string
            eight: string
            sixteen: string
        }
        borders: {
            smallGray: string
        }
        boxShadows: {
            largeDarkGray: string
        }
        breakpoints: {
            medium: string
        }
        transitions: {
            speed: string
        }
    }
}
