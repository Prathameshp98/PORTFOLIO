import React, {useEffect, useState, useRef} from "react";

import validator from "../../Utils/validation";

import background from '../../assests/images/background.svg'
import styles from './ContactMain.module.scss'

const ContactMain = React.forwardRef(({updatePos}, ref) => {

    const name = useRef(null)
    const email = useRef(null)
    const message = useRef(null)

    const [validation, setValidation] = useState({
        name: '',
        email: '',
        message: ''
    })

    useEffect(() => {
        updatePos({contact: ref.current.offsetTop -50})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   

    const inputHandler = (e) => {
        if(e.target.id === "name"){ setValidation(prev => { return { ...prev, name: validator.nameValidator(name.current.value) } })  }
        if(e.target.id === "email"){ setValidation(prev => { return { ...prev, email: validator.emailValidator(email.current.value) } }) }
        if(e.target.id === "message"){ setValidation(prev => { return { ...prev, message: validator.messageValidator(message.current.value) } }) }
    }

    const formSubmitHandler = () => {
        if(!validator.nameValidator(name.current.value) && !validator.emailValidator(email.current.value) && !validator.messageValidator(message.current.value)){
            console.log("Response Sent")
        } else {
            console.log("Something went wrong")
        }
        
    }

    return (
        <React.Fragment>
            <img className={styles.common_background} src={background} alt="common-background" />
            <div ref={ref} className={styles.contact}>
                <div className={styles.contact__inner}>
                    <h1 className={styles.contact__header}>Get In Touch</h1>
                    <form action="" className={styles.contact__form}>
                        <div className={styles.contact__input}>
                            <label>Name</label>
                            <input className={validation.name.length ? styles.error : ''} ref={name} type="text" id="name" onChange={inputHandler} />
                            <p>{validation.name}</p>
                        </div>
                        <div className={styles.contact__input}>
                            <label>Email</label>
                            <input className={validation.email.length ? styles.error : ''} ref={email} type="text" id="email" onChange={inputHandler} />
                            <p>{validation.email}</p>
                        </div>
                        <div className={styles.contact__input}>
                            <label>Message</label>
                            <textarea className={validation.message.length ? styles.error : ''} rows={8} ref={message} id="message" onChange={inputHandler}></textarea>
                            <p>{validation.message}</p>
                        </div>
                        <input className={styles.contact__button} type="button" value="Submit" onClick={formSubmitHandler} />
                    </form> 
                </div>     
            </div>
            
        </React.Fragment>
    );
})

export default ContactMain;