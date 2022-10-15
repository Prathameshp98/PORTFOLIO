import React, {useEffect} from "react";

import styles from "./BlogMain.module.scss";

const BlogMain = React.forwardRef(({updatePos}, ref) => {

    useEffect(() => {
        updatePos({blog: ref.current.offsetTop})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <div ref={ref} id="blog" className={styles.blog}>
                <h1>Blog</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse. Dolor magna eget est lorem ipsum dolor. Volutpat lacus laoreet non curabitur gravida arcu ac. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Blandit massa enim nec dui nunc mattis. Commodo elit at imperdiet dui. Consequat interdum varius sit amet mattis vulputate enim nulla. Egestas integer eget aliquet nibh praesent tristique. Ac tortor dignissim convallis aenean et tortor at. Nulla pellentesque dignissim enim sit amet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </React.Fragment>
    );
})

export default BlogMain;