import React from "react";

import styles from './HomeMain.module.scss';

const HomeMain = React.forwardRef((props, ref) => {

    const downloadHandler = async() => {
        window.location.href = 'https://portfolioapp-prathameshpatil2812.b4a.run/download'
    }

    return (
        <React.Fragment>
            <div ref={ref} className={styles.home} >
                <h1 className={styles.heading} >HI, I'M <br/> PRATHAMESH PATIL</h1>
                <h3 className={styles.sub_heading} >FullStack Web Developer</h3>
                <p className={styles.description} >
                    I love   creating robust, scalable solutions with excellent user interfaces and user experiences.
                    <br />
                    You can view my <span className={styles.highlight}>Work</span>, follow my <span className={styles.highlight}>Blog</span> and <span className={styles.highlight}>get in Touch</span>with me or email me at <span className={styles.highlight}>prathameshpatil2812@gmail.com</span>.
                </p>
                <button className={styles.button} onClick={downloadHandler}>Download Resume</button>
            </div>
        </React.Fragment>
    );
})

export default HomeMain;