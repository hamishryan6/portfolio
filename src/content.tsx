import { Experience } from "./types";
import { generateDurationString } from "./utilities";

export let experience: Experience[] = [
    {
        tech: ["Figma", "Illustrator", "Photoshop", "HTML", "CSS"],
        description: "As a Digital Designer & Frontend Developer at Spirit Super, I assisted with updating the Member Online experience with new features. A key task of mine was rebranding the Member Online platform as Spirit Super and CareSuper merge funds.",
        skills: ["Web Design", "Mobile Design", "Responsive Design", "Wireframing", "Prototyping", "Frontend Development", "GitHub"],
        duration: generateDurationString({start: { month: 2, year: 2024 }}),
        title: 'Digital Designer & Frontend Developer',
        company: 'Spirit Super',
        about: 'Spirit Super is an Australian industry superannuation fund offering a range of investment options and financial planning services. It focuses on generating strong returns for its members to help them achieve their retirement goals.',
        type: 'Full-time',
        isCurrent: true
    },
    {
        tech: ["Figma", "After Effects", "Illustrator", "Photoshop", "Lottie"],
        description: "As a UI/UX Designer at VALD, I was tasked with improving and redesigning multiple products. These changes were implemented based on feedback and identified issues from both external and internal users of VALD products. Each product at the company had its own application. Whether it was for iOS, Android, Web, or WPF, priority was given to using similar patterns and styling to create a cohesive ecosystem across all products.",
        skills: ["Web Design", "Mobile Design", "Responsive Design", "Wireframing", "Prototyping", "User Interview", "Motion Design", "Agile Working Environment"],
        duration: generateDurationString({start: { month: 7, year: 2022}, end: { month: 9, year: 2023 }}),
        title: 'UI/UX Designer',
        company: 'VALD',
        about: 'VALD is a Brisbane-based company that creates performance and health technology for major companies all over the world. VALD produces both hardware and software for physio clinics, sports teams, military groups and more.',
        type: 'Full-time'
    },
    {
        tech: ["After Effects", "Illustrator", "InDesign", "Photoshop", "XD", "Lottie", "React", 'React Native', "Typescript", "HTML", "CSS", "Webflow", 'Firebase', 'AWS'],
        description: "As a UI/UX Designer and Frontend Developer, my role spanned across multiple projects. I was able to independently manage my deliverable timelines and worked as the sole designer for a product. As I gained proficiency in React and React Native, I could bridge the gap between design and development, often transitioning from design to product development on the same project. In addition to product design, I also undertook some branding projects, as well as constructing marketing websites and landing pages on Webflow.",
        skills: ["Web Design", "Mobile Design", "Responsive Design", "Wireframing", "Prototyping", "Motion Design", "Databases", "Frontend Development", "GitHub", "APIs", "Client Communication"],
        duration: generateDurationString({start: { month: 11, year: 2020}, end: { month: 7, year: 2022 }}),
        title: 'UI/UX Designer & Frontend Developer',
        company: 'Moonward',
        about: "Moonward is an app development agency that offers design and development services for both web and mobile applications. It caters to a diverse client base, which spans from privately funded projects to corporate software development.",
        type: 'Full-time'
    },
    {
        tech: ["After Effects", "Illustrator", "InDesign", "Photoshop"],
        description: "As a Digital Designer & Content Manager, I was responsible for creating promotional materials for clients and ensuring the company website remained updated with relevant images and descriptions. During events like Toy Fair, I would design print materials to showcase the products on display and provide clients with any relevant information.",
        skills: ["Content Management", "Client Communication", "Print Design", "Asset Management"],
        duration: generateDurationString({ start: { month: 5, year: 2018}, end: { month: 2, year: 2022 }}),
        title: 'Digital Designer & Content Manager',
        company: 'All Brands Toys',
        about: "All Brands Toys is a toy distributor to toy stores all over Australia. All Brands Toys have one of the largest toy client bases in the country.",
        type: 'Casual'
    },
]

export let education: Experience[] = [
    // {
    //     tech: ["React"],
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     skills: ["Web Design", "Mobile Design", "Responsive Design"],
    //     duration: "2024 - Present",
    //     title: 'Graduate Certificate in IT',
    //     subTitle: 'Web Development Bootcamp',
    //     company: 'QUT',
    //     type: 'Part-time',
    //     isCurrent: true
    // },
    {
        tech: ["Figma", "After Effects", "Illustrator", "InDesign", "Photoshop", "HTML", "CSS"],
        description: `While pursuing this degree, I was exposed to a wide range of design mediums, spanning from typography to software. As my studies progressed, I developed a keen interest in Product Design, which I chose to delve deeper into for my Honours capstone project.<br/>The project, 'NaviGo', focused on providing wayfinding for Brisbane’s public transport system. Accessibility was a primary concern throughout NaviGo's development. I implemented visual adjustments to cater to individuals who are colour-blind or have dyslexia.<br/>Upon the project's completion, I was honoured to receive the Konnect Apps Award for the best Product Design in the graduating class.`,
        skills: ["Web Design", "Mobile Design", "Responsive Design"],
        duration: generateDurationString({ start: { month: 0, year: 2017}, end: { month: 0, year: 2020 }}),
        title: 'Bachelor of Design',
        subTitle: 'Interactive & Visual Design (Honours)',
        company: 'QUT',
        type: 'Full-time'
    }
]