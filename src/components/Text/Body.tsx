import React from "react"
import { BODY1 } from "../../constants/color"
import style from './Text.module.css'

interface BodyProps {
    children:any,
    size?:number
}
export const Body =(props:BodyProps)=> <p className={style.Body}>{props.children}</p>
