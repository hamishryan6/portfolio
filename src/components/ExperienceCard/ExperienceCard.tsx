import React from 'react'
import './ExperienceCard.css'
import vald from '../../assets/images/vald.jpg'
import qut from '../../assets/images/qut.jpg'
import moonward from '../../assets/images/moonward.jpg'
import allbrands from '../../assets/images/allbrands.jpg'
import { Experience } from '../../types'

type props = {
    experience: Experience
    onClick?: () => void
}

export const renderImage = (company: 'VALD' | 'QUT' | 'Moonward' | 'All Brands Toys') => {
    switch (company) {
        case 'All Brands Toys': return allbrands
        case 'Moonward': return moonward
        case 'QUT': return qut
        case 'VALD': return vald
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
