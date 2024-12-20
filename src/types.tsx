export type tech = 'After Effects' | 'AWS' | 'CSS' | 'Figma' | 'Firebase' | 'HTML' | 'InDesign' | 'Illustrator' | 'Lottie' | 'Photoshop' | 'React' | 'React Native' | 'Shopify' | 'Typescript' | 'Vue.js' | 'Webflow' | 'Wordpress' | 'XD'
export type company = 'CareSuper' | 'VALD' | 'QUT' | 'Moonward' | 'All Brands Toys'

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
    theme: 'Dark' | 'Light'
    setTheme: (state: 'Dark' | 'Light') => void
    revealObservedElements: (classNames: string, threshold: number, offset?: string) => void
}

export type duration = {
    start: {
        month: number,
        year: number
    },
    end?: {
        month: number,
        year: number
    }
}