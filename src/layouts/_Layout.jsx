import React from 'react'
import { Footer } from './Footer'
import { Header } from './header/Header'
import style from './_Layout.module.css'

export const Layout = ({
    children
})=>{
    return (
        <div className={style.Layout}>
            <Header/>
            {children}
            <Footer/>
        </div>
    ) 
}