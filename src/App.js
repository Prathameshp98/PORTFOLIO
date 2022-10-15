import React, {useRef, useState, useEffect} from 'react';

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

  const home = useRef(null)
  const skills = useRef(null)
  const work = useRef(null)
  const blog = useRef(null)
  const contact = useRef(null)

  const[scroll, setScroll] = useState()
  const[position, setPosition] = useState({
    home: 0,
    skills: 0,
    work: 0,
    blog: 0,
    contact: 0
  })

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

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    let travelTo = 0
    if(elementRef === "home"){ travelTo = position.home }
    else if(elementRef === "skills"){ travelTo = position.skills }
    else if(elementRef === "work"){ travelTo = position.work }
    else if(elementRef === "blog"){ travelTo = position.blog }
    else if(elementRef === "contact"){ travelTo = position.contact }
    window.scrollTo({
        top: travelTo,
        behaviour: 'smooth'
    })
    
  }

  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      <SidebarMain scroll={scroll} position={position} setElement={scrollToSection} />
      <HomeMain id="home" ref={home}/>
      <SkillsMain id="skills" updatePos={updatePos} ref={skills} />
      <WorkMain id="work" updatePos={updatePos} ref={work} />
      <BlogMain id="blog" updatePos={updatePos} ref={blog} />
      <ContactMain id="contact" updatePos={updatePos} ref={contact}/>
      <ScrollDown />
    </React.Fragment>
  );
}

export default App;
