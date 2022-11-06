import React, { FC } from 'react'
import { Body } from '../../../components/Text/Body';
import style from './IntroduceSection.module.css'


interface IntroduceSectionProps {
    title:string;
    subTitle :string;
    summary:string;
}

export const IntroduceSection :FC<IntroduceSectionProps> = ({
subTitle,
summary,
title
}) =>{
    return (
        <div className={style.IntroduceSection}>
            <span className={style.Intro}>Introduce</span>
            <h1 className={style.Title}>{title}</h1>
            <h2 className={style.SubTitle}>{subTitle}</h2>
            <Body>{summary}</Body>
        </div>
    )
}