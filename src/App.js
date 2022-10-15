import React, {useState, useEffect} from 'react';

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

  const[scroll, setScroll] = useState()
  const[position, setPosition] = useState({
    home: 0,
    skills: 0,
    work: 0,
    blog: 0,
    contact: 0
  })

  // const[count, setState] = useState(0)
  // useEffect(() => {
  //   // Infinite loop!
  //   setTimeout(() => {
  //     console.log(count)
  //     setState(count => count+1);
  //   }, 2000)
    
  // });

  useEffect(() => {
  
    
      setTimeout(() => {
        window.onscroll = () => { 
        setScroll(Math.round(window.scrollY))
        }
      }, 1500)
    

  }, [scroll])

  const updatePos = (pos) => {

    if(pos.hasOwnProperty("skills")){
      setPosition((prev) => {
        return {...prev, skills: pos.skills}
      })
    } else if(pos.hasOwnProperty("work")){
      setPosition((prev) => {
        return {...prev, work: pos.work}
      })
    } else if(pos.hasOwnProperty("blog")){
      setPosition((prev) => {
        return {...prev, blog: pos.blog}
      })
    } else if(pos.hasOwnProperty("contact")){
      setPosition((prev) => {
        return {...prev, contact: pos.contact}
      })
    } 

  }


  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      <SidebarMain scroll={scroll} position={position} />
      <HomeMain />
      <SkillsMain updatePos={updatePos} />
      <WorkMain updatePos={updatePos} />
      <BlogMain updatePos={updatePos} />
      <ContactMain updatePos={updatePos} />
      <ScrollDown />
    </React.Fragment>
  );
}

export default App;
