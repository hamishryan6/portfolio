import './ExperienceModal.css'
import { renderImage, renderTitles } from '../ExperienceCard/ExperienceCard'
import TechCard from '../TechCard/TechCard'
import { Experience } from '../../types'
import XMark from '../Icons/XMark'
import { useEffect, useState } from 'react'
import { useModalContext } from '../../Context'

type Props = {
    experience: Experience
    closeModal: () => void
    isModalOpen: boolean
}

export default function ExperienceModal({ experience, closeModal, isModalOpen }: Props) {

    const [test, setTest] = useState<boolean>(false)
    const { revealObservedElements } = useModalContext()

    const renderTech = () => {
        return experience.tech.map((tech, index) => (
            <TechCard title={tech} hasTooltip key={index} />
        ))
    }

    const renderParagraph = (text: string) => {
        const hasBreak = text.includes("<br/>")
        if (!hasBreak) return text

        let paragraphs = text.split(`<br/>`)

        return paragraphs.map((paragraph, index) => (
            <div className='ExperienceModal__Body' key={index}>{paragraph}</div>
        ))
    }

    const renderAboutCompany = () => {
        if (experience.about === undefined) return

        return (
            <div className='ExperienceModal__ContentContainer__Text'>
                <div className='ExperienceModal__SubTitle'>About the Company</div>
                <div className='ExperienceModal__Body'>{renderParagraph(experience.about)}</div>
            </div>
        )
    }

    const renderSkills = () => {
        return experience.skills.map((skill, index) => {
            return <div className='ExperienceModal__Body' key={index}>{skill + (index === experience.skills.length - 1 ? "" : " • ")}</div>
        })
    }

    useEffect(() => {
        revealObservedElements('.ExperienceModal__Modal', 0)
        revealObservedElements('.ExperienceModal__Main', 0)
    }, [])

    return (
        <div className='ExperienceModal__Main' onClick={closeModal}>

            <div className='ExperienceModal__MobileCloseButton' onClick={() => closeModal()}>
                {/* <XMark color='var(--main-bg-colour)' height='20px' width='20px' /> */}
                Tap to close
            </div>

            <div className='ExperienceModal__Modal' onClick={(e) => e.stopPropagation()}>

                <div className='ExperienceModal__Title' >
                    <div className='ExperienceCard__Image'>
                        <img src={renderImage(experience.company)} width={'100%'} height={'100%'} />
                    </div>
                    <div className='ExperienceCard__DetailsContainer'>
                        <div className='ExperienceCard__Duration'>{experience.duration}</div>

                        {renderTitles(experience.subTitle, experience.title)}

                        <div className='ExperienceCard__Company'>{experience.company + " • " + experience.type}</div>
                    </div>
                </div>

                <div className='ExperienceModal__CloseButton' onClick={() => closeModal()}>
                    <XMark color='var(--main-text-colour)' height='24px' width='24px' />
                </div>

                <div className='ExperienceModal__Divider' />

                <div className='ExperienceModal__Content'>

                    <div className='ExperienceModal__ContentContainer__Tech'>
                        <div className='ExperienceModal__SubTitle'>Tech Stack</div>
                        <div className='ExperienceModal__Tech'>
                            {renderTech()}
                        </div>
                    </div>

                    {renderAboutCompany()}

                    <div className='ExperienceModal__ContentContainer__Text'>
                        <div className='ExperienceModal__SubTitle'>Decription</div>
                        <div className='ExperienceModal__Body'>{renderParagraph(experience.description)}</div>
                    </div>

                    <div className='ExperienceModal__ContentContainer__Text'>
                        <div className='ExperienceModal__SubTitle'>Skills</div>
                        <div className='ExperienceModal__SkillsContainer'>
                            {renderSkills()}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}