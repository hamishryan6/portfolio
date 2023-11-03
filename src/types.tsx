import { ReactElement } from "react"

export type tech = 'After Effects' | 'AWS' | 'CSS' | 'Figma' | 'Firebase' | 'HTML' | 'InDesign' | 'Illustrator' | 'Lottie' | 'Photoshop' | 'React' | 'React Native' | 'Shopify' | 'Typescript' | 'Webflow' | 'XD'
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
    isModalOpen: boolean
    setIsModalOpen: (state: boolean) => void
    theme: 'dark' | 'light'
    setTheme: (state: 'dark' | 'light') => void
}