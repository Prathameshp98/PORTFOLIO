import React from "react";

import styles from "./SidebarMain.module.scss"

import profile from "../../assests/images/profile.png"
import email from "../../assests/images/email.png"
import github from "../../assests/images/github.png"
import linkedin from "../../assests/images/linkedin.png"

const SidebarMain = () => {

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
                            <li><a id={styles.home} className={styles.item} href="..">Home</a></li>
                            <li><a id={styles.skills} className={styles.item} href="..">Skills</a></li>
                            <li><a id={styles.work} className={styles.item} href="..">Work</a></li>
                            <li><a id={styles.blog} className={styles.item} href="..">Blog</a></li>
                            <li><a id={styles.contact} className={styles.item} href="..">Contact</a></li>
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