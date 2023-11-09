import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'
import theme from '../../styles/theme'

const StyledLink = styled(Link)<{ color: string }>`
    display: inline;
    color: ${({ color }) => color};
    fill: ${({ color }) => color};
    font-weight: 500;
    text-align: center;
    transition: box-shadow ${({ theme }) => theme.transitions.speed};

    &:hover,
    &:focus {
        ${({ color }) => {
            const toggleColor = lighten(0.1, color)

            return `
                color: ${toggleColor};
                fill: ${toggleColor};
            `
        }};
    }

    &:active {
        ${({ color }) => {
            const activeColor = lighten(0.2, color)

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
        style={{ verticalAlign: 'middle' }}
    >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
    </svg>
)

export const ExternalLink: React.FC<PropsWithChildren<{ to: string; color?: string }>> = ({
    to,
    color = theme.colors.blue,
    children,
}) => (
    <StyledLink color={color} to={to} target={'_blank'}>
        {children} <Icon />
    </StyledLink>
)
