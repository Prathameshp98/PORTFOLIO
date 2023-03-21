import React, {useEffect} from "react";

import styles from './SkillsMain.module.scss';

const SkillsMain = React.forwardRef(({updatePos}, ref) => {

    useEffect(() => {
        updatePos({skills: ref.current.offsetTop - 50})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <React.Fragment>
            <div ref={ref} className={styles.skills}>
                <div className={`${styles.top}`}>
                    <h2>About Me</h2>
                    <p>Since the beginning of my career as a web developer, I have built numerous websites and web applications and collaborated in a variety of spaces.</p>
                    <p>I build successful responsive websites that are fast, simple to use, and adopt best practices. Front-end development, HTML, CSS, JS, ReactJs building small and medium web apps, custom plugins, features, animations, and coding interactive layouts are my main areas of expertise. I also have a lot of experience with Node and FastAPI for backend apps. You can see examples of my work in the Projects section.</p>
                    <p>I'm interested in positions where I can contribute, learn, and grow. Please contact me if you have any good opportunities that match my experience.</p>
                </div>
                <div className={`${styles.bottom}`}>
                    <h2>Skills</h2>
                    <div className={`${styles.skill__cards}`}>
                        <div className={`${styles.card}`}>
                            <p>HTML</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>CSS</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>JavaScript</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>ReactJS</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>Redux</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>Express</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>FastAPI</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>Mongoose</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>SQL</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>Python</p>
                        </div>
                        <div className={`${styles.card}`}>
                            <p>GIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
})

export default SkillsMain;