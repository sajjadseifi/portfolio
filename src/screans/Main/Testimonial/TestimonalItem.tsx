import React, { FC } from "react"
import style from './TestimonalItem.module.css'
import { ITestimonial } from "./testimonials.type"

interface TestimonalItemProps extends ITestimonial {}

export const TestimonalItem  : FC<TestimonalItemProps> = (props) =>{
    console.log(props)
    return (
        <div className={style.TestimonalItem}>
            <div className={style.AvatarContainer}>
                <img src={props.master.avatar}/>
            </div>
            <div className={style.Details}>
                <div className={style.FullName}>
                    <span>{props.master.firstName}</span>
                    <span className={style.Space}>{props.master.lastName}</span>
                </div>
                <div className={style.Position}>
                    <span>{props.position}</span>
                    <span>,</span>
                    <span className={style.Team}>{props.team}</span>
                </div>
            </div>
        </div>
    )
}