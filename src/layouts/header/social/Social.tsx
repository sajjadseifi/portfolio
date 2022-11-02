import React from 'react'
import { Button } from '../../../components/Button/Button'
import style from './Social.module.css'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { IconButton } from '../../../components/IconButton/IconButton'

export const Social = () => {
    return (
        <div className={style.Social}>
            <Button icon={BsTwitter} content="twitter"/>
            <Button icon={AiFillGithub} content="github"/>
            <div style={{margin:'0 20px'}}>
                <IconButton icon={GrMail} />
            </div>
        </div>
    )
}