import React, { useState } from 'react'
import { navData } from './data'
import style from './Navigation.module.css'
import { NavigationItem } from './NavigationItem'

export const Navigation = () =>{
    const [activeNumber,setActiveNumber] = useState(0);
    return (
        <ul className={style.Navigation}>
        {navData.map((item,key)=>(
            <NavigationItem
                key={key}
                content={item.display}
                active={key === activeNumber}
                onClick={()=>setActiveNumber(key)}
            />
        ))}
        </ul>
    )
}