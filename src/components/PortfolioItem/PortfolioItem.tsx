import React from 'react'
import './PortfolioItem.css'
import TechCard from '../TechCard/TechCard'
import PortfolioLink from '../PortfolioLink/PortfolioLink'
import { tech } from '../../types'

type Props = {
    title: string
    company: string
    description: string
    tags: ('Design' | 'Frontend' | 'Backend')[]
    software: tech[]
    links: {
        label: 'GitHub' | 'Website' | 'App Store'
        link : string
    }[]
    image: string
}

export default function PortfolioItem({ title, company, description, tags, software, links, image }: Props) {

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
        return software.map((tech, index) => (
            <TechCard title={tech} key={index} hideTitle />
        ))
    }

    const renderLinks = () => {
        return links.map((link, index) => (
            <PortfolioLink label={link.label} link={link.link} key={index} />
        ))
    }

    return (
        <div className='PortfolioItem__Main'>
            <div className='PortfolioItem__TitleContainer'>
                <h3>{title}</h3>
                <h4>{company}</h4>
            </div>

            <p className='PortfolioItem__Description'>{description}</p>

            <div className='PortfolioItem__MetaContainer'>
                <img src={image}  />
                <div className='PortfolioItem__Info'>
                    <div className='PortfolioItem__InfoContainer'>
                        <h4>Responsibility</h4>
                        <div className='PortfolioItem__TagContainer'>
                            {renderTags()}
                        </div>
                    </div>

                    <div className='PortfolioItem__InfoContainer'>
                        <h4>Software</h4>
                        <div className='PortfolioItem__SoftwareContainer'>
                            {renderTech()}
                        </div>
                    </div>

                    <div className='PortfolioItem__InfoContainer'>
                        <h4>Links</h4>
                        <div className='PortfolioItem__Links'>
                            {renderLinks()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
