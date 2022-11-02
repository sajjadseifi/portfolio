import React from 'react'
import { BG_SECONDARY, SECONDARY } from '../../constants/color'
import style from './Tag.module.css'

interface TagProps {
    color:string
    bg:string
    content:any
}

export const Tag =({
    color = BG_SECONDARY,
    bg = SECONDARY,
    content=''
})=>{
    return (
        <span
        style={{
            backgroundColor:bg,
            color
        }}
        className={style.Tag}
        >{content}</span>
    );
}

