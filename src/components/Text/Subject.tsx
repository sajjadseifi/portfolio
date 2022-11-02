import React from "react"
import style from './Text.module.css'
interface SubjectProps {
    children:any,
    size?:number
}
export const Subject =(props:SubjectProps)=>{
    return <h2 className={style.Subject}>{props.children}</h2>
}