import React from 'react'
import { Page } from '../layouts/Page'
import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'
import { ExampleItem } from '../components/ExampleItem'

const primaryLinkStyles = css`
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    text-align: center;
    border-radius: ${({ theme }) => theme.spaces.four};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 18px;
    width: fit-content;
    cursor: pointer;
    line-height: 1.4;
    padding: ${({ theme }) => `${theme.spaces.six} ${theme.spaces.sixteen}`};
    box-shadow: ${({ theme }) =>
        `0 0 ${theme.spaces.four} ${theme.spaces.one} ${transparentize(0.72, theme.colors.black)}`};

    &:hover,
    &:focus {
        opacity: 0.85;
    }

    &:active {
        opacity: 0.75;
    }
`

const PrimaryLinkWrong = styled.button`
    ${primaryLinkStyles}
`

const PrimaryLinkRight = styled.a`
    ${primaryLinkStyles}
`

const smallButtonStyles = css`
    text-decoration: underline;
    font-size: 28px;
    background-color: transparent;
    border: none;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => darken(0.1, theme.colors.blue)};

    &:hover,
    &:focus {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

const SmallButtonWrong = styled.a`
    ${smallButtonStyles}
`

const SmallButtonRight = styled.button`
    ${smallButtonStyles}
`

export const LinkAsButtonAndButtonAsLink: React.FC = () => {
    const gitHubSignUpLink = 'https://github.com/signup'

    const examples = {
        first: {
            title: 'Link behavior and button layout',
            text: 'Create your account in GitHub',
        },
        second: {
            title: 'Button behavior and link layout',
            text: 'Open alert popup',
        },
    }

    const navigateToGitHubSignUp = () => {
        window.location.href = gitHubSignUpLink
    }

    const openAlertPopup = () => alert('An alert popup!')

    return (
        <Page
            wrongChildren={
                <>
                    <ExampleItem title={examples.first.title}>
                        <PrimaryLinkWrong onClick={navigateToGitHubSignUp}>{examples.first.text}</PrimaryLinkWrong>
                    </ExampleItem>

                    <ExampleItem title={examples.second.title}>
                        <SmallButtonWrong onClick={openAlertPopup}>{examples.second.text}</SmallButtonWrong>
                    </ExampleItem>
                </>
            }
            rightChildren={
                <>
                    <ExampleItem title={examples.first.title}>
                        <PrimaryLinkRight href={gitHubSignUpLink}>{examples.first.text}</PrimaryLinkRight>
                    </ExampleItem>

                    <ExampleItem title={examples.second.title}>
                        <SmallButtonRight onClick={openAlertPopup}>{examples.second.text}</SmallButtonRight>
                    </ExampleItem>
                </>
            }
        />
    )
}
