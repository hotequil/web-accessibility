import { DefaultTheme } from 'styled-components'

const one = '2px'
const two = '4px'
const six = '12px'

export default {
    colors: {
        white: '#fefefe',
        black: '#111111',
        blue: '#0091ea',
        red: '#d00000',
        green: '#008000',
    },
    spaces: {
        one,
        two,
        three: '6px',
        four: '8px',
        six,
        eight: '16px',
        sixteen: '32px',
    },
    borders: {
        smallGray: '1px solid #d1d1d1',
    },
    boxShadows: {
        largeDarkGray: `0 ${two} ${six} ${one} #afafaf`,
    },
    breakpoints: {
        medium: 'max-width: 800px',
    },
    transitions: {
        speed: '200ms',
    },
} as DefaultTheme
