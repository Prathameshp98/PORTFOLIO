import React from 'react';

import styles from './App.module.scss';
import SidebarMain from './Components/Sidebar/SidebarMain';
import background from './assests/images/background.svg'

function App() {
  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      <SidebarMain />
    </React.Fragment>
  );
}

export default App;
