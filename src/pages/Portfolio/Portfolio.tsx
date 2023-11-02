import React from 'react'
import './Portfolio.css'
import headerImageDark from '../../assets/images/componentHeroDark.png'
import headerImageLight from '../../assets/images/componentHeroLight.png'
import { useModalContext } from '../../Context'
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import InvoiceGenerator from '../../assets/images/invoice-generator.png'
import PGWWebsite from '../../assets/images/pgw-website.jpg'
import memble from '../../assets/images/memble.jpg'
import ae from '../../assets/images/ae.jpg'

export default function Portfolio() {

    const { theme } = useModalContext()

    return (
        <div className='Page__Main'>

            <div className='Playground__Header'>
                <div className='Playground__Header__Container'>

                    <img src={theme === 'dark' ? headerImageDark : headerImageLight} className='Playground__Header__Image' />

                    <div className='Playground__Header__Text'>
                        <h2>Portfolio of work</h2>
                        <p>Below is a collection of projects I have designed and developed. These products are a mix of both personal and employed projects.</p>
                    </div>

                </div>
            </div>

            <div className='Divider__Container'>
                <div className='Divider' />
            </div>

            <div className='Section__Content'>
                <PortfolioItem
                    title='Invoice and Receipt Generator'
                    company='Hutch Table Accessories'
                    year='2023'
                    description={`As Hutch Table Accessories launched their wholesale site, they needed in internal tool to help with shipping invoices and tax receipts. I designed and developed a simple web app to allow them to enter the appropriate information from an order and then download a formatted PDF using the react-pdf library. Although I don't have an exact copy of the real project I created for Hutch, I have uploaded a replica with generic branding to GitHub`}
                    tags={['Design', 'Frontend', 'Backend']}
                    tech={['AWS', 'Figma', 'React', 'Typescript']}
                    links={[{
                        label: 'GitHub',
                        link: 'https://github.com/hamishryan6/invoicing'
                    }]}
                    image={InvoiceGenerator}
                />

                <PortfolioItem
                    title='Marketing Website'
                    company='PGW Financial'
                    year='2022'
                    description={`During my time at Moonward, a did a full design and development of a Marketing website for a client called PGW Financial. This was designed in Adobe XD and Developed using Webflow. An interesting part of this project was using Firebase Auth and Firestore to create a functional login for users with a PGW account. It was great to learn some backend technologies and implement it on a client friendly platform like Webflow.`}
                    tags={['Design', 'Frontend', 'Backend']}
                    tech={['CSS', 'HTML', 'Firebase', 'Webflow', 'XD']}
                    links={[{
                        label: 'Website',
                        link: 'https://www.pgwfinancial.com.au'
                    }]}
                    image={PGWWebsite}
                />

                <PortfolioItem
                    title='Mobile App'
                    company='Memble'
                    year='2022'
                    description={`Memble is a membership based application that connects businesses to their customer base. Through ideation and wireframing, I created the branding and UI/UX for the Memble app. This was a solo project during the design phase where I worked closely with the Founder of Memble to create a seamless user-experience while also creating customer engagement to their local businesses. Once designs were approved I joined the Frontend Development team and worked on parts of the app using React Native. I am really happy with how development was implemented to ensure pixel perfect outcomes.`}
                    tags={['Design', 'Frontend']}
                    tech={['Illustrator', 'Lottie', 'Photoshop', 'React', 'XD']}
                    links={[{
                        label: 'App Store',
                        link: 'https://apps.apple.com/au/app/memble/id1630272903'
                    }]}
                    image={memble}
                />

                <PortfolioItem
                    title='Marketing Website'
                    company='A&E Gardening and Maintenance'
                    year='2022'
                    description={`A&E is a local yard maintenance company in Brisbane. I put together a simple website for them to establish their online presence. Although we are still adding the finishing touches to this site, once launched it will be a simple way for users to get in touch with the A&E team. I designed this site in Figma and developed it in React. At this stage, the site is sitting in an AWS S3 bucket as a static site until we get photography and some copy written.`}
                    tags={['Design', 'Frontend']}
                    tech={['AWS','Figma', 'Illustrator', 'React']}
                    links={[{
                        label: 'Website',
                        link: 'http://ae-gardening.s3-website-ap-southeast-2.amazonaws.com'
                    }]}
                    image={ae}
                />

            </div>
        </div>
    )
}