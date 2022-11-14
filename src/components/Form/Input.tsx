import React, { FC } from 'react'
import style from './Input.module.css'

export interface InputProps { 
    name : string
    display : string
    placeholder ? :string
}
export const Input : FC<InputProps> = ({display,name,placeholder}) => {
    return (
        <div className={style.InputGroup}>
            <label htmlFor={name} className={style.Label}>{display}</label>
            <input 
            placeholder={placeholder}
            id={name} className={style.Input}/>
        </div>
    )
}