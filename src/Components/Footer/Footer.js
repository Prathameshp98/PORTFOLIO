import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <React.Fragment>
            <div className={styles.copyright}>
                <p>&#169;Copyright 2023. Made by <span>Prathamesh Patil</span></p>
            </div> 
        </React.Fragment>
    )
}

export default Footer
