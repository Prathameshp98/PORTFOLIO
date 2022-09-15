import React from 'react';

import styles from './App.module.scss';
import background from './assests/images/background.svg'
import SidebarMain from './Components/Sidebar/SidebarMain';
import BlogMain from './Components/Blog/BlogMain';

function App() {
  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      <SidebarMain />
      <BlogMain />
    </React.Fragment>
  );
}

export default App;
