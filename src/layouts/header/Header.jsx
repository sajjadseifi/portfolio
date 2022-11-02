import React from 'react'
import style from './Header.module.css'
import { Navigation } from './navigation/Navigatin'
import { Social } from './social/Social'
export const Header = () => {
    return <header className={style.Header}>
        <div className={style.FullName}>
            <span className={style.FirstName}>Sajjad</span>
            <span className={style.LastName}>Seifi</span>
        </div>
        <div className={style.Navigation}>
            <Navigation/>
        </div>
        <Social/>
    </header>
}