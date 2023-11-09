import React, { PropsWithChildren, useMemo } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

export enum SectionType {
    WRONG = 'wrong',
    RIGHT = 'right',
}

const StyledTitle = styled.h2<{ type: SectionType }>`
    color: ${({ type, theme }) => {
        switch (type) {
            case SectionType.WRONG:
                return theme.colors.red
            case SectionType.RIGHT:
                return theme.colors.green
        }
    }};
    font-size: 28px;
    font-weight: 600;
`

const StyledSection = styled.section<{ type: SectionType }>`
    display: flex;
    flex-direction: column;
    width: 50%;
    row-gap: ${({ theme }) => theme.spaces.sixteen};
    padding: ${({ theme }) => theme.spaces.sixteen};
    box-sizing: border-box;
    background-color: ${({ type, theme }) => {
        const opacity = 0.94

        switch (type) {
            case SectionType.WRONG:
                return transparentize(opacity, theme.colors.red)
            case SectionType.RIGHT:
                return transparentize(opacity, theme.colors.green)
        }
    }};

    @media (${({ theme }) => theme.breakpoints.medium}) {
        width: 100%;
    }
`

export const Section: React.FC<PropsWithChildren<{ type: SectionType }>> = ({ type, children }) => {
    const title = useMemo(() => {
        switch (type) {
            case SectionType.WRONG:
                return 'Wrong'
            case SectionType.RIGHT:
                return 'Right'
        }
    }, [type])

    return (
        <StyledSection type={type}>
            <StyledTitle type={type}>{`${title} examples:`}</StyledTitle>
            {children}
        </StyledSection>
    )
}
