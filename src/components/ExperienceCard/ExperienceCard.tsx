import React, { useEffect } from 'react'
import './ExperienceCard.css'
import caresuper from '../../assets/images/caresuper.jpg'
import vald from '../../assets/images/vald.jpg'
import qut from '../../assets/images/qut.jpg'
import moonward from '../../assets/images/moonward.jpg'
import allbrands from '../../assets/images/allbrands.jpg'
import { Experience, company } from '../../types'
import { useModalContext } from '../../Context'

type props = {
    experience: Experience
    onClick?: () => void
}

export const renderImage = (company: company) => {
    switch (company) {
        case 'All Brands Toys': return allbrands
        case 'Moonward': return moonward
        case 'QUT': return qut
        case 'VALD': return vald
        case 'CareSuper': return caresuper
    }
}

 export const renderTitles = (subTitle: string | undefined, title: string) => {
    if (!subTitle) {
        return (
            <div className='ExperienceCard__Title'>{title}</div>
        )
    } else {
        return (
            <div className='ExperienceCard__Titles'>
                <div className='ExperienceCard__Title'>{title}</div>
                <div className='ExperienceCard__SubTitle'>{subTitle}</div>
            </div>
        )
    }
}

export default function ExperienceCard({ experience, onClick }: props) {

    const { revealObservedElements } = useModalContext()

    useEffect(() => {
        revealObservedElements('.ExperienceCard', 0, '20px')
    }, [])

    return (
        <div className='ExperienceCard' onClick={onClick}>

            {experience.isCurrent && <div className='ExperienceCard__CurrentTag'>Current</div>}


            <div className='ExperienceCard__Image'>
                <img src={renderImage(experience.company)} width={'100%'} height={'100%'} />
            </div>
            <div className='ExperienceCard__DetailsContainer'>
                <div className='ExperienceCard__Duration'>{experience.duration}</div>

                {renderTitles(experience.subTitle, experience.title)}

                <div className='ExperienceCard__Company'>{experience.company + " • " + experience.type}</div>
            </div>
        </div>
    )
}
