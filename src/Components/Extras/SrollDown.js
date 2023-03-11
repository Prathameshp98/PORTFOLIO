import React, { useEffect, useState } from "react";

import styles from './ScrollDown.module.scss';
import downArrow from '../../assests/images/down-arrow.png'

const ScrollDown = (props) => {

    const [isScrolling, setIsScrolling] = useState(true)

    window.addEventListener('scroll', (e) => {
        setIsScrolling(true)
    })

    useEffect(() => {
        setTimeout(() => {
            // console.log(document.body.offsetHeight, props.scroll, window.outerHeight)
            setIsScrolling(false)
            
        }, 3000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
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