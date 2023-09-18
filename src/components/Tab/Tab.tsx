import React from 'react'
import './Tab.css'

type Props = {
  tabs: ('Content' | 'Styling')[]
  currentTab: 'Content' | 'Styling'
  onChange: (clickedTab: 'Content' | 'Styling') => void
}

export default function Tab({ tabs, currentTab, onChange }: Props) {

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <button
        className={currentTab === tab ? 'Tab__Option Tab__Option__Selected' : 'Tab__Option'}
        key={index}
        value={tab}
        onClick={(e) => onChange(e.currentTarget.value as 'Content' | 'Styling')}
      >
        {tab}
      </button>
    ))
  }

  return (
    <div className='Tabs__Main'>
      {renderTabs()}
    </div>
  )
}
