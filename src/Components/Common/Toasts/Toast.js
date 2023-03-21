import React from 'react'

import styles from './Toast.module.scss'
import close from '../../../assests/images/cancel.png'
import error from '../../../assests/images/cross-circle.png'
import warning from '../../../assests/images/shield-exclamation.png'
import success from '../../../assests/images/badge-check.png'

const Toast = (props) => {
    return (
        <div className={`${styles.toast__container}`} style={{border: "2px solid " + props.color }}>
            <img className={`${styles.logo}`} src={success} alt="logo" />
            <div className={`${styles.information}`}>
                <h3 style={{color: props.color}}>Success</h3>
                <p>Hello, world! This is a toast message.</p>
            </div>
            <img className={`${styles.close}`} src={close} alt="close"/>
        </div>
    )
}

export default Toast