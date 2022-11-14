import React from 'react'
import style from './Footer.module.css'
import { ContactUs } from './footer/ContactUs/ContactUs'
import { SocialMedia } from './footer/SocialMedias/SocialMedia'
import { Navigation } from './header/navigation/Navigatin'

export const Footer = () => {
    return (
        <>
        <div className={[style.Footer,style.Wrapper]}>
            <div className={style.ContactUs}>
                    <ContactUs/>
            </div>
            <div className={style.Information}>
                <h3 className={style.Title}>Information</h3>
                <h6 className={style.Mail}>Sajjadseifilor@gmail.com</h6>
                <div className={style.NavContainer}>
                    <Navigation/>
                </div>
            </div>
        </div>
        <div className={style.Footer}>
            <div className={style.ContactUs}>
                <div className={style.CopyRight}>
                    <span className={style.Name}>Sajjad Seifi</span>
                    <span className={style.CopyText}>c 2020. All Rights Reserved</span>
                </div>
            </div>
            <div className={style.Information}>
                <div className={style.SocialContainer}>
                    <SocialMedia/>
                </div>
            </div>
        </div>
        </>
    )
}