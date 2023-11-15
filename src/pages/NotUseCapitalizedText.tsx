import React from 'react'
import { Page } from '../layouts/Page'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { CodeExamples } from '../components/CodeExamples'
import notUseCapitalizedTextFirstWrong from '/code-examples/not-use-capitalized-text-first-wrong.png'
import notUseCapitalizedTextFirstRight from '/code-examples/not-use-capitalized-text-first-right.png'
import notUseCapitalizedTextSecondRight from '/code-examples/not-use-capitalized-text-second-right.png'

const textStyles = css`
    color: ${({ theme }) => darken(0.01, theme.colors.blue)};
    font-weight: 700;
    font-size: 32px;
    text-shadow: ${({ theme }) => `${theme.spaces.one} ${theme.spaces.two} ${theme.spaces.two}`}
        ${({ theme }) => lighten(0.6, theme.colors.black)};
`

const WrongText = styled.h3`
    ${textStyles}
`

const RightText = styled.h3`
    text-transform: uppercase;

    ${textStyles}
`

const CompaniesText = styled.p`
    font-size: 28px;
`

const AbbreviationText: React.FC = () => <abbr title={'National Aeronautics and Space Administration'}>NASA</abbr>

export const NotUseCapitalizedText: React.FC = () => {
    return (
        <Page
            wrongChildren={
                <>
                    <WrongText>THE ACCESSIBILITY IS NECESSARY!</WrongText>
                    <CompaniesText>There are big companies like NASA.</CompaniesText>
                    <CodeExamples
                        images={[
                            {
                                src: notUseCapitalizedTextFirstWrong,
                                alt: 'HTML with texts written in capital letters incorrectly',
                            },
                        ]}
                    />
                </>
            }
            rightChildren={
                <>
                    <RightText>The accessibility is necessary!</RightText>
                    <CompaniesText>
                        There are big companies like <AbbreviationText />.
                    </CompaniesText>
                    <CodeExamples
                        images={[
                            {
                                src: notUseCapitalizedTextFirstRight,
                                alt: 'Correct HTML using abbr tag along with title attribute',
                            },
                            {
                                src: notUseCapitalizedTextSecondRight,
                                alt: 'CSS using uppercase instead of writing HTML in capital letters',
                            },
                        ]}
                    />
                </>
            }
        />
    )
}
