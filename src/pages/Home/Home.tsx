import React, { useEffect, useState } from 'react'
import './Home.css'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import ExperienceModal from '../../components/ExperienceModal/ExperienceModal'
import { education, experience } from '../../content'
import { Experience } from '../../types'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'
import EmailLink from '../../components/EmailLink/EmailLink'
import TechCard from '../../components/TechCard/TechCard'

export default function Home() {

  const tech = ['Figma', 'Webflow', 'After Effects', 'Illustrator', 'InDesign', 'Photoshop', 'XD', 'Lottie', 'React', 'Typescript', 'HTML', 'CSS']

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedExperience, setSelectedExperience] = useState<Experience>()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const themeColourTag = document.getElementById('theme-color') as HTMLMetaElement

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

  const renderModal = () => {
    if (selectedExperience === undefined) return
    if (isModalOpen) return (
      <ExperienceModal
        experience={selectedExperience}
        closeModal={() => setIsModalOpen(false)}
        keepModalOpen={() => setIsModalOpen(true)}
      />
    )
  }

  const setDefaultTheme = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      sessionStorage.setItem("theme", "light")
      themeColourTag.content = "#F2F6FA"
    }
    else {
      setTheme('dark')
      sessionStorage.setItem("theme", "dark")
      themeColourTag.content = "#1D1E1F"
    }
  }

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll'
  }, [isModalOpen])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      themeColourTag.content = "#1D1E1F"
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      themeColourTag.content = "#F2F6FA"
    }
  }, [theme])

  useEffect(() => {
    let storageTheme = sessionStorage.getItem('theme') as 'dark' | 'light' | null
    if (storageTheme === null) return setDefaultTheme()
    setTheme(storageTheme)
  }, [])

  return (
    <div className='Home__Main'>

      {renderModal()}

      <ThemeToggle theme={theme} toggleTheme={() => toggleTheme()} isVisible={!isModalOpen} />

      <div className='Header__Main'>
        <div className='Header__Container'>
          <h1 className='Header'>
            I’m Hamish, a
            <span className='Header__Span Designer__Span'>UI/UX Designer</span>
            and
            <span className='Header__Span Developer__Span'>Frontend Developer</span>
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
          <p>I am a highly skilled designer and developer with the ability to work in both creative and technical environments. Since the beginning of my career as a designer, I have always been interested in creating products that not only look good but also feel good. This is achieved by prioritising efficiency and visuals. I constantly look to leading software products for inspiration, aiming to incorporate my favourite elements into my own designs. <br/> <br/> When it comes to development, I am always eager to learn new technologies whenever possible. My desire to delve into software engineering stemmed from a passion for crafting pixel-perfect products based on my own designs, allowing for no compromises in terms of style.</p>
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

          {/* <form className='ContactForm' onSubmit={(e) => e.preventDefault()}>
            <div className='ContactForm__Inputs'>
              <div className='ContactForm__Names'>
                <input placeholder='First Name' />
                <input placeholder='Last Name' />
              </div>
              <input placeholder='Email' type='mail' />
              <input placeholder='Phone Number' type='tel' />
            </div>
            <textarea className='ContactForm __Message' placeholder='Message' />
            <button className='ContactForm__Submit' type='submit'>Send</button>
          </form> */}


        </div>

      </div>

    </div>
  )
}
