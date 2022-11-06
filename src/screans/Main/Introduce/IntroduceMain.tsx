import React from 'react'
import style from './IntroduceMain.module.css'
import { IntroduceSection } from './IntroduceSection'
import { Skils } from './Skils'

const intro = {
    title : "Hello! I'm Sajjad Seifi",
    subTitle : "Every great design begin with an even better stroy",
    summary : "Since beginning my journey as a frelancer designer nearly 8 years ago, I've done remote work for agences,consoult for starups. and collabrated with talented people to create digital products confident, naturally curous, and prepetually eorking on improving on improving my chopdono design problem at a time."
}
export const IntroduceMain = () => {
    return (
        <div className={style.IntroduceMain}>
            <div><Skils/></div>
            <div><IntroduceSection {...intro}/></div>
        </div>
    )
}