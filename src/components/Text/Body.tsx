import React from "react"
import { BODY1 } from "../../constants/color"
import style from './Text.module.css'

interface BodyProps {
    children:any,
    size?:number
}
export const Body =(props:BodyProps)=>{
    return <p 
    style={{
        color:BODY1,
        fontSize:11,
        fontWeight:'bold'
    }}
    className={style.Body}>{props.children}</p>
}