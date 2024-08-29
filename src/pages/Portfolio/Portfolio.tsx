import './Portfolio.css'
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import InvoiceGenerator from '../../assets/images/invoice-generator.png'
import PGWWebsite from '../../assets/images/pgw-website.jpg'
import memble from '../../assets/images/memble.jpg'
import ae from '../../assets/images/ae.jpg'
import hometownnp from '../../assets/images/hometownnp.jpg'
import FlightTracker from '../../assets/images/flight-tracker.jpg'
import hutch from '../../assets/images/hutch.jpg'
import bracketBuilder from '../../assets/images/bracket-builder.jpg'
import bookingSystem from '../../assets/images/booking-system.jpg'

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
                    id='booking-system'
                    title='Parking Booking System'
                    year='2023'
                    description={`I was asked by a local apartment complex to develop a booking system for their additional residential parks. This system took into consideration the resident's unit number and whether they had already booked that week. Resident's could manage their bookings and save their registration numbers.`}
                    tags={['Design', 'Frontend', 'Backend']}
                    tech={['AWS', 'Figma', 'Firebase', 'Illustrator', 'Lottie', 'React', 'Typescript']}
                    image={bookingSystem}
                />

                <PortfolioItem
                    id='bracket-builder'
                    title='Bracket Builder'
                    year='2023'
                    description={`For this project I wanted to create a platform that allowed users to create their own sports bracket online. I took on the challenge of designing the UI, and developing both the frontend and backend code for Bracket Builder. Although I am still working on things like responsiveness and bug fixes, users are able to create a 4-team or 8-team bracket and enter results for each matchup. If the user creates an account, their bracket will be saved for them to edit and view once they close their browser.`}
                    tags={['Design', 'Frontend', 'Backend']}
                    tech={['AWS', 'Figma', 'Firebase', 'Illustrator', 'Lottie', 'React', 'Typescript']}
                    links={[{
                        label: 'Website',
                        link: 'https://main.db4rr0odltsn9.amplifyapp.com/builder'
                    }]}
                    image={bracketBuilder}
                />

                <PortfolioItem
                    id='invoice-generator'
                    title='Invoice and Receipt Generator'
                    company='Hutch Table Accessories'
                    year='2023'
                    description={`As Hutch Table Accessories launched their wholesale site, they needed an internal tool to help with shipping invoices and tax receipts. I designed and developed a simple web app to allow them to enter the appropriate information from an order and then download a formatted PDF using the react-pdf library. Although I don't have an exact copy of the real project I created for Hutch, I have uploaded a replica with generic branding to GitHub`}
                    tags={['Design', 'Frontend']}
                    tech={['AWS', 'Figma', 'React', 'Typescript']}
                    // links={[{
                    //     label: 'GitHub',
                    //     link: 'https://github.com/hamishryan6/invoicing'
                    // }]}
                    image={InvoiceGenerator}
                />

                <PortfolioItem
                    id='flight-tracker'
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
                    id='hutch'
                    title='Shopify Site'
                    company='Hutch Table Accessories'
                    year='2021 - 2023'
                    description={`As Hutch Table Accessories started their online store, I was in charge of designing and developing the entire retail site on Wix, which would then be later migrate to Shopify. This site design provides its users with a intuitive experience, leading to more sales and less technical issues for the company. In addition to design, I have also added in some custom Liquid code creating custom components in the web builder, as well as creating 'locked' pages that can only be viewed by members to the site.`}
                    tags={['Design', 'Frontend']}
                    tech={['CSS', 'HTML', 'Shopify']}
                    links={[{
                        label: 'Website',
                        link: 'https://www.hutchtableaccessories.com'
                    }]}
                    image={hutch}
                />

                <PortfolioItem
                    id='pgw-financial'
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
                    id='hometown-np'
                    title='Mobile App & Web App'
                    company='Hometown NP'
                    year='2022'
                    description={`Hometown NP is a mobile application that allows users to book telehealth doctors appointments, which would then be managed by the doctors web app. A main focus of mine was to create something minimal and easy to understand, a very important factor when working with healthcare applications. As the demographic for this app is so wide, the UI needed to feel familiar to users, creating an experience that didn't require much cognitive thought when booking a doctor's appointment. Although this app did not hit the development stage, I am really happy with how the designs were finished and I hope to draw inspiration from it in the future.`}
                    tags={['Design']}
                    tech={['Webflow', 'XD']}
                    image={hometownnp}
                />

                <PortfolioItem
                    id='memble'
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
                    id='ae-gardening-maintenance'
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