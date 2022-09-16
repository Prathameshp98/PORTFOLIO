import React from "react";

import styles from './HomeMain.module.scss';

const HomeMain = () => {
    return (
        <React.Fragment>
            <div className={styles.home} >
                <h1 className={styles.heading} >HI, I'M <br/> PRATHAMESH PATIL</h1>
                <h3 className={styles.sub_heading} >Frontend & Backend Developer</h3>
                <p className={styles.description} >
                    I like to craft solid and scalable products with great user interface and user experience, and I love what i do.
                    <br />
                    View my <span className={styles.highlight}>Work</span>, <span className={styles.highlight}>Blog</span> and <span className={styles.highlight}>Contact Me</span> or send me an email at <span className={styles.highlight}>prathameshpatil2812@gmail.com</span>.
                </p>
            </div>
        </React.Fragment>
    );
}

export default HomeMain;