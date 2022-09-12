import React from "react";

import styles from "./SidebarMain.module.scss"

const SidebarMain = () => {
    return (
        <React.Fragment>
            <nav>
                <div className={styles.navbar}>
                    <div className={`${styles.container} ${styles.nav_container}`}>
                        <input className={styles.checkbox} type="checkbox" name="" id="" />
                        <div className={styles.hamburger_lines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                        </div>  
                    <div className={styles.logo}>
                        <h1>Navbar</h1>
                    </div>
                    <div className={styles.menu_items}>
                        <li><a href="..">Home</a></li>
                        <li><a href="..">about</a></li>
                        <li><a href="..">blogs</a></li>
                        <li><a href="..">portfolio</a></li>
                        <li><a href="..">contact</a></li>
                    </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default SidebarMain