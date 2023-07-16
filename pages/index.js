import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar";
import navbarstyles from '@/styles/Nav.module.css'
import '@/public/whatsapp.png'
import Footer from "@/components/footer";

const services = [
    {
        'img': "https://www.xzect.com/assets/images/services/software-and-app-dev.jpg",
        'first_text': 'Software & App Developement',
    },
    {
        'img': "https://www.xzect.com/assets/images/services/website-dev-and-seo.jpg",
        'first_text': 'Website Development & SEO',
    }, {
        'img': "https://www.xzect.com/assets/images/services/cloud-services.jpg",
        'first_text': 'Cloud Services',
    }, {
        'img': "https://www.xzect.com/assets/images/services/robotics.jpg",
        'first_text': 'Robotics & Automation',
    }, {
        'img': "https://www.xzect.com/assets/images/services/3d-printing-and-prototyping.jpg",
        'first_text': '3D Printing & Prototyping',
    }, {
        'img': "https://www.xzect.com/assets/images/services/data-science.jpg",
        'first_text': 'Data Science & Analytics',
    }, {
        'img': "https://www.xzect.com/assets/images/services/machine-learning.jpg",
        'first_text': 'AI & Machine Learning',
    }, {
        'img': "https://www.xzect.com/assets/images/services/ar-vr.jpg",
        'first_text': 'IOT, AR & VR',
    }, {
        'img': "https://www.xzect.com/assets/images/services/blockchain.jpg",
        'first_text': 'Blockchain',
    }, {
        'img': "https://www.xzect.com/assets/images/services/tech-consultancy.jpg",
        'first_text': 'Tech Consultancy',
    }, {
        'img': "https://www.xzect.com/assets/images/services/research-and-dev.jpg",
        'first_text': 'Research & Development',
    },
]
const techStack = [
    {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/cpp.png',
        'first_text': 'C++'
    }
    , {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/python.png'
        , 'first_text': 'Python',
    }
    , {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/golang.png'
        , 'first_text': 'Golang',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/nodejs.png'
        , 'first_text': 'Nodejs',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/react.png'
        , 'first_text': 'Reactjs',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/angular.png'
        , 'first_text': 'Angular',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/vuejs.png'
        , 'first_text': 'Vuejs',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/swift.png'
        , 'first_text': 'Swift',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/wordpress.png'
        , 'first_text': 'Wordpress',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/magento.png'
        , 'first_text': 'Magento',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/laravel.png'
        , 'first_text': 'Laravel',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png'
        , 'first_text': 'Codeigniter',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png'
        , 'first_text': 'Django',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/solidity.png'
        , 'first_text': 'Solidity',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/flutter.png'
        , 'first_text': 'Flutter',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/mysql.png'
        , 'first_text': 'MySQL',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/mongodb.png'
        , 'first_text': 'MongoDB',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/graphql.png'
        , 'first_text': 'GraphQL',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/docker.png'
        , 'first_text': 'Docker',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/nginx.png'
        , 'first_text': 'Nginx',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/ubuntu.png'
        , 'first_text': 'Ubuntu',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/tensorflow.png'
        , 'first_text': 'Tensorflow',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/keras.png'
        , 'first_text': 'Keras',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/opencv.png'
        , 'first_text': 'OpenCV',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/arduino.png'
        , 'first_text': 'Arduino',
    }, {
        'img': 'https://www.xzect.com/assets/images/icons/tech-stack/ros.png'
        , 'first_text': 'ROS',
    }
]
export default function Home() {
    return (
        <>
            <Navbar styles={navbarstyles}/>
            <div className={styles.main_div}>
                <div className={styles.main}>
                    <div
                        className={styles.main_div_image}>
                    </div>

                    <div className={styles.text_n_logo}>
                        <div className={styles.text_part}>
                            <div className={styles.company_text_div}>
                                <span className={styles.text_build}>Build, </span><span
                                className={styles.text_test}>test, </span><span
                                className={styles.text_other}>and </span><span
                                className={styles.text_execute}>execute
                        your ideas</span> <span className={styles.text_other}>with our</span>
                                <span className={styles.text_innovative}> innovative solutions</span><span
                                className={styles.text_test}>.</span>
                            </div>
                        </div>
                        <div className={styles.button_part}>
                            <a className={styles.first_button} href="">
                                <span className={styles.whatsapp_icon}>
                                    <img src={'whatsapp.png'} width={44}
                                         height={44}/>
                                </span>
                                <span>
                                Chat now on Whatsapp
                                </span>
                            </a>
                            <a className={styles.second_button} href="">
                                <span>
                                Explore our Services
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="rotating-box">
                        <div className="single-rb">
                            <div className="front-side">
                                <img src="https://www.xzect.com/assets/images/xzect-logo-space.svg" width={144}
                                     height={144}/>
                            </div>
                            <div className="back-side">
                                <img src="https://www.xzect.com/assets/images/xzect-logo-space.svg" width={144}
                                     height={144}/>
                            </div>
                            <div className="left-side">
                                <img src="https://www.xzect.com/assets/images/xzect-logo-space.svg" width={144}
                                     height={144}/>
                            </div>
                            <div className="right-side">
                                <img src="https://www.xzect.com/assets/images/xzect-logo-space.svg" width={144}
                                     height={144}/>
                            </div>
                            <div className="top-side">
                                <img src="https://www.xzect.com/assets/images/xzect-logo-space.svg" width={144}
                                     height={144}/>
                            </div>
                            <div className="bottom-side">
                                <img src="https://www.xzect.com/assets/images/xzect-logo-space.svg" width={144}
                                     height={144}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.solutions_div}>
                <div className={styles.solution_text_div}>
                    <h2 className={styles.solutions_first_text}>
                        Customised Solutions for All Your Business Needs
                    </h2>
                    <h2 className={styles.solutions_second_text}>
                        Take Your Business to the Next Level with Our Industry-Leading Services
                    </h2>
                </div>
                <div className={styles.solutions_card_div}>
                    {services.map((services, index) => {
                        return (
                            <div key={index} className={styles.card}>
                                <img src={services.img}
                                     alt={"none"} width="330" height="180"/>
                                <p className={styles.services_text}>
                                    {services.first_text}
                                </p>
                                <a href="" className={styles.services__link}>
                                    Get Started
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.tech_stack}>
                <div className={styles.tech_stack_div}>
                    <h2 className={styles.tech_stack_first_text}>
                        Leverage our software & hardware expertise
                    </h2>
                    <h2 className={styles.tech_stack_second_text}>
                        Use our services and tech expertise to create disruptive products & solutions that can
                        revolutionize your business and stay ahead with evolving technological advancements.
                    </h2>
                </div>
                <div className={styles.tech_stack_card_div}>
                    {techStack.map((techStack, index) => {
                        return (
                            <div key={index} className={styles.tect_stack_card}>
                                <img src={techStack.img}
                                     alt={"none"} width="44" height="44"/>
                                <p className={styles.tech_stack_text}>
                                    {techStack.first_text}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.tech_stack_bottom_div}>
                    <button className={styles.explore_tech_stack_button}>Explore out entire tech stack</button>
                </div>
            </div>
            <div className={styles.footer_cta}>
                <div
                    className={styles.main_div_image}>
                </div>
                <div className={styles.footer_cta_first_text}>
                    Innovate. Validate. Launch
                </div>
                <div className={styles.footer_cta_second_text}>
                    Let‘s transform your idea into reality with our MVP development services.
                </div>
                <div className={styles.footer_cta_book_btn}>
                    <button className={styles.footer_btn}>Book a Free Consultation!</button>
                </div>
                <div className={styles.gradiant_border}></div>
            </div>
            <Footer/>
        </>
    )
}
