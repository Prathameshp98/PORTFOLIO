import React from 'react';

import styles from './App.module.scss';
import background from './assests/images/background.svg'
import SidebarMain from './Components/Sidebar/SidebarMain';
import HomeMain from './Components/Home/HomeMain';
import BlogMain from './Components/Blog/BlogMain';
import ScrollDown from './Components/Extras/SrollDown';

function App() {
  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      <SidebarMain />
      <HomeMain />
      <BlogMain />
      <ScrollDown />
    </React.Fragment>
  );
}

export default App;
