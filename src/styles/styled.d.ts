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
            three: string
            four: string
            six: string
            eight: string
            sixteen: string
            thirtyTwo: string
        }
        borders: {
            smallGray: string
        }
        boxShadows: {
            largeDarkGray: string
        }
        breakpoints: {
            large: string
            medium: string
        }
        transitions: {
            speed: string
        }
    }
}
