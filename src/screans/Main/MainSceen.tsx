import React from 'react'
import { IntroduceMain } from './Introduce/IntroduceMain'
import { TopMain } from './TopMain'
import style from './MainScreen.module.css'
export const MainScreen = ()=>{
    return(
        <>
            <TopMain/>
            <div className={style.DownContainer}>
                <IntroduceMain/>
            </div>
        
        </>

    )
} 