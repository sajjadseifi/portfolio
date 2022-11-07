import React from 'react'
import { Navigation } from '../../../components/Navigation/Navigation'
import style from './Testimonial.module.css'
import { testimonials } from './testimonials.data'

export const Testimonial = () =>{ 
    return (
        <div className={style.Container}>
            <div className={style.Testimonial}>
                <div className={style.Header}>
                    <h2 className={style.Title}>Testimonials</h2>
                    <span className={style.Aboutme}>What's clients say about me</span>
                </div>
                <Navigation items={testimonials} renderMethod={()=>{}} />
            </div>
        </div>
    )
}