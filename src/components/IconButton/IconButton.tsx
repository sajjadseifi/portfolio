import React from 'react'
import { SECONDARY } from '../../constants/color';
import style from './IconButton.module.css'
interface IconButton{
    icon:any;
    onClick?:()=>{};
}
export const IconButton = ({icon:Icon,...props}:IconButton)=>{
    return (
        <div className={style.IconButton} {...props}>
            <Icon color={SECONDARY} />
        </div>
    );
}