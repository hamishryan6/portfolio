import React, { useEffect, useState } from 'react'
import './Playground.css'
import headerImageDark from '../../assets/images/componentHeroDark.png'
import headerImageLight from '../../assets/images/componentHeroLight.png'
import Builder from '../../components/Builder/Builder'
import { useModalContext } from '../../Context'

export default function Playground() {

  const { theme } = useModalContext()

  return (
    <div className='Page__Main'>

      <div className='Secondary__Header'>
        <div className='Secondary__Header__Container'>

          <img src={theme === 'Dark' ? headerImageDark : headerImageLight} className='Secondary__Header__Image' />

          <div className='Secondary__Header__Content'>
            <div className='Secondary__Header__Text'>
              <h2>CSS Component Builder</h2>
              <p>Drawing inspiration from DaisyUI, I've built a CSS component playground enabling users to swiftly tweak components using predefined CSS values. These components demonstrate my web development expertise, innovation, and dedication to crafting exceptional user interfaces.</p>
            </div>
            {/* <button>Start customising</button> */}
          </div>

        </div>
      </div>

      <div className='Divider__Container'>
        <div className='Divider' />
      </div>

      <div className='Section__Content'>
        <Builder title='Blog Card' />

      </div>
    </div>
  )
}
