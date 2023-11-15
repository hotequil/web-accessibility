import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces.eight};
    list-style: none;
`

const ListItem = styled.li`
    width: 100%;
`

const Image = styled.img`
    width: inherit;
    border-radius: ${({ theme }) => theme.spaces.two};
    box-shadow: ${({ theme }) => `0 ${theme.spaces.two} ${theme.spaces.two} ${theme.spaces.one}`}
        ${({ theme }) => transparentize(0.92, theme.colors.black)};
    height: 100%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces.eight};
    border-top: ${({ theme }) => theme.borders.smallGray};
    padding-top: ${({ theme }) => theme.spaces.thirtyTwo};
    margin-top: ${({ theme }) => theme.spaces.sixteen};
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
`

type Props = {
    images: {
        src: string
        alt: string
    }[]
}

export const CodeExamples: React.FC<Props> = ({ images }) => (
    <Content>
        <Title>Codes result:</Title>
        <List>
            {images.map(({ src, alt }, index) => (
                <ListItem key={index}>
                    <Image src={src} alt={`Code example: ${alt}`} />
                </ListItem>
            ))}
        </List>
    </Content>
)
