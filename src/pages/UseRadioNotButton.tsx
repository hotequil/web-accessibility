import React, { useState } from 'react'
import { Page } from '../layouts/Page'
import styled, { css } from 'styled-components'
import motorcycleIcon from '/motorcycle-icon.png'
import carIcon from '/car-icon.png'
import truckIcon from '/truck-icon.png'
import busIcon from '/bus-icon.png'
import bigTruckIcon from '/big-truck-icon.png'
import { transparentize } from 'polished'
import useRadioNotButtonFirstRight from '/code-examples/use-radio-not-button-first-right.png'
import useRadioNotButtonFirstWrong from '/code-examples/use-radio-not-button-first-wrong.png'
import { CodeExamples } from '../components/CodeExamples'

enum DriversLicenseCategories {
    CATEGORY_A = 'category-a',
    CATEGORY_B = 'category-b',
    CATEGORY_C = 'category-c',
    CATEGORY_D = 'category-d',
    CATEGORY_E = 'category-e',
}

type Props = { isSelected: boolean }

type Image = {
    src: string
    alt: string
}

type Option = {
    title: string
    description: string
    value: DriversLicenseCategories
    icon: Image
}

const optionActiveStyles = css`
    &:active,
    &:has(> input[type='radio']:active) {
        transform: scale(0.96);
    }
`

const optionStyles = css<Props>`
    border-width: ${({ theme }) => theme.spaces.one};
    border-style: solid;
    border-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.blue : 'transparent')};
    border-radius: ${({ theme }) => theme.spaces.two};
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0;
    padding: ${({ theme }) => theme.spaces.four};
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: ${({ theme }) => `0 0 ${theme.spaces.four} 0 ${transparentize(0.86, theme.colors.black)}`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition-property: transform, border-top-color, border-right-color, border-left-color, border-bottom-color;
    row-gap: ${({ theme }) => theme.spaces.two};
    width: 100%;
    position: relative;
    text-align: center;

    &:hover,
    &:focus,
    &:has(> input[type='radio']:hover),
    &:has(> input[type='radio']:focus) {
        transform: scale(0.98);

        ${optionActiveStyles}
    }

    ${optionActiveStyles}

    &:hover,
    &:focus,
    &:active,
    &:has(> input[type='radio']:hover),
    &:has(> input[type='radio']:focus),
    &:has(> input[type='radio']:active) {
        ${({ theme, isSelected }) => (isSelected ? null : `border-color: ${transparentize(0.32, theme.colors.blue)}`)};
    }

    &:focus-visible {
        outline: none;
        outline-offset: 0;
        box-shadow: none;
    }
`

const Fieldset = styled.fieldset`
    display: grid;
    gap: ${({ theme }) => theme.spaces.eight};
    grid-template-columns: repeat(5, 1fr);
    line-height: 1.2;

    @media (${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const StyledLegend = styled.legend`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spaces.eight};
`

const Icon = styled.img`
    width: 40px;
`

const Strong = styled.strong<Props>`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme, isSelected }) => theme.colors[isSelected ? 'blue' : 'black']};
`

const Text = styled.p`
    font-size: 14px;
    color: ${({ theme }) => transparentize(0.24, theme.colors.black)};
`

const Button = styled.button<Props>`
    ${optionStyles}
`

const Label = styled.label<Props>`
    ${optionStyles}
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    margin: 0;
`

const Legend: React.FC = () => <StyledLegend>Select your driver's license category:</StyledLegend>

const OptionContent: React.FC<{ title: string; description: string; icon: Image } & Props> = ({
    title,
    description,
    icon,
    isSelected,
}) => (
    <>
        <Icon src={icon.src} alt={icon.alt} />
        <Strong isSelected={isSelected}>{title}</Strong>
        <Text>{description}</Text>
    </>
)

export const UseRadioNotButton: React.FC = () => {
    const [wrongValue, setWrongValue] = useState<DriversLicenseCategories | null>(null)
    const [rightValue, setRightValue] = useState<DriversLicenseCategories | null>(null)

    const options: Option[] = [
        {
            title: 'Category A',
            description: 'Motorcycles and tricycles.',
            value: DriversLicenseCategories.CATEGORY_A,
            icon: {
                src: motorcycleIcon,
                alt: 'Motorcycle blue icon',
            },
        },
        {
            title: 'Category B',
            description: 'Normal cars.',
            value: DriversLicenseCategories.CATEGORY_B,
            icon: {
                src: carIcon,
                alt: 'Car blue icon',
            },
        },
        {
            title: 'Category C',
            description: 'Freight vehicles over 3.5 tons.',
            value: DriversLicenseCategories.CATEGORY_C,
            icon: {
                src: truckIcon,
                alt: 'Truck blue icon',
            },
        },
        {
            title: 'Category D',
            description: 'Vehicles with more than 8 passengers.',
            value: DriversLicenseCategories.CATEGORY_D,
            icon: {
                src: busIcon,
                alt: 'Bus blue icon',
            },
        },
        {
            title: 'Category E',
            description: 'Vehicles with attached units above 6 tons.',
            value: DriversLicenseCategories.CATEGORY_E,
            icon: {
                src: bigTruckIcon,
                alt: 'Big truck blue icon',
            },
        },
    ]

    return (
        <Page
            wrongChildren={
                <>
                    <Fieldset>
                        <Legend />

                        {options.map(({ title, description, value, icon }) => {
                            const isSelected = wrongValue === value

                            return (
                                <Button key={value} onClick={() => setWrongValue(value)} isSelected={isSelected}>
                                    <OptionContent
                                        title={title}
                                        description={description}
                                        icon={icon}
                                        isSelected={isSelected}
                                    />
                                </Button>
                            )
                        })}
                    </Fieldset>

                    <CodeExamples
                        images={[
                            {
                                src: useRadioNotButtonFirstWrong,
                                alt: 'Buttons used incorrectly to select just one',
                            },
                        ]}
                    />
                </>
            }
            rightChildren={
                <>
                    <Fieldset>
                        <Legend />

                        {options.map(({ title, description, value, icon }) => {
                            const isSelected = rightValue === value

                            return (
                                <Label key={value} htmlFor={value} isSelected={isSelected}>
                                    <Input
                                        type="radio"
                                        name="driversLicenseCategory"
                                        checked={isSelected}
                                        id={value}
                                        value={value}
                                        onChange={() => setRightValue(value)}
                                    />
                                    <OptionContent
                                        title={title}
                                        description={description}
                                        icon={icon}
                                        isSelected={isSelected}
                                    />
                                </Label>
                            )
                        })}
                    </Fieldset>

                    <CodeExamples
                        images={[
                            {
                                src: useRadioNotButtonFirstRight,
                                alt: 'Radio (input) used correctly with some options to select',
                            },
                        ]}
                    />
                </>
            }
        />
    )
}
