import React, { useEffect, useState } from "react";

import styles from './ScrollDown.module.scss';
import downArrow from '../../assests/images/down-arrow.png'

const ScrollDown = () => {

    const [isScrolling, setIsScrolling] = useState(true)

    window.addEventListener('scroll', (e) => {
        setIsScrolling(true)
    })

    useEffect(() => {
        setTimeout(() => {
            setIsScrolling(false)
        }, 3000)

    }, [isScrolling])

    return (
        <React.Fragment>
            {!isScrolling ?
                <img className={`${styles.down_arrow} ${styles.up_down}`} src={downArrow} alt="down-arrow"/> : 
                <img className={styles.down_arrow} src={downArrow} alt="down-arrow"/>
            }
        </React.Fragment>
    );
}

export default ScrollDown;