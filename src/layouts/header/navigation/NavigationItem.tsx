import React from 'react'
import style from './NavigationItem.module.css'

interface NavigationItemProps
{
    active ?: boolean;
    content : any;
    onClick ?: (event:React.MouseEvent<HTMLLIElement, MouseEvent>)=> void
}
export const NavigationItem  = (props:NavigationItemProps) =>{
    const navClasseList = [style.NavigationItem]
    if(props.active)
    {
        navClasseList.push(style.ActiveItem)
    }
    const navClass = navClasseList.join(' ')
    return (
        <li className={navClass} onClick={props.onClick}>
            <span className={style.NavigationItemLeft}></span>
            <span>{props.content}</span>
            <span className={style.NavigationItemRight}></span>
        </li>
    )
}