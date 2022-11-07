import React, { FC, useEffect, useState } from 'react'
import { ITestimonial } from '../../screans/Main/Testimonial/testimonials.type'
import style from './Navigation.module.css'

interface NavigationProps {
    items : ITestimonial[]
    renderMethod : (props:any)=>any
    onSelect ?: (index:number) => {}
}

export const Navigation : FC<NavigationProps> = ({items,renderMethod:Redner,onSelect}) =>{
    const [active,setActive] = useState(0);
    
    useEffect(()=>{
        onSelect && onSelect(active)
    },[active]) 

    const width = 100 / items.length
    const left = active * width
    const lineStyle ={
        width : width + "%",
        left:left + "%"
    }

    return (
        <div className={style.NavigationContainer}>
            <ul className={style.Navigation}>
                {items.map((item,index)=>(
                    <li key={index} className={style.NavItem}onClick={()=>setActive(index)}>
                        <Redner />
                        d
                    </li>
                ))}
            </ul>
            <div className={style.BorderBottom}>
                <div className={style.LinearLine} style={lineStyle}></div>
            </div>
        </div>
    )
}