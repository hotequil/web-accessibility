import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

const StyledLink = styled(Link)`
    display: flex;
    column-gap: ${({ theme }) => theme.spaces.one};
    color: ${({ theme }) => theme.colors.blue};
    fill: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
    text-align: center;
    width: fit-content;
    align-items: center;
    transition: box-shadow ${({ theme }) => theme.transitions.speed};

    &:hover,
    &:focus {
        ${({ theme }) => {
            const toggleColor = lighten(0.1, theme.colors.blue)

            return `
                color: ${toggleColor};
                fill: ${toggleColor};
            `
        }};
    }

    &:active {
        ${({ theme }) => {
            const activeColor = lighten(0.2, theme.colors.blue)

            return `
                color: ${activeColor};
                fill: ${activeColor};
            `
        }};
    }
`

const Icon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18"
        viewBox="0 -960 960 960"
        width="18"
        aria-label={'External link open in new tab'}
    >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
    </svg>
)

export const ExternalLink: React.FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => (
    <StyledLink to={to} target={'_blank'}>
        {children} <Icon />
    </StyledLink>
)
