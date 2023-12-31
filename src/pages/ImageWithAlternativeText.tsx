import React from 'react'
import { Page } from '../layouts/Page'
import mazzaropiSmoking from '/mazzaropi-smoking.jpg'
import movieOJecaEAFreiraByMazzaropi from '/movie-o-jeca-e-a-freira-by-mazzaropi.jpg'
import styled from 'styled-components'
import { transparentize } from 'polished'
import imageWithAlternativeTextFirstWrong from '/code-examples/image-with-alternative-text-first-wrong.png'
import imageWithAlternativeTextFirstRight from '/code-examples/image-with-alternative-text-first-right.png'
import { CodeExamples } from '../components/CodeExamples'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.spaces.sixteen};

    @media (${({ theme }) => theme.breakpoints.medium}) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Image = styled.img`
    width: 100%;
    height: fit-content;
    border-radius: ${({ theme }) => theme.spaces.four};
    box-shadow: ${({ theme }) => `${theme.spaces.one} ${theme.spaces.three} ${theme.spaces.six} ${theme.spaces.two}`}
        ${({ theme }) => transparentize(0.82, theme.colors.black)};
`

export const ImageWithAlternativeText: React.FC = () => {
    return (
        <Page
            wrongChildren={
                <>
                    <Grid>
                        <Image src={mazzaropiSmoking} />
                        <Image src={movieOJecaEAFreiraByMazzaropi} />
                    </Grid>

                    <CodeExamples
                        images={[
                            {
                                src: imageWithAlternativeTextFirstWrong,
                                alt: 'Images without alt attribute for alternative description',
                            },
                        ]}
                    />
                </>
            }
            rightChildren={
                <>
                    <Grid>
                        <Image
                            src={mazzaropiSmoking}
                            alt="Black and white photo of Mazzaropi's face smoking a pipe, looking to the left suspiciously"
                        />
                        <Image
                            src={movieOJecaEAFreiraByMazzaropi}
                            alt="The movie poster 'O Jeca e a Freira' of Mazzaropi, it shows him and his wife looking ahead. He's holding a pipe and wearing a hat, and there's a semi-transparent image of a nun in the sky"
                        />
                    </Grid>

                    <CodeExamples
                        images={[
                            {
                                src: imageWithAlternativeTextFirstRight,
                                alt: 'Images using the alt attribute correctly to describe them',
                            },
                        ]}
                    />
                </>
            }
        />
    )
}
