/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";

import styles from "./ProjectMain.module.scss";

import boardgame from '../../assests/images/board-game.webp'
import weatherApp from '../../assests/images/weatherApp.webp'
import BlogClub from '../../assests/images/blog-club.webp'
import comingSoon from '../../assests/images/coming-soon.jpg'

import projectData from '../../Data/projects.json'

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
                        {projectData.map(each => (
                            <div className={`${styles.project__card}`}>
                                <p className={`${styles.project__type}`}>{each.type}</p>
                                <h2 className={`${styles.project__name}`}>{each.name}</h2>
                                <p className={`${styles.project__description}`}>{each.description}</p>
                                <div className={`${styles.project__tools}`}>
                                    {each.tools.map(tool => (
                                        <p>{tool}</p>
                                    ))}
                                </div>
                                {!each.status && <p className={`${styles.status}`}><span style={{fontSize: '20px', color: '#FFC300'}}>Under Development</span></p>}
                                <div className={`${styles.project__button}`} >
                                    <a href={each.live_link} target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                    <a href={each.github_link} target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                </div>
                            </div>   
                        ))}
                    </div>
                }
                {width > 1150 &&
                    <>
                        <div className={`${styles.project__container__desktop}`}>

                            {/* {projectData.map((each,index) => (
                                <div className={`${styles.project__card__desktop}`} >
                                    {index%2 === 0 ?
                                        <>
                                            <div className={`${styles.left}`}>
                                                <img src='../../assests/images/board-game.webp' alt="project-img" />
                                            </div>
                                            <div className={`${styles.right}`}>
                                                <p className={`${styles.project__type__desktop}`}>{each.type}</p>
                                                <h2 className={`${styles.project__name__desktop}`}>{each.name}</h2>
                                                <div className={`${styles.project__description__desktop}`}>
                                                    <p>{each.description}</p>
                                                </div>
                                                <div className={`${styles.project__tools__desktop}`}>
                                                    {each.tools.map(tool => (
                                                        <p>{tool}</p>
                                                    ))}
                                                </div>
                                                {!each.status && <p className={`${styles.status}`}><span style={{fontSize: '20px', color: '#FFC300'}}>Under Development</span></p>}
                                                <div className={`${styles.project__button__desktop}`} >
                                                    <a href={each.live_link} target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                                    <a href={each.github_link} target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                                </div>
                                            </div>
                                        </>  
                                    :
                                        <>
                                            <div className={`${styles.right}`}>
                                                <p className={`${styles.project__type__desktop}`}>{each.type}</p>
                                                <h2 className={`${styles.project__name__desktop}`}>{each.name}</h2>
                                                <div className={`${styles.project__description__desktop}`}>
                                                    <p>{each.description}</p>
                                                </div>
                                                <div className={`${styles.project__tools__desktop} ${styles.middle}`}>
                                                    {each.tools.map(tool => (
                                                        <p>{tool}</p>
                                                    ))}
                                                </div>
                                                {!each.status && <p className={`${styles.status}`}><span style={{fontSize: '20px', color: '#FFC300'}}>Under Development</span></p>}
                                                <div className={`${styles.project__button__desktop} ${styles.middle}`} >
                                                    <a href={each.live_link} target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                                    <a href={each.github_link} target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                                </div>
                                            </div>
                                            <div className={`${styles.left}`}>
                                                <img src='../../assests/images/board-game.webp' alt="project-img" />
                                            </div>
                                        </>
                                    }
                                    
                                </div>
                            ))} */}


                            <div className={`${styles.project__card__desktop}`}>
                                <div className={`${styles.left}`}>
                                    <img src={BlogClub} alt="project-img" />
                                </div>
                                <div className={`${styles.right}`}>
                                    <p className={`${styles.project__type__desktop}`}>Featured Project</p>
                                    <h2 className={`${styles.project__name__desktop}`}>Blog Club</h2>
                                    <div className={`${styles.project__description__desktop}`}>
                                        <p>Write you throughts through this interactive and easy to use Blog application, which lets you right and see what others have wrote. Just Sign up and use.</p>
                                    </div>
                                    <div className={`${styles.project__tools__desktop}`}>
                                        <p>NodeJS</p>
                                        <p>Express</p>
                                        <p>Mongoose</p>
                                        <p>JSX</p>
                                        <p>Auth</p>
                                        <p>SASS</p>
                                    </div>
                                    <p className={`${styles.status}`}><span style={{fontSize: '20px', color: '#FFC300'}}>Under Development</span></p>
                                    <div className={`${styles.project__button__desktop}`} >
                                        <a href="https://blogclub-prathameshpatil2812.b4a.run" target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                        <a href="https://github.com/Prathameshp98/blog-club" target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.project__card__desktop}`}>
                                <div className={`${styles.right}`}>
                                    <p className={`${styles.project__type__desktop} ${styles.middle}`}>Featured Project</p>
                                    <h2 className={`${styles.project__name__desktop} ${styles.middle}`}>Weather Reporter</h2>
                                    <div className={`${styles.project__description__desktop} ${styles.middle}`}>
                                        <p>This application displayes detailed weather parameters of any location. It further consists of Goelocation services and featured sections. The app uses the public APIs provided by openWeather.</p>
                                    </div>
                                    <div className={`${styles.project__tools__desktop} ${styles.middle}`}>
                                        <p>ReactJS</p>
                                        <p>Redux</p>
                                        <p>JSX</p>
                                        <p>APIs</p>
                                        <p>JavaScript</p>
                                        <p>CSS</p>
                                    </div>
                                    <div className={`${styles.project__button__desktop} ${styles.middle}`} >
                                        <a href="https://zesty-rolypoly-7fbc41.netlify.app/" target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                        <a href="https://github.com/Prathameshp98/Weather-App" target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                    </div>
                                </div>
                                <div className={`${styles.left}`}>
                                    <img src={weatherApp} alt="project-img" />
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
                                        <a href="https://grand-narwhal-943179.netlify.app/" target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                        <a href="https://github.com/Prathameshp98/BoardGame" target="_blank" rel="noreferrer"><svg width={35} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
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