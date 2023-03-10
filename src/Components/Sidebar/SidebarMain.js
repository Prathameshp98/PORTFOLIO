import React, {useState, useEffect} from "react";

import styles from "./SidebarMain.module.scss"

import profile from "../../assests/images/profile.webp"
import email from "../../assests/images/email.png"
import github from "../../assests/images/github.png"
import linkedin from "../../assests/images/linkedin.png"

const SidebarMain = ({scroll, position, setElement}) => {

    // console.log(scroll) 
    // console.log(position)

    const[isActive, setIsActive] = useState({
        home: true,
        skills: false,
        work: false,
        blog: false,
        contact: false
    })

    useEffect(() => {

        if(scroll < position.skills - 50){
            setIsActive({home: true, skills: false, work: false, blog: false, contact: false})
        } else if (scroll < position.work - 50){
            setIsActive({home: false, skills: true, work: false, blog: false, contact: false})
        } else if (scroll < position.blog - 50){
            setIsActive({home: false, skills: false, work: true, blog: false, contact: false})
        } else if (scroll < position.contact - 50){
            setIsActive({home: false, skills: false, work: false, blog: true, contact: false})
        } else if (scroll >= position.contact - 50) {
            setIsActive({home: false, skills: false, work: false, blog: false, contact: true})
        }
        // console.log(isActive)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll])

    const clickHandler = (element) => {
        setElement(element)
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
                            <li><a onClick={() => clickHandler("home")} id={styles.home} className={`${styles.item} ${isActive.home ? styles.active : styles.not_active}`} href="#/">Home</a></li>
                            <li><a onClick={() => clickHandler("skills")} id={styles.skills} className={`${styles.item} ${isActive.skills ? styles.active : styles.not_active}`} href="#/">Skills</a></li>
                            <li><a onClick={() => clickHandler("work")} id={styles.work} className={`${styles.item} ${isActive.work ? styles.active : styles.not_active}`} href="#/">Work</a></li>
                            <li><a onClick={() => clickHandler("blog")} id={styles.blog} className={`${styles.item} ${isActive.blog ? styles.active : styles.not_active}`} href="#/">Blog</a></li>
                            <li><a onClick={() => clickHandler("contact")} id={styles.contact} className={`${styles.item} ${isActive.contact ? styles.active : styles.not_active}`} href="#/">Contact</a></li>
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