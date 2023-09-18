import React, { useEffect, useState } from 'react'
import './Playground.css'
import headerImage from '../../assets/images/componentHeroImage.png'
import Tab from '../../components/Tab/Tab'

import bgimage1 from '../../assets/images/bgimage-1.jpg'
import bgimage2 from '../../assets/images/bgimage-2.jpg'
import bgimage3 from '../../assets/images/bgimage-3.jpg'
import bgimage4 from '../../assets/images/bgimage-4.jpg'
import bgimage5 from '../../assets/images/bgimage-5.jpg'
import bgimage6 from '../../assets/images/bgimage-6.jpg'
import bgimage7 from '../../assets/images/bgimage-7.jpg'
import SlidingTab from '../../components/SlidingTab/SlidingTab'
import ColourTab from '../../components/ColourTab/ColourTab'

export default function Playground() {

  const [currentComponentTab, setCurrentComponentTab] = useState<'Content' | 'Styling'>('Content')

  const [selectedImage, setSelectedImage] = useState<string>(bgimage1)
  const [enteredTitle, setEnteredTitle] = useState<string>('')
  const [enteredPreview, setEnteredPreview] = useState<string>('')

  const [selectedPadding, setSelectedPadding] = useState<string>('Medium')
  const [selectedBorderRadius, setSelectedBorderRadius] = useState<string>('Large')
  const [selectedButtonType, setSelectedButtonType] = useState<string>('Secondary')
  const [selectedTheme, setSelectedTheme] = useState<string>('Dark')
  const [selectedColour, setSelectedColour] = useState<string>('#87A7FF')

  const bgImages = [bgimage1, bgimage2, bgimage3, bgimage4, bgimage5, bgimage6, bgimage7]

  const renderImages = () => {
    return bgImages.map((image, index) => (
      <div className={image === selectedImage ? 'ImageOption ImageOption__Selected' : 'ImageOption'} key={index} onClick={() => setSelectedImage(image)}>
        <img src={image} height={'84px'} width={'84px'} className='ImageOption__Source' />
      </div>
    ))
  }

  const renderContentTab = () => {
    return <>
      <div className='PlayGround__Builder__Images'>
        {renderImages()}
      </div>
      <input
        onChange={(e) => setEnteredTitle(e.target.value)}
        value={enteredTitle}
        placeholder='Blog Title'
      />
      <textarea
        onChange={(e) => setEnteredPreview(e.target.value)}
        value={enteredPreview}
        placeholder='Delve into the whimsical world of random musings and curious ponderings. Join us on a delightful journey through the art of contemplating the utterly mundane.'
      />
    </>
  }

  const renderStylingTab = () => {
    return <>
      <SlidingTab
        title='Padding & Spacing'
        tabs={['Small', 'Medium', 'Large', 'X-Large']}
        selectedTab={selectedPadding}
        onChange={(selection: string) => setSelectedPadding(selection)}
      />

      <SlidingTab
        title='Border Radius'
        tabs={['Small', 'Medium', 'Large', 'X-Large']}
        selectedTab={selectedBorderRadius}
        onChange={(selection: string) => setSelectedBorderRadius(selection)}
      />

      <SlidingTab
        title='Button Type'
        tabs={['Primary', 'Secondary']}
        selectedTab={selectedButtonType}
        onChange={(selection: string) => setSelectedButtonType(selection)}
      />

      <SlidingTab
        title='Theme'
        tabs={['Light', 'Dark']}
        selectedTab={selectedTheme}
        onChange={(selection: string) => setSelectedTheme(selection)}
      />

      <ColourTab
        title='Colour'
        tabs={['#87A7FF', '#87FFCB', '#FFA387', '#FFFFFF']}
        selectedTab={selectedColour}
        onChange={(selection: string) => setSelectedColour(selection)}
      />

    </>
  }

  const renderTab = () => {
    switch (currentComponentTab) {
      case 'Content': return renderContentTab()
      case 'Styling': return renderStylingTab()
    }
  }

  return (
    <div className='Playground__Main'>

      <div className='Playground__Header'>
        <div className='Playground__Header__Content'>
          <div className='Playground__Header__Text'>
            <h2>CSS Component Builder</h2>
            <p>Drawing inspiration from DaisyUI, I've built a CSS component playground enabling users to swiftly tweak components using predefined CSS values. These components demonstrate my web development expertise, innovation, and dedication to crafting exceptional user interfaces.</p>
          </div>
          <button>Start customising</button>
        </div>
        <img src={headerImage} className='Playground__Header__Image' />
      </div>

      <div className='Divider__Container'>
        <div className='Divider' />
      </div>

      <div className='Playground__Content'>
        <div className='Playground__BuilderContainer'>
          <h3>Blog Card</h3>
          <div className='Playground__Builder'>
            <div className='Playground__Builder__Content'>
              <Tab tabs={['Content', 'Styling']} currentTab={currentComponentTab} onChange={(clickedTab: 'Content' | 'Styling') => setCurrentComponentTab(clickedTab)} />
              <div className='Playground__Builder__Controls'>
                {renderTab()}
              </div>
            </div>

            <div className='Playground__Builder__Preview'>
              <div className='Playground__Builder__Component'>

                <div className='Playground__Builder__Component__Image' style={{ backgroundImage: `url(${selectedImage})` }} />

                <div className='Playground__Builder__Component__Content'>
                  <div className='Playground__Builder__Component__Title'>{enteredTitle ? enteredTitle : 'Blog Title'}</div>
                  <div className='Playground__Builder__Component__Preview'>{enteredPreview ? enteredPreview : 'Delve into the whimsical world of random musings and curious ponderings. Join us on a delightful journey through the art of contemplating the utterly mundane.'}</div>
                  <button>Continue Reading</button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
