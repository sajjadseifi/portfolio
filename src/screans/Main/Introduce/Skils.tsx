import React from 'react'
import { skils } from '../../../constants/data'
import { SkilsItem } from './SkilsItem'
import style from './Skils.module.css'
export const Skils = () =>{
    return (
        <div className={style.Skils}>
            {skils.map((skil,key)=><SkilsItem key={key} {...skil}/>)}
        </div>
    )
}