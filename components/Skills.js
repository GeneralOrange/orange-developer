import React from 'react'
import Image from 'next/image'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import styles from '../styles/Skills.module.scss'

export default function Skills() {

    return (
        <div className={styles.skills}>
            <div className='container'>
                <div className={styles.skillsWrapper}>
                    <FadeLeftToRight>
                        <div className={styles.section}>
                            <Image
                                src="/profile.png"
                                width="434"
                                height="575"/>
                        </div>
                    </FadeLeftToRight>
                    <FadeRightToLeft>
                        
                        <div className={styles.section}>
                            <span className={styles.subtitle}>Skills</span>
                            <span className={styles.title}>Wat kan ik?</span>                    
                            <div className={styles.description}>
                                Ik woon samen met m’n vriendin en dochter in een appartement in Zoetermeer. Tegenwoordig loop ik graag een rondje door de wijk met z’n 3tjes. 
                                Verder zijn mijn hobby’s gamen en films kijken.
                            </div>
                        </div>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
