import { ReactElement } from "react"

export type tech = 'After Effects' | 'CSS' | 'Figma' | 'HTML' | 'InDesign' | 'Illustrator' | 'Lottie' | 'Photoshop' | 'React' | 'Typescript' | 'Webflow' | 'XD'
export type company = 'VALD' | 'QUT' | 'Moonward' | 'All Brands Toys'

export type Experience = {
    duration: string,
    title: string,
    subTitle?: string,
    company: company,
    about?: string,
    type: string,
    isCurrent?: boolean,
    tech: tech[],
    description: string,
    skills: string[]
}

export type modalStateContext = {
    isModalOpen: boolean,
    setIsModalOpen: (state: boolean) => void
}