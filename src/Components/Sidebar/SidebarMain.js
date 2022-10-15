import React, {useRef, useState, useEffect} from "react";

import styles from "./SidebarMain.module.scss"

import profile from "../../assests/images/profile.png"
import email from "../../assests/images/email.png"
import github from "../../assests/images/github.png"
import linkedin from "../../assests/images/linkedin.png"

const SidebarMain = ({scroll, position}) => {

    // console.log(scroll)
    console.log(position)
    const home = useRef(null)
    const skills = useRef(null)
    const work = useRef(null)
    const blog = useRef(null)
    const contact = useRef(null)
    const[isActive, setIsActive] = useState({
        home: true,
        skills: false,
        work: false,
        blog: false,
        contact: false
    })

    useEffect(() => {

        if(scroll < position.skills){
            setIsActive({home: true, skills: false, work: false, blog: false, contact: false})
        } else if (scroll < position.work){
            setIsActive({home: false, skills: true, work: false, blog: false, contact: false})
        } else if (scroll < position.blog){
            setIsActive({home: false, skills: false, work: true, blog: false, contact: false})
        } else if (scroll < position.contact){
            setIsActive({home: false, skills: false, work: false, blog: true, contact: false})
        } else {
            setIsActive({home: false, skills: false, work: false, blog: false, contact: true})
        }
        // console.log(isActive)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll])

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behaviour: 'smooth'
        })
    }

    const emailHandler = () => {
        window.open('mailto:prathameshpatil@gmail.com');
    }


    return (
        <React.Fragment>
            <nav>
                <div className={styles.navbar}>
                    <div className={`${styles.container} ${styles.nav_container}`}>
                        <input className={styles.checkbox} type="checkbox" name="" id="" />
                        <div className={styles.hamburger_lines}>
                            <span className={`${styles.line} ${styles.line1}`}></span>
                            <span className={`${styles.line} ${styles.line2}`}></span>
                            <span className={`${styles.line} ${styles.line3}`}></span>
                        </div>  
                        <div className={styles.menu_items}>
                            <div className={styles.profile}>
                                <img className={styles.profile_picture} src={profile} alt="profile-pic"/>
                            </div>
                            <li onClick={() => scrollToSection(home)}><a id={styles.home} className={`${styles.item} `} href="..">Home</a></li>
                            <li onClick={() => scrollToSection(skills)}><a id={styles.skills} className={styles.item} href="..">Skills</a></li>
                            <li onClick={() => scrollToSection(work)}><a id={styles.work} className={styles.item} href="..">Work</a></li>
                            <li onClick={() => scrollToSection(blog)}><a id={styles.blog} className={styles.item} href="..">Blog</a></li>
                            <li onClick={() => scrollToSection(contact)}><a id={styles.contact} className={styles.item} href="..">Contact</a></li>
                            <li className={styles.last_item}></li>
                            <div className={styles.social_links}>
                                <a href=".." onClick={emailHandler}>
                                    <img src={email} alt="email-logo" />
                                </a>
                                <a href="https://github.com/Prathameshp98" rel="noreferrer" target="_blank">
                                    <img src={github} alt="github-logo" />
                                </a>
                                <a href="https://www.linkedin.com/in/prathamesh-patil-988442197" rel="noreferrer" target="_blank">
                                    <img src={linkedin} alt="linkedin-logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default SidebarMain