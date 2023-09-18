import React from 'react'
import './SlidingTab.css'

type Props = {
    title: string
    tabs: string[]
    selectedTab: string
    onChange: (selection: string) => void
}

export default function SlidingTab({ title, tabs, selectedTab, onChange }: Props) {

    const renderTabs = () => {
        return tabs.map((tab, index) => (
            <button
                className={tab === selectedTab ? 'SlidingTab__Tab SlidingTab__Tab__Selected' : 'SlidingTab__Tab'}
                key={index}
                onClick={() => onChange(tab)}
                >
                {tab}
            </button>
        ))
    }

    return (
        <div className='SlidingTab__Main'>
            <h4>{title}</h4>
            <div className='SlidingTab__Container' style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
                {renderTabs()}
            </div>
        </div>
    )
}
