import './Portfolio.css'
import { useModalContext } from '../../Context'
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import InvoiceGenerator from '../../assets/images/invoice-generator.png'
import PGWWebsite from '../../assets/images/pgw-website.jpg'
import memble from '../../assets/images/memble.jpg'
import ae from '../../assets/images/ae.jpg'
import hometownnp from '../../assets/images/hometownnp.jpg'
import FlightTracker from '../../assets/images/flight-tracker.jpg'

export default function Portfolio() {

    return (
        <div className='Page__Main'>

            <div className='Secondary__Header'>
                    <div className='Secondary__Header__Text'>
                        <h2>Portfolio of work</h2>
                        <p>Below is a collection of projects I have designed and developed. These products are a mix of both personal and employed projects.</p>
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
                    description={`As Hutch Table Accessories launched their wholesale site, they needed an internal tool to help with shipping invoices and tax receipts. I designed and developed a simple web app to allow them to enter the appropriate information from an order and then download a formatted PDF using the react-pdf library. Although I don't have an exact copy of the real project I created for Hutch, I have uploaded a replica with generic branding to GitHub`}
                    tags={['Design', 'Frontend']}
                    tech={['AWS', 'Figma', 'React', 'Typescript']}
                    links={[{
                        label: 'GitHub',
                        link: 'https://github.com/hamishryan6/invoicing'
                    }]}
                    image={InvoiceGenerator}
                />

                <PortfolioItem
                    title='Flight Tracker'
                    year='2023'
                    description={`As part of a coding challenge for a development role, I was tasked with creating a Flight Tracking site in Vue. It was my first experience with Vue, and I found it quite enjoyable to delve into a new framework, especially as I aimed to complete the task using Typescript. I designed a UI in Figma and proceeded to implement these designs in the frontend. For flight data, I received an API key from the company granting access to Airlabs, a global aviation database. This provided a great opportunity to showcase my proficiency with REST APIs, ensuring efficient API calls throughout the platform.`}
                    tags={['Design', 'Frontend']}
                    tech={['Figma', 'Typescript', 'Vue.js']}
                    links={[
                        {
                            label: 'GitHub',
                            link: 'https://github.com/hamishryan6/flight-tracker'
                        },
                        {
                            label: 'Airlabs',
                            link: 'https://airlabs.co'
                        }
                    ]}
                    image={FlightTracker}
                />

                <PortfolioItem
                    title='Marketing Website'
                    company='PGW Financial'
                    year='2022'
                    description={`During my time at Moonward, I did full design and development of a Marketing website for a client called PGW Financial. This was designed in Adobe XD and Developed using Webflow. An interesting part of this project was using Firebase Auth and Firestore to create a functional login for users with a PGW account. It was great to learn some backend technologies and implement it on a client friendly platform like Webflow.`}
                    tags={['Design', 'Frontend', 'Backend']}
                    tech={['CSS', 'HTML', 'Firebase', 'Webflow', 'XD']}
                    links={[{
                        label: 'Website',
                        link: 'https://www.pgwfinancial.com.au'
                    }]}
                    image={PGWWebsite}
                />

                <PortfolioItem
                    title='Mobile App & Web App'
                    company='Hometown NP'
                    year='2022'
                    description={`Hometown NP is a mobile application that allows users to book telehealth doctors appointments, which would then be managed by the doctors web app. A main focus of mine was to create something minimal and easy to understand, a very important factor when working with healthcare applications. As the demographic for this app is so wide, the UI needed to feel familiar to users, creating an experience that didn't require much cognitive thought when booking a doctor's appointment. Although this app did not hit the development stage, I am really happy with how the designs were finished and I hope to draw inspiration from it in the future.`}
                    tags={['Design']}
                    tech={['Webflow', 'XD']}
                    image={hometownnp}
                />

                <PortfolioItem
                    title='Mobile App'
                    company='Memble'
                    year='2022'
                    description={`Memble is a membership based application that connects businesses to their customer base. Through ideation and wireframing, I created the branding and UI/UX for the Memble app. This was a solo project during the design phase where I worked closely with the Founder of Memble to create a seamless user-experience while also creating customer engagement to their local businesses. Once designs were approved I joined the Frontend Development team and worked on parts of the app using React Native. I am really happy with how development was implemented to ensure pixel perfect outcomes.`}
                    tags={['Design', 'Frontend']}
                    tech={['Illustrator', 'Lottie', 'Photoshop', 'React Native', 'XD']}
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
                    description={`A&E is a local yard maintenance company in Brisbane. I put together a simple website for them to establish their online presence. Although we are still adding the finishing touches to this site, once launched it will be a simple way for users to get in touch with the A&E team. I designed this site in Figma and developed it in React. At this stage, the site is sitting in an AWS S3 bucket as a static site until we get photography taken and some copy written.`}
                    tags={['Design', 'Frontend']}
                    tech={['AWS', 'Figma', 'Illustrator', 'React']}
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