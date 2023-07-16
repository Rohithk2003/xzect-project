import styles from '@/styles/Footer.module.css'

const services = [
    'Software & App Developement',
    'Website Development & SEO',
    'Cloud Services',
    'Robotics & Automation',
    '3D Printing & Prototyping',
    'Data Science & Analytics',
    'AI & Machine Learning',
    'IOT, AR & VR',
    'Blockchain',
    'Tech Consultancy',
    'Research & Development',
]
const industries = [
    "eCommerce",
    "Hyperlocal",
    "Healthcare",
    "Finance",
    "Education",
    "Gaming",
    "Social Networking",
    "Agriculture",
    "Travel & Aviation",
    "Logistics",
    "Restaurant",
    "Real Estate",
    "View all Industries",
]
const resources = [
    "About",
    "Tech Stack",
    "Contact Us",
    "Careers",
    "Webinars",
    "Terms & Conditions",
    "Privacy Policy",
    "Legal Information",
    "Blog",
    "Youtube(@xzect_labs)",
    "Github(@xzect)",
]
export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.company_title}>
                    <h2 className={styles.column_heading}>Xzect Labs Pvt. Ltd.</h2>
                    <div className={styles.about_data}>Xzect provides a diverse array of services that enable both
                        businesses
                        and individuals to bring their
                        vision to life . Our specialties include software development, website design and SEO, cloud
                        services, robotics and automation, 3D printing and prototyping, data science and analytics, AI
                        and
                        machine learning, IOT, AR and VR, blockchain, and other tech-related services. Our team of
                        experienced professionals is available to assist with the design and development of new
                        products,
                        exploration of robotics and automation possibilities, or any other requirements.
                        <p className={styles.company_data}>
                            Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002
                        </p>
                        <p className={styles.company_data}>
                            CIN: U72200DL2022PTC408714
                        </p>
                        <p className={styles.company_data}>
                            GST: 07AAACX4373J1Z2
                        </p>
                    </div>
                </div>
                <div className={styles.column}>
                    <p className={styles.column_heading}>Services</p>
                    {services.map((service, index) => {
                        return (
                            <p key={index}><a href="#" className={styles.links}>{service}</a></p>
                        )
                    })}
                </div>
                <div className={styles.column}>
                    <p className={styles.column_heading}>Industries</p>
                    {industries.map((industry, index) => {
                        return (
                            <p key={index}><a href="#" className={styles.links}>{industry}</a></p>
                        )
                    })}
                </div>

                <div className={styles.column}>
                    <p className={styles.column_heading}>Resources</p>
                    {resources.map((resource, index) => {
                        return (
                            <p key={index}><a href="#" className={styles.links}>{resource}</a></p>
                        )
                    })}
                </div>

            </div>
            <div className={styles.register_c}>
                <div>© 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </>

    )
}