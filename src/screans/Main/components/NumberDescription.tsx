import React, { FC } from 'react'
import { Body } from '../../../components/Text/Body'
import { body } from '../../../constants/style'
import classes from './NumberDescription.module.css'

interface NumberDescriptionProps {
    code : number
    describe : string
}
export const NumberDescription : FC<NumberDescriptionProps> = ({code,describe}) => {

    return <div className={classes.NumberDescription}>
        <span className={classes.Number}>
            {code}
        </span>
        <span className={classes.Description}>
            {describe.toUpperCase()}
        </span>
    </div>
}