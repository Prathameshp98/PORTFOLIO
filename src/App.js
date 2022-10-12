import React from 'react';

import styles from './App.module.scss';
import background from './assests/images/background.svg'
import SidebarMain from './Components/Sidebar/SidebarMain';
import HomeMain from './Components/Home/HomeMain';
import SkillsMain from './Components/Skills/SkillsMain';
import WorkMain from './Components/Work/WorkMain';
import BlogMain from './Components/Blog/BlogMain';
import ContactMain from './Components/Contact/ContactMain';
import ScrollDown from './Components/Extras/SrollDown';

function App() {
  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      <SidebarMain />
      <HomeMain />
      <SkillsMain />
      <WorkMain />
      <BlogMain />
      <ContactMain />
      <ScrollDown />
    </React.Fragment>
  );
}

export default App;
