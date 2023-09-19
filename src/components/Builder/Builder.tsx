import React, { useState } from 'react'
import './Builder.css'
import bgimage1 from '../../assets/images/bgimage-1.jpg'
import bgimage2 from '../../assets/images/bgimage-2.jpg'
import bgimage3 from '../../assets/images/bgimage-3.jpg'
import bgimage4 from '../../assets/images/bgimage-4.jpg'
import bgimage5 from '../../assets/images/bgimage-5.jpg'
import bgimage6 from '../../assets/images/bgimage-6.jpg'
import bgimage7 from '../../assets/images/bgimage-7.jpg'
import SlidingTab from '../../components/SlidingTab/SlidingTab'
import Tab from '../Tab/Tab'

type Props = {
    title: string
}

export default function Builder({ title }: Props ) {

    const [currentComponentTab, setCurrentComponentTab] = useState<'Content' | 'Styling'>('Content')

    const bgImages = [bgimage1, bgimage2, bgimage3, bgimage4, bgimage5, bgimage6, bgimage7]

    const [selectedImage, setSelectedImage] = useState<string>(bgimage1)
    const [enteredTitle, setEnteredTitle] = useState<string>('')
    const [enteredPreview, setEnteredPreview] = useState<string>('')
  
    const [selectedPadding, setSelectedPadding] = useState<string>('Medium')
    const [selectedBorderRadius, setSelectedBorderRadius] = useState<string>('Large')
    const [selectedButtonType, setSelectedButtonType] = useState<string>('Secondary')
    const [selectedTheme, setSelectedTheme] = useState<string>('Dark')
    const [selectedColour, setSelectedColour] = useState<string>('#87A7FF')

    const renderImages = () => {
        return bgImages.map((image, index) => (
          <div
          className={image === selectedImage ? 'ImageOption ImageOption__Selected' : 'ImageOption'}
          key={index}
          onClick={() => setSelectedImage(image)}
          >
            <img src={image} className='ImageOption__Source' />
          </div>
        ))
      }
    
      const renderContentTab = () => {
        return <>
          <div className='Builder__Images'>
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
    
        </>
      }

    const generatePaddingClass = () => {
        switch (selectedPadding) {
          case 'Small': return 'PaddingSpacing__Small'
          case 'Medium': return 'PaddingSpacing__Medium'
          case 'Large': return 'PaddingSpacing__Large'
          case 'X-Large': return 'PaddingSpacing__XLarge'
        }
      }
    
      const generateBorderRadiusClass = () => {
        switch (selectedBorderRadius) {
          case 'Small': return 'BorderRadius__Small'
          case 'Medium': return 'BorderRadius__Medium'
          case 'Large': return 'BorderRadius__Large'
          case 'X-Large': return 'BorderRadius__XLarge'
        }
      }
    
      const generateColourClass = () => {
        switch (selectedColour) {
          case '#87A7FF': return 'Colour__Blue'
          case '#87FFCB': return 'Colour__Green'
          case '#FFA387': return 'Colour__Red'
          case '#FFFFFF': return 'Colour__White'
          default: return 'Colour__Blue'
        }
      }
    
      const generateButtonClass = () => {
        switch (selectedButtonType) {
          case 'Primary': return 'Button__Primary'
          case 'Secondary': return 'Button__Secondary'
        }
      }
    
      const renderTab = () => {
        switch (currentComponentTab) {
          case 'Content': return renderContentTab()
          case 'Styling': return renderStylingTab()
        }
      }

  return (
    <div className='Builder__Container'>
          <h3>{title}</h3>
          <div className='Builder'>

            <div className='Builder__Preview'>
              <div className={'Builder__Component ' + generateBorderRadiusClass()}>

                <div className='Builder__Component__Image' style={{ backgroundImage: `url(${selectedImage})` }} />

                <div className={'Builder__Component__Content ' + generatePaddingClass()}>
                  <div className='Builder__Component__Text'>
                    <div className='Builder__Component__Title'>{enteredTitle ? enteredTitle : 'Blog Title'}</div>
                    <div className='Builder__Component__Preview'>{enteredPreview ? enteredPreview : 'Delve into the whimsical world of random musings and curious ponderings. Join us on a delightful journey through the art of contemplating the utterly mundane.'}</div>
                  </div>
                  <button className={generateButtonClass() + ' ' + generateBorderRadiusClass()}>Continue Reading</button>
                </div>
              </div>
            </div>

            <div className='Builder__Content'>
              <Tab tabs={['Content', 'Styling']} currentTab={currentComponentTab} onChange={(clickedTab: 'Content' | 'Styling') => setCurrentComponentTab(clickedTab)} />
              <div className='Builder__Controls'>
                {renderTab()}
              </div>
            </div>

          </div>
        </div>
  )
}
