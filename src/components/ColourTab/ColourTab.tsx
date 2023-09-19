import React from 'react'
import './ColourTab.css'

type Props = {
    title: string
    tabs: string[]
    selectedTab: string
    onChange: (selection: string) => void
}

export default function ColourTab({ title, tabs, selectedTab, onChange }: Props) {

    const renderTabs = () => {
        return tabs.map((tab, index) => (
            <div className={tab === selectedTab ? 'ColourTab__Tab ColourTab__Tab__Selected' : 'ColourTab__Tab'}>
                <button
                    className='ColourTab__Tab__Swatch'
                    key={index}
                    onClick={() => onChange(tab)}
                    style={{ backgroundColor: tab }}
                />
            </div>
        ))
    }

    return (
        <div className='ColourTab__Main'>
            <h4>{title}</h4>
            <div className='ColourTab__Container' style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
                {renderTabs()}
            </div>
        </div>
    )
}
