import React, { FC } from 'react'
import { InputProps } from './Input'
import style from './Input.module.css'

interface TextAreaProps extends InputProps { }

export const TextArea : FC<TextAreaProps> = ({display,name,placeholder}) => {
    return (
        <div className={style.InputGroup}>
            <label htmlFor={name} className={style.Label}>{display}</label>
            <textarea
            placeholder={placeholder}
            id={name} className={style.Input} ></textarea>
        </div>
    )
}