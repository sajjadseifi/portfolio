import React, { FC } from 'react'
import style from './Card.module.css'

interface CardProps {
    children:any;
}
export const Card :FC<CardProps> = ({children,...props}) =>{

    return (
        <div className={style.Card} {...props}>{children}</div>
    )
}