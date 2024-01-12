import React, { useEffect } from 'react'
import './PortfolioItem.css'
import TechCard from '../TechCard/TechCard'
import PortfolioLink from '../PortfolioLink/PortfolioLink'
import { tech } from '../../types'
import { useModalContext } from '../../Context'

type Props = {
    id: string
    title: string
    company?: string
    year: string
    description: string
    tags: ('Design' | 'Frontend' | 'Backend')[]
    tech: tech[]
    links?: {
        label: string
        link: string
    }[]
    image: string
}

export default function PortfolioItem({ id, title, company, year, description, tags, tech, links, image }: Props) {

    const { revealObservedElements } = useModalContext()

    const renderTags = () => {
        return tags.map((tag, index) => {
            switch (tag) {
                case 'Design': return <div className='DesignTag' key={index}>{tag}</div>
                case 'Frontend': return <div className='FrontendTag' key={index}>{tag}</div>
                case 'Backend': return <div className='BackendTag' key={index}>{tag}</div>
            }
        })
    }

    const renderTech = () => {
        return tech.map((tech, index) => (
            <TechCard title={tech} key={index} hasTooltip />
        ))
    }

    const renderLinkSection = () => {
        if (!links) return
        return (
            <div className='PortfolioItem__InfoContainer'>
                <h4>Links</h4>
                <div className='PortfolioItem__Links'>
                    {renderLinks()}
                </div>
            </div>
        )
    }

    const renderLinks = () => {
        if (!links) return
        return links.map((link, index) => (
            <PortfolioLink label={link.label} link={link.link} key={index} />
        ))
    }

    useEffect(() => {
        revealObservedElements('.PortfolioItem__Main', 0, '20px')
    }, [])


    return (
        <section className='PortfolioItem__Main' id={id}>
            <div className='PortfolioItem__TitleContainer'>
                <h3>{title}</h3>
                <h4>{year}{company && (' • ' + company)}</h4>
            </div>

            <p className='PortfolioItem__Description'>{description}</p>

            <div className='PortfolioItem__MetaContainer'>
                <img src={image} />
                <div className='PortfolioItem__Info'>
                    <div className='PortfolioItem__InfoContainer'>
                        <h4>Responsibility</h4>
                        <div className='PortfolioItem__TagContainer'>
                            {renderTags()}
                        </div>
                    </div>

                    <div className='PortfolioItem__InfoContainer PortfolioItem__TechStack'>
                        <h4>Tech Stack</h4>
                        <div className='PortfolioItem__TechContainer'>
                            {renderTech()}
                        </div>
                    </div>

                    {renderLinkSection()}

                </div>
            </div>
        </section>
    )
}
