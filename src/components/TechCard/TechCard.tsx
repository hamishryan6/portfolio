import React, { useEffect } from 'react'
import './TechCard.css'
import aftereffects from '../../assets/images/aftereffects.png'
import aws from '../../assets/images/aws.png'
import figma from '../../assets/images/figma.png'
import firebase from '../../assets/images/firebase.png'
import illustrator from '../../assets/images/illustrator.png'
import indesign from '../../assets/images/indesign.png'
import photoshop from '../../assets/images/photoshop.png'
import shopify from '../../assets/images/shopify.jpg'
import react from '../../assets/images/react.png'
import webflow from '../../assets/images/webflow.png'
import xd from '../../assets/images/xd.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import lottie from '../../assets/images/lottie.png'
import typescript from '../../assets/images/typescript.png'
import vue from '../../assets/images/vue.jpg'
import wordpress from '../../assets/images/wordpress.png'
import Tooltip from '../Tooltip/Tooltip'
import { tech } from '../../types'
import { useModalContext } from '../../Context'

type Props = {
    title: tech,
    hasTooltip?: boolean
}

export default function TechCard({ title, hasTooltip }: Props) {

    const { revealObservedElements } = useModalContext()

    const renderImage = (title: tech) => {
        switch (title) {
            case 'After Effects': return aftereffects
            case 'AWS': return aws
            case 'CSS': return css
            case 'Figma': return figma
            case 'Firebase': return firebase
            case 'HTML': return html
            case 'InDesign': return indesign
            case 'Illustrator': return illustrator
            case 'Lottie': return lottie
            case 'Photoshop': return photoshop
            case 'React': return react
            case 'React Native': return react
            case 'Shopify': return shopify
            case 'Typescript': return typescript
            case 'Vue.js': return vue
            case 'Webflow': return webflow
            case 'Wordpress': return wordpress
            case 'XD': return xd
        }
    }

    const renderTitle = () => {
        if (hasTooltip === true) return
        return <div className='TechCard__Title'>{title}</div>
    }

    useEffect(() => {
        if (hasTooltip) return
        revealObservedElements('.TechCard', 0, '20px')
    }, [])

    return (
        <div className={hasTooltip ? 'TechCard show' : 'TechCard'}>
            { hasTooltip && <Tooltip label={title} /> }
            <div className='TechCard__Image'>
                <img src={renderImage(title)} width={'100%'} height={'100%'} />
            </div>
            {renderTitle()}
        </div>
    )
}
