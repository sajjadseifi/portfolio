import React from 'react'
import { Link } from '../../components/Link/Link'
import { Tag } from '../../components/Tag/Tag'
import { Body } from '../../components/Text/Body'
import { Subject } from '../../components/Text/Subject'
import style from './MainScreen.module.css'

export const MainScreen = ()=>{
    return(
        <div className={style.MainScreen}>
            <div className={style.Description}>
                <div>
                    <div><Tag content='Front-End Developer'/></div>
                    <Subject>
                        <div>Talk Is Cheap .</div>
                        <div>Show Me The Code</div>
                    </Subject>
                    <Body>
                        <div>I design and code butifully simple things.</div>
                        <div>and I love want to do .</div>
                    </Body>
                </div>
                <div>
                    <Link>LET'S CHAT!</Link>
                </div>
            </div>
            <div className={style.Wallpare}></div>
        </div>
    )
} 