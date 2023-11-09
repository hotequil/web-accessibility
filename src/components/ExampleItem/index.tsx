import styled from 'styled-components'
import React, { PropsWithChildren } from 'react'

const Title = styled.h3`
    font-size: 20px;
    font-weight: 400;
`

const Container = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spaces.eight};
    align-items: center;

    @media (${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const ExampleItem: React.FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => (
    <Container>
        <Title>{title}:</Title>
        {children}
    </Container>
)
