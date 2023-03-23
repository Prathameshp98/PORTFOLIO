import React, {useEffect} from "react";

import styles from "./ProjectMain.module.scss";

import boardgame from '../../assests/images/board-game.webp'

import useWindowDimensions from "../../Utils/Window/window";

const ProjectMain = React.forwardRef(({updatePos}, ref) => {

    const { width } = useWindowDimensions()

    useEffect(() => {
        updatePos({project: ref.current.offsetTop - 50})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <React.Fragment>
            <div ref={ref} className={styles.project}>
                {width <= 550 && <hr />}
                <h2>Some Things I've Built</h2>

                {width <= 1150 &&
                    <div className={`${styles.project__container}`}>
                        <div className={`${styles.project__card}`}>
                            <p className={`${styles.project__type}`}>Featured Project</p>
                            <h2 className={`${styles.project__name}`}>The Business</h2>
                            <p className={`${styles.project__description}`}>This is a fun game, similar to the business game we used to play in our childhood. Rules are simple and easy to understand in one go.</p>
                            <div className={`${styles.project__tools}`}>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Bootstrap5</p>
                                <p>JavaScript</p>
                                <p>jQuery</p>
                            </div>
                            <div className={`${styles.project__button}`} >
                                <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                        </div>
                        
                        <div className={`${styles.project__card}`}>
                            <p className={`${styles.project__type}`}>Featured Project</p>
                            <h2 className={`${styles.project__name}`}>The Business</h2>
                            <p className={`${styles.project__description}`}>This is a fun game, similar to the business game we used to play in our childhood. Rules are simple and easy to understand in one go.</p>
                            <div className={`${styles.project__tools}`}>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Bootstrap5</p>
                                <p>JavaScript</p>
                                <p>jQuery</p>
                            </div>
                            <div className={`${styles.project__button}`} >
                                <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                        </div>

                        <div className={`${styles.project__card}`}>
                            <p className={`${styles.project__type}`}>Featured Project</p>
                            <h2 className={`${styles.project__name}`}>The Business</h2>
                            <p className={`${styles.project__description}`}>This is a fun game, similar to the business game we used to play in our childhood. Rules are simple and easy to understand in one go.</p>
                            <div className={`${styles.project__tools}`}>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Bootstrap5</p>
                                <p>JavaScript</p>
                                <p>jQuery</p>
                            </div>
                            <div className={`${styles.project__button}`} >
                                <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                            
                        </div>
                    </div>
                }
                {width > 1150 &&
                    <>
                        <div className={`${styles.project__container__desktop}`}>
                            <div className={`${styles.project__card__desktop}`}>
                                <div className={`${styles.left}`}>
                                    <img src={boardgame} alt="project-img" />
                                </div>
                                <div className={`${styles.right}`}>
                                    <p className={`${styles.project__type__desktop}`}>Featured Project</p>
                                    <h2 className={`${styles.project__name__desktop}`}>The Business</h2>
                                    <div className={`${styles.project__description__desktop}`}>
                                        <p>This is a fun game, similar to the business game we used to play in our childhood. Rules are simple and easy to understand in one go.</p>
                                    </div>
                                    <div className={`${styles.project__tools__desktop}`}>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>Bootstrap5</p>
                                        <p>JavaScript</p>
                                        <p>jQuery</p>
                                    </div>
                                    <div className={`${styles.project__button__desktop}`} >
                                        <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.project__card__desktop}`}>
                                <div className={`${styles.right}`}>
                                    <p className={`${styles.project__type__desktop} ${styles.middle}`}>Featured Project</p>
                                    <h2 className={`${styles.project__name__desktop} ${styles.middle}`}>The Business</h2>
                                    <div className={`${styles.project__description__desktop} ${styles.middle}`}>
                                        <p>This is a fun game, similar to the business game we used to play in our childhood. Rules are simple and easy to understand in one go.</p>
                                    </div>
                                    <div className={`${styles.project__tools__desktop} ${styles.middle}`}>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>Bootstrap5</p>
                                        <p>JavaScript</p>
                                        <p>jQuery</p>
                                    </div>
                                    <div className={`${styles.project__button__desktop} ${styles.middle}`} >
                                        <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </div>
                                </div>
                                <div className={`${styles.left}`}>
                                    <img src={boardgame} alt="project-img" />
                                </div>
                            </div>
                            <div className={`${styles.project__card__desktop}`}>
                                <div className={`${styles.left}`}>
                                    <img src={boardgame} alt="project-img" />
                                </div>
                                <div className={`${styles.right}`}>
                                    <p className={`${styles.project__type__desktop}`}>Featured Project</p>
                                    <h2 className={`${styles.project__name__desktop}`}>The Business</h2>
                                    <div className={`${styles.project__description__desktop}`}>
                                        <p>This is a fun game, similar to the business game we used to play in our childhood. Rules are simple and easy to understand in one go.</p>
                                    </div>
                                    <div className={`${styles.project__tools__desktop}`}>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>Bootstrap5</p>
                                        <p>JavaScript</p>
                                        <p>jQuery</p>
                                    </div>
                                    <div className={`${styles.project__button__desktop}`} >
                                        <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        <svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    
                }
                {width <= 550 && <hr />}
            </div>
        </React.Fragment>
    );
})

export default ProjectMain;