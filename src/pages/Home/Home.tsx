import React, { useEffect, useState } from 'react'
import './Home.css'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import ExperienceModal from '../../components/ExperienceModal/ExperienceModal'
import { education, experience } from '../../content'
import { Experience, tech } from '../../types'
import EmailLink from '../../components/EmailLink/EmailLink'
import TechCard from '../../components/TechCard/TechCard'
import { useModalContext } from '../../Context'

export default function Home() {

  const tech: tech[] = ['Figma', 'Webflow', 'After Effects', 'Illustrator', 'InDesign', 'Photoshop', 'XD', 'Lottie', 'React', 'React Native', 'Typescript', 'HTML', 'CSS', 'Firebase', 'AWS', 'Vue.js', 'Shopify', 'Wordpress']

  const [selectedExperience, setSelectedExperience] = useState<Experience>()
  const { isModalOpen, setIsModalOpen, revealObservedElements } = useModalContext()

  const renderTechCards = () => (
    tech.map((techItem, index) => (
      <TechCard title={techItem} key={index} />
    ))
  )

  const renderExperience = () => {
    return experience.map((experienceItem: Experience, index: number) => (
      <ExperienceCard
        experience={experienceItem}
        onClick={() => onExperienceCardClick(experienceItem)}
        key={index}
      />
    ))
  }

  const renderEducation = () => {
    return education.map((educationItem: Experience, index: number) => (
      <ExperienceCard
        experience={educationItem}
        onClick={() => onExperienceCardClick(educationItem)}
        key={index}
      />
    ))
  }

  const onExperienceCardClick = (clickedExperience: Experience) => {
    setSelectedExperience(clickedExperience)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    const modal = document.querySelector('.ExperienceModal__Modal.show')
    if (!modal) return console.log('No modal found')
    modal.classList.remove('show')
    setTimeout(() => setIsModalOpen(false), 100)
  }

  const renderModal = () => {
    if (selectedExperience === undefined) return
    if (isModalOpen) return (
      <ExperienceModal
        experience={selectedExperience}
        closeModal={() => closeModal()}
        isModalOpen={isModalOpen}
      />
    )
  }

  useEffect(() => {
    revealObservedElements('.Content__Container>h2', 0, '20px')
    revealObservedElements('.Content__Container>p', 0, '20px')
    revealObservedElements('.EmailLink__Main', 0, '20px')
  }, [])
  

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll'
  }, [isModalOpen])

  return (
    <div className='Page__Main'>

      {renderModal()}

      <div className='Header__Main'>
        <div className='Header__Container'>
          <h1 className='Header'>
            I’m Hamish, a
            <span className='Header__Highlight Designer__Highlight'>
              <div className='Header__Highlight__Bar' />
              UI/UX Designer
            </span>
            and
            <span className='Header__Highlight Developer__Highlight'>
              <div className='Header__Highlight__Bar' />
              Frontend Developer
            </span>
            in Brisbane, Australia
          </h1>
        </div>
      </div>

      <div className='Divider__Container'>
        <div className='Divider' />
      </div>

      <div className='Content__Main'>

        <div className='Content__Container'>
          <h2>About me</h2>
          <p>I am a highly skilled designer and developer with the ability to work in both creative and technical environments. Since the beginning of my career as a designer, I have always been interested in creating products that not only look good but also feel good. This is achieved by prioritising efficiency and visuals. I constantly look to leading software products for inspiration, aiming to incorporate my favourite elements into my own designs. <br /> <br /> When it comes to development, I am always eager to learn new technologies whenever possible. My desire to delve into software engineering stemmed from a passion for crafting pixel-perfect products based on my own designs, allowing for no compromises in terms of style.</p>
        </div>

        <div className='Content__Container'>

          <h2>Experience</h2>

          <div className='ExperienceCard__Container'>
            {renderExperience()}
          </div>

        </div>

        <div className='Content__Container'>

          <h2>Education</h2>

          <div className='ExperienceCard__Container'>
            {renderEducation()}
          </div>

        </div>

        <div className='Content__Container'>

          <h2>Tech Stack</h2>
          <div className='TechCard__Container'>
            {renderTechCards()}
          </div>

        </div>

        <div className='Content__Container'>

          <h2>Contact</h2>
          <EmailLink />

        </div>

      </div>

    </div>
  )
}
