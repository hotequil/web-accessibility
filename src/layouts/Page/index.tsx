import React, { ReactNode } from 'react'
import styled from 'styled-components'
import logo from '/logo.png'
import hotequilPhoto from '/hotequil.jpeg'
import routes from '../../routes'
import { Link } from 'react-router-dom'
import { darken } from 'polished'
import { ExternalLink } from '../../components/ExternalLink'
import { Section, SectionType } from '../../components/Section'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    border-bottom: ${({ theme }) => theme.borders.smallGray};
`

const StyledHeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    position: relative;
    box-shadow: ${({ theme }) => theme.boxShadows.largeDarkGray};
`

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.white};
`

const StyledLogoContent = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.spaces.four};
    padding: ${({ theme }) => `${theme.spaces.four} ${theme.spaces.eight}`};
    height: 40px;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    width: fit-content;

    @media (${({ theme }) => theme.breakpoints.medium}) {
        margin: 0 auto;
    }
`

const StyledLogo = styled.img`
    height: inherit;
`

const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: 24px;
`

const StyledLink = styled(Link)`
    color: ${({ theme }) => darken(0.1, theme.colors.blue)};
    font-weight: 500;
    padding: ${({ theme }) => theme.spaces.six};
    display: block;
    text-align: center;

    &:hover,
    &:focus {
        color: ${({ theme }) => darken(0.2, theme.colors.blue)};
    }

    &:active {
        color: ${({ theme }) => darken(0.3, theme.colors.blue)};
    }
`

const StyledList = styled.ul`
    display: flex;
    justify-content: center;

    @media (${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
    }
`

const StyledListItem = styled.li`
    flex-grow: 1;
    text-align: center;
    border-right: ${({ theme }) => theme.borders.smallGray};

    &:last-child {
        border-right: none;
    }

    @media (${({ theme }) => theme.breakpoints.medium}) {
        border-right: none;
        border-bottom: ${({ theme }) => theme.borders.smallGray};

        &:last-child {
            border-bottom: none;
        }
    }
`

const StyledMain = styled.main`
    display: flex;
    flex-grow: 1;

    @media (${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
    }
`

const StyledFooter = styled.footer`
    display: flex;
    gap: ${({ theme }) => theme.spaces.six};
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => `${theme.spaces.sixteen} ${theme.spaces.eight}`};

    @media (${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        text-align: center;
        gap: ${({ theme }) => theme.spaces.eight};
    }
`

const StyledAuthorPhoto = styled.img`
    width: 60px;
    border-radius: 50%;

    @media (${({ theme }) => theme.breakpoints.medium}) {
        width: 80px;
    }
`

const StyledFooterTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
`

const StyledFooterContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};

    @media (${({ theme }) => theme.breakpoints.medium}) {
        row-gap: ${({ theme }) => theme.spaces.eight};
    }
`

const StyledFooterLinks = styled.ul`
    display: flex;
    gap: ${({ theme }) => theme.spaces.four};

    @media (${({ theme }) => theme.breakpoints.medium}) {
        justify-content: center;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spaces.eight};
    }
`

export const Page: React.FC<{ wrongChildren: ReactNode; rightChildren: ReactNode }> = ({
    wrongChildren,
    rightChildren,
}) => {
    const links = [
        {
            text: 'Not use capitalized text',
            href: routes.notUseCapitalizedText,
        },
        {
            text: 'Image with alternative text',
            href: routes.imageWithAlternativeText,
        },
        {
            text: 'Not use "click here"',
            href: routes.notUseClickHere,
        },
        {
            text: 'Link as button and button as link',
            href: routes.linkAsButtonAndButtonAsLink,
        },
        {
            text: 'Use radio not button',
            href: routes.useRadioNotButton,
        },
    ]

    return (
        <>
            <StyledHeader>
                <StyledHeaderContainer>
                    <StyledLogoContent>
                        <StyledLogo src={logo} alt="Web Accessibility logo that has a person with open arms" />
                        <StyledTitle>Web Accessibility</StyledTitle>
                    </StyledLogoContent>
                </StyledHeaderContainer>
                <StyledNav>
                    <StyledList>
                        {links.map(({ text, href }, index) => (
                            <StyledListItem key={index}>
                                <StyledLink to={href}>{text}</StyledLink>
                            </StyledListItem>
                        ))}
                    </StyledList>
                </StyledNav>
            </StyledHeader>
            <StyledMain>
                <Section type={SectionType.WRONG}>{wrongChildren}</Section>
                <Section type={SectionType.RIGHT}>{rightChildren}</Section>
            </StyledMain>
            <StyledFooter>
                <StyledAuthorPhoto src={hotequilPhoto} alt="João Paulo Hotequil photo in Next 2023 of FIAP" />
                <StyledFooterContent>
                    <StyledFooterTitle>
                        Repository with some Web Accessibility standard examples of elements.
                    </StyledFooterTitle>
                    <p>Made by João Paulo Hotequil.</p>
                    <StyledFooterLinks>
                        <li>
                            <ExternalLink to={'https://hotequil.tech'}>Hotequil's website</ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to={'https://www.linkedin.com/in/joao-paulo-hotequil'}>
                                Hotequil's LinkedIn
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to={'https://github.com/hotequil'}>Hotequil's GitHub</ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to={'https://odysee.com/@hotequil'}>Hotequil's Odysee</ExternalLink>
                        </li>
                    </StyledFooterLinks>
                </StyledFooterContent>
            </StyledFooter>
        </>
    )
}
