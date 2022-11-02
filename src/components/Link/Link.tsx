import React from 'react'
import style from './Link.module.css'
interface LinkProps { 
    children:any,
    
}
export const Link =(props:LinkProps)=>{
    return <a className={style.Link} href="#" {...props}>
        {props.children}
    </a>
}