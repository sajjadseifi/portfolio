import React from "react"
import { socialMedia } from "./social-media"
import style from './SocialMedia.module.css'

export const SocialMedia = () => {
    return (
        <ul  className={style.Social}>
            {socialMedia.map(({color,icon:Icon,username},index)=>(
                <li 
                // style={{color : color}}
                className={style.Item} key={index}>
                    <a href="#">
                        <span className={style.Icon}><Icon/></span>
                    </a>
                </li>
            ))}
        </ul>
    )
}