import React, { useState } from 'react'
import { Card } from '../../../components/Card/Card'
import { Navigation } from '../../../components/Navigation/Navigation'
import { TestimonalItem } from './TestimonalItem'
import style from './Testimonial.module.css'
import { testimonials } from './testimonials.data'

export const Testimonial = () =>{ 
    const [selected,setSelected] = useState(0);
    const curTestimonal = testimonials[selected]

    return (
        <div className={style.Container}>
            <div className={style.Testimonial}>
                <div className={style.Header}>
                    <h2 className={style.Title}>Testimonials</h2>
                    <span className={style.Aboutme}>What's clients say about me</span>
                </div>
                <div className={style.TestimonalContnet}>
                    <div className={style.TestimonalCard}>
                        <div className={style.CardHead}>
                            <div className={style.RateStars}>
                                {[...Array(5)].map((_,i)=>(
                                    <span className={i <= curTestimonal.rate ? style.StarActive:''}>*</span>
                                ))}
                            </div>
                            <div className={style.RateText}>
                                <span>{curTestimonal.rate}.0</span>
                                <span>Rating</span>
                            </div>
                        </div>
                        <p className={style.Explain}>{curTestimonal.explain}</p>
                    </div>
                </div>
                <Navigation 
                    items={testimonials} 
                    renderMethod={TestimonalItem}
                    onSelect={setSelected}
                />
            </div>
        </div>
    )
}