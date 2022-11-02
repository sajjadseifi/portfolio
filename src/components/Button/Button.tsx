import React from 'react'
import style from './Button.module.css'
interface Button{
    icon:any;
    content?:any;
    onClick?:()=>{};
}
export const Button = ({content,icon:Icon,...props}:Button)=>{
    return (
        <div className={style.Button} {...props}>
            <span className={style.ButtonIcon}><Icon /></span>
            <span className={style.ButtonContnet}>{content}</span>
        </div>
    );
}