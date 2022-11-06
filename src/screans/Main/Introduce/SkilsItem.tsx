import { FC } from "react"
import { Card } from "../../../components/Card/Card"
import style from './SkilsItem.module.css'
import { Body } from "../../../components/Text/Body"
import { ISkil } from "../../../constants/data-type"


interface SkilsItemProps extends ISkil{}

export const SkilsItem : FC<SkilsItemProps> = ({title, describe, projectCount,refrencfe}) => {
    const refCList = [style.RefrenceLink]
    refrencfe && refCList.push(style.IsUrl)
    const refClass = refCList.join(' ')
    return (
        <Card>
            <div className={style.SkilsItem}>
            <div className={style.Header}>
                <h3>{title}</h3>
                <span>IC</span>
            </div>
            <div className={style.Content}>
                <Body>{describe}</Body>
            </div>
            <div className={style.Refrence}>
                <a className={refClass} href={refrencfe ? refrencfe : '#'}>
                    {projectCount} PROJECTS
                </a>
            </div>
            </div>
        </Card>
    )
}

