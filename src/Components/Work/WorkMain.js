import React, {useEffect, useState} from "react";

import styles from "./WorkMain.module.scss";

import useWindowDimensions from "../../Utils/Window/window";

const WorkMain = React.forwardRef(({updatePos}, ref) => {

    const { width } = useWindowDimensions()

    const[tab, setTab] = useState({
        tab1: true,
        tab2: false
    })

    useEffect(() => {
        updatePos({work: ref.current.offsetTop -50})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const tabToggler = (element) => {
        if(element === 'tab1'){
            setTab({
                tab1: true,
                tab2: false
            })
        } else {
            setTab({
                tab1: false,
                tab2: true
            })
        }
        
    }

    return (
        <React.Fragment>
            <div ref={ref} className={styles.work}>
                <h2>Where I've Worked</h2>
 
                    <div className={`${styles.work__tabs}`}>
                        <div className={`${styles.tabs}`}>
                            <div onClick={() => tabToggler("tab1")} className={`${styles.each__tab} ${tab.tab1 ? styles.active : ''}`}>
                                <p>uFaber</p>
                            </div>
                            <div onClick={() => tabToggler("tab2")} className={`${styles.each__tab} ${tab.tab2 ? styles.active : ''}`}>
                                <p>Accenture</p>
                            </div>
                        </div>
                        {width <= 1150 && <hr className={`${styles.hr}`}/>}
                        <div className={`${styles.content}`}>
                            <div id="uFaber" className={`${styles.each__content}`} style={{display: tab.tab1 ? '' : 'none'}}>
                                <div>
                                    <h2>Software Developer <span>@uFaber</span></h2>
                                    <p>May 2022 - Present</p>
                                </div>
                                <ul>
                                    <li>Write modern, performant, maintainable code for a diverse array of clients and internal projects.</li>
                                    <li>Worked on a variety of different languages, platforms, frameworks and content management systems such as HTML, CSS, JavaScript, Gatsby, Strapy, React, Node, Express and databases like MongoDB and MySQL</li>
                                    <li>Created highly interactive web applications with responsive UI, proper SEO, error handling, and high performance.</li>
                                </ul>
                            </div>
                            <div id="Accenture" className={`${styles.each__content}`} style={{display: tab.tab2 ? '' : 'none'}}>
                                <div>
                                    <h2>Associate SE <span>@Accenture</span></h2>
                                    <p>Sept 2021 - Apr 2022</p>
                                </div>
                                <ul>
                                    <li>Undergone SAP Plant Management (PM) P2P domain and SAP GUI Tool training.</li>
                                    <li>Extensive participation in functional testing of SAP-based applications.</li>
                                    <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                
            </div>
        </React.Fragment>
    );
})

export default WorkMain;