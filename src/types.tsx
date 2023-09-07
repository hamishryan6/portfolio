import { ReactElement } from "react"

export type Experience = {
    duration: string,
    title: string,
    subTitle?: string,
    company: 'VALD' | 'QUT' | 'Moonward' | 'All Brands Toys',
    about?: string,
    type: string,
    isCurrent?: boolean,
    tech: string[],
    description: string,
    skills: string[]
}