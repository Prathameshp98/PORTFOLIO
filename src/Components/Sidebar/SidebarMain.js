import React from "react";

import styles from "./SidebarMain.module.scss"
import profile from "../../assests/images/profile.png"
import email from "../../assests/images/email.png"
import github from "../../assests/images/github.png"
import linkedin from "../../assests/images/linkedin.png"

const SidebarMain = () => {
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
                            <li><a href="..">Home</a></li>
                            <li><a href="..">Skills</a></li>
                            <li><a href="..">Work</a></li>
                            <li><a href="..">Blog</a></li>
                            <li><a href="..">Contact</a></li>
                            <li className={styles.last_item}></li>
                            <div className={styles.social_links}>
                                <img src={email} alt="email-logo" />
                                <img src={github} alt="github-logo" />
                                <img src={linkedin} alt="linkedin-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default SidebarMain