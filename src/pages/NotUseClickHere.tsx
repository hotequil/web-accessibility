import React, { PropsWithChildren } from 'react'
import { Page } from '../layouts/Page'
import styled from 'styled-components'
import { ExternalLink } from '../components/ExternalLink'
import { darken } from 'polished'
import theme from '../styles/theme'

const Text = styled.p`
    font-size: 24px;
`

const Link: React.FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => (
    <ExternalLink to={to} color={darken(0.1, theme.colors.blue)}>
        {children}
    </ExternalLink>
)

export const NotUseClickHere: React.FC = () => {
    const rennerPromotionsLink = 'https://www.lojasrenner.com.br/lista/desconto-todos-produto'
    const aClassCatalogLink = 'https://www.mercedes-benz.com.br/classea/_files/mer-catalogo-classe-A-2013.pdf'

    return (
        <Page
            wrongChildren={
                <>
                    <Text>
                        Renner has promotions, to access <Link to={rennerPromotionsLink}>click here</Link>!
                    </Text>
                    <Text>
                        The Mercedes-Benz A-Class is a subcompact car, <Link to={aClassCatalogLink}>click here</Link> to
                        download the catalog.
                    </Text>
                </>
            }
            rightChildren={
                <>
                    <Text>
                        Access the <Link to={rennerPromotionsLink}>Renner clothing promotions</Link>!
                    </Text>
                    <Text>
                        The Mercedes-Benz A-Class is a subcompact car (
                        <Link to={aClassCatalogLink}>download Mercedes-Benz A-Class catalog</Link>).
                    </Text>
                </>
            }
        />
    )
}
