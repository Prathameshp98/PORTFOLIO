import React from "react";

import styles from './HomeMain.module.scss';

const HomeMain = React.forwardRef((props, ref) => {

    return (
        <React.Fragment>
            <div ref={ref} className={styles.home} >
                <h1 className={styles.heading} >HI, I'M <br/> PRATHAMESH PATIL</h1>
                <h3 className={styles.sub_heading} >FullStack Web Developer</h3>
                <p className={styles.description} >
                    I like to craft solid and scalable products with great user interface and user experience, and I love what i do.
                    <br />
                    View my <span className={styles.highlight}>Work</span>, <span className={styles.highlight}>Blog</span> and <span className={styles.highlight}>Contact Me</span> or send me an email at <span className={styles.highlight}>prathameshpatil2812@gmail.com</span>.
                </p>
                <button className={styles.button}>Download Resume</button>
            </div>
        </React.Fragment>
    );
})

export default HomeMain;