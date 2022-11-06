import React from 'react'
import { Link } from '../../components/Link/Link'
import { Tag } from '../../components/Tag/Tag'
import { Body } from '../../components/Text/Body'
import { Subject } from '../../components/Text/Subject'
import { NumberDescription } from './components/NumberDescription'
import style from './TopMain.module.css'

export const TopMain = ({}) => {
    return(
        <div className={style.TopMain}>
            <div>
                <div className={style.Description}>
                    <div>
                        <div>
                            <Tag content='Front-End Developer'/>
                        </div>
                            <Subject>Talk Is Cheap. <br/> Show Me The Code</Subject>
                            <Body>design and code butifully simple things, and I love want to do .</Body>
                        </div>
                        <div style={{marginTop:60}}>
                            <Link>LET'S CHAT!</Link>
                        </div>
                </div>
                <div className={style.ExpericeContainer}>
                    <NumberDescription code={12} describe="years experience"/>
                    <NumberDescription  code={165} describe="prodjects completed on 18 contries" />
                </div>
            </div>
            <div className={style.Wallpare}></div>
        </div>
    ) 

}