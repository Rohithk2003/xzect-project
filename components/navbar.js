import styles from '@/styles/Nav.module.css'
import Image from "next/image";
import {useEffect, useState} from "react";
import style from '@/styles/TopBar.module.css'

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
const popular = [
    "Magento Development",
    "Wordpress Development",
    "Ecommerce",
    "Shopify",
    "NFT",
    "MVP",
    "Drones",
    "View all Popular",
]
export default function Navbar() {
    const [topbarVisible, setVisibility] = useState(false)
    const [changeState, setState] = useState({
        line1: false, line2: false, line3: false
    })
    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        const el = document.getElementById("modal")
        if (topbarVisible) {
            html.style.overflow = "hidden"
        } else {
            html.style.overflow = "auto"

        }

    }, [topbarVisible])

    function onClickHandler() {
        if (changeState.line2) {
            setState({
                line1: false,
                line2: false,
                line3: false,
            })
        } else {
            setState({
                line1: true,
                line2: true,
                line3: true,
            })
        }
        setVisibility(!topbarVisible)
    }

    return (
        <>
            <nav>
                <div className={styles.container}>
                    <div id="main_header" className={styles.main_header}>
                        <div className={styles.main_div} id="logotext">
                            <Image src="https://www.xzect.com/assets/images/xzect-logo.svg" width={38} height={38}
                                   alt="logo"/>
                            <div className={styles.main_text}>Xzect</div>
                        </div>
                        <button onClick={onClickHandler}
                                className={`${styles.hamburger_div}`}>
                            <div className={styles.hamburger}>
                                <div
                                    className={`${styles.line1} ${changeState.line1 ? styles.line1_active : ''}`}></div>
                                <div
                                    className={`${styles.line2} ${changeState.line2 ? styles.line2_active : ''}`}></div>
                                <div
                                    className={`${styles.line3} ${changeState.line3 ? styles.line3_active : ''}`}></div>
                            </div>
                        </button>
                    </div>
                    <div className={styles.gradiant_border}></div>
                </div>

            </nav>
            <div className={`${styles.topbar_style} ${topbarVisible ? styles.topbar_visible : ''}`}>
                <div className={style.topbar}>
                    <div className={style.column}>
                        <p className={style.column_heading}>Popular</p>
                        {popular.map((pop, index) => {
                            return (
                                <p key={index}><a href="#" className={style.links}>{pop}</a></p>
                            )
                        })}
                    </div>
                    <div className={style.column}>
                        <p className={style.column_heading}>Services</p>
                        {services.map((service, index) => {
                            return (
                                <p key={index}><a href="#" className={style.links}>{service}</a></p>
                            )
                        })}
                    </div>
                    <div className={style.column}>
                        <p className={style.column_heading}>Industries</p>
                        {industries.map((industry, index) => {
                            return (
                                <p key={index}><a href="#" className={style.links}>{industry}</a></p>
                            )
                        })}
                    </div>

                    <div className={style.column}>
                        <p className={style.column_heading}>Resources</p>
                        {resources.map((resource, index) => {
                            return (
                                <p key={index}><a href="#" className={style.links}>{resource}</a></p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}