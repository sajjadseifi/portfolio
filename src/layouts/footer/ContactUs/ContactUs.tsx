import React from 'react'
import { ContactForm } from './ContactForm'
import style from './ContactUs.module.css'
import { FcContacts } from 'react-icons/fc'
export const ContactUs = () => {
    return (
        <div className={style.ContactUs}>
            <div className={style.TitleContainer}>
                <div className={style.ContactIcon}>
                    <FcContacts size={80}/>
                </div>
                <h6 className={style.Title}>Contact With Me</h6>
            </div>
            <div className={style.ContactContainer}>
                <ContactForm/>
            </div>
        </div>
    )
}