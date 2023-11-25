import React, { useEffect, useState } from 'react'
import './EmailLink.css'
import Copy from '../Icons/Copy'
import Tooltip from '../Tooltip/Tooltip'

export default function EmailLink() {

    const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false)
    const [copyTooltip, setCopyTooltip] = useState<string>('Copy email')

    const copyEmail = () => {



        navigator.clipboard.writeText("hamishryan.au@gmail.com").then(
            () => {
                setIsEmailCopied(true)
                setCopyTooltip('Copied!')
            },
            () => {
                setIsEmailCopied(false)
                setCopyTooltip('Try again')
            },
        )
    }

    const resetCopyTooltip = () => {
        setIsEmailCopied(false)
        setTimeout(() => setCopyTooltip('Copy email'), 200)
    }

    useEffect(() => {
        if (!isEmailCopied) return
        setTimeout(resetCopyTooltip, 4000)
    }, [isEmailCopied])


    return (
        <div className='EmailLink__Main'>

            <a className='EmailLink__MailTo__Container' href='mailto:hamishryan.au@gmail.com'>
                <Tooltip label='Click to open mail client' parentIsClickable />
                <div className='EmailLink__MailTo'>hamishryan.au@gmail.com</div>
            </a>

            <div className='EmailLink__Copy__Container'>
                <Tooltip label={copyTooltip} isPersistant={isEmailCopied} parentIsClickable />

                <div className='EmailLink__Copy' onClick={() => copyEmail()}>
                    <Copy color='var(--main-text-colour)' height='100%' width='100%' />
                </div>
            </div>

        </div>
    )
}
