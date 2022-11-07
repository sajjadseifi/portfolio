import React from 'react'
import { IntroduceMain } from './Introduce/IntroduceMain'
import { TopMain } from './TopMain'
import style from './MainScreen.module.css'
import { Testimonial } from './Testimonial/Testimonial'
export const MainScreen = ()=>{
    return(
        <>
            <TopMain/>
            <div className={style.DownContainer}>
                <IntroduceMain/>
            </div>
            <Testimonial/>
        </>
    )
} 