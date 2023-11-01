import React from 'react'
import './TechCard.css'
import aftereffects from '../../assets/images/aftereffects.png'
import figma from '../../assets/images/figma.png'
import firebase from '../../assets/images/firebase.png'
import illustrator from '../../assets/images/illustrator.png'
import indesign from '../../assets/images/indesign.png'
import photoshop from '../../assets/images/photoshop.png'
import react from '../../assets/images/react.png'
import webflow from '../../assets/images/webflow.png'
import xd from '../../assets/images/xd.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import lottie from '../../assets/images/lottie.png'
import typescript from '../../assets/images/typescript.png'
import Tooltip from '../Tooltip/Tooltip'
import { tech } from '../../types'

type Props = {
    title: tech,
    hideTitle?: boolean
}

export default function TechCard({ title, hideTitle }: Props) {

    const renderImage = (title: string) => {
        switch (title) {
            case 'After Effects': return aftereffects
            case 'CSS': return css
            case 'Figma': return figma
            case 'Firebase': return firebase
            case 'HTML': return html
            case 'InDesign': return indesign
            case 'Illustrator': return illustrator
            case 'Lottie': return lottie
            case 'Photoshop': return photoshop
            case 'React': return react
            case 'Typescript': return typescript
            case 'Webflow': return webflow
            case 'XD': return xd
        }
    }

    const renderTitle = () => {
        if (hideTitle === true) return
        return <div className='TechCard__Title'>{title}</div>
    }

    return (
        <div className='TechCard'>
            { hideTitle && <Tooltip label={title} /> }
            <div className='TechCard__Image'>
                <img src={renderImage(title)} width={'100%'} height={'100%'} />
            </div>
            {renderTitle()}
        </div>
    )
}
