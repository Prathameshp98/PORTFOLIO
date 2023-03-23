import React, {useRef, useState, useEffect} from 'react';

import styles from './App.module.scss';
import background from './assests/images/background.svg'
const Toast = React.lazy(() => import('./Components/Common/Toasts/Toast'))
const SidebarMain = React.lazy(() => import('./Components/Sidebar/SidebarMain'))
const HomeMain = React.lazy(() => import('./Components/Home/HomeMain'))
const SkillsMain = React.lazy(() => import('./Components/Skills/SkillsMain'))
const WorkMain = React.lazy(() => import('./Components/Project/ProjectMain'))
const BlogMain = React.lazy(() => import('./Components/Work/WorkMain'))
const ContactMain = React.lazy(() => import('./Components/Contact/ContactMain'))
const Footer = React.lazy(() => import('./Components/Footer/Footer'))
const ScrollDown = React.lazy(() => import('./Components/Extras/SrollDown'))


function App() {

  const home = useRef(null)
  const skills = useRef(null)
  const project = useRef(null)
  const work = useRef(null)
  const contact = useRef(null)

  const[toastData, setToastData] = useState({
    code: null,
    message: null,
    timeStamp: null
  })
  const[scroll, setScroll] = useState()
  const[position, setPosition] = useState({
    home: 0,
    skills: 0,
    project: 0,
    work: 0,
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
    } else if(pos.hasOwnProperty("project")){
      setPosition((prev) => {
        return {...prev, project: pos.project}
      })
    } else if(pos.hasOwnProperty("work")){
      setPosition((prev) => {
        return {...prev, work: pos.work}
      })
    } else if(pos.hasOwnProperty("contact")){
      setPosition((prev) => {
        return {...prev, contact: pos.contact}
      })
    } 

  }

  const scrollToSection = (elementRef) => {
    
    let travelTo = 0
    if(elementRef === "home"){ travelTo = position.home }
    else if(elementRef === "skills"){ travelTo = position.skills - 50 }
    else if(elementRef === "project"){ travelTo = position.project - 50 }
    else if(elementRef === "work"){ travelTo = position.work - 50 }
    else if(elementRef === "contact"){ travelTo = position.contact - 50 }
    window.scrollTo({
        top: travelTo,
        behaviour: 'smooth'
    })

  }

  const toastHandler = (data) => {
    console.log(data)
    setToastData({
      code: data?.status || data.response.status,
      message: data?.data?.message || data.response.data.message,
      timeStamp: data?.data?.data?.updatedAt || data.response.data.data.updatedAt
    })
    
  }

  // console.log(position)

  return (
    <React.Fragment>
      <img className={styles.common_background} src={background} alt="common-background" />
      {toastData.code && <Toast toastData={toastData} />}
      <SidebarMain scroll={scroll} position={position} setElement={scrollToSection} />
      <HomeMain id="home" ref={home}/>
      <SkillsMain id="skills" updatePos={updatePos} ref={skills} />
      <WorkMain id="project" updatePos={updatePos} ref={project} />
      <BlogMain id="work" updatePos={updatePos} ref={work} />
      <ContactMain id="contact" updatePos={updatePos} ref={contact} toastHandler={toastHandler}/>
      <Footer />
      <ScrollDown scroll={scroll} />
    </React.Fragment>
  );
}

export default App;
