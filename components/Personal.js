import React from 'react'
import Image from 'next/image'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import styles from '../styles/Personal.module.scss'

export default function Personal() {

    return (
        <div className={styles.personal}>
            <div className='container'>
                <div className={styles.personalWrapper}>
                    <FadeLeftToRight>
                        <div className={styles.section}>
                            <span className={styles.subtitle}>Persoonlijk</span>
                            <span className={styles.title}>Dit is mijn verhaal</span>                    
                            <div className={styles.description}>
                                Ik woon samen met m’n vriendin en dochter in een appartement in Zoetermeer. Tegenwoordig loop ik graag een rondje door de wijk met z’n 3tjes. 
                                Of ga ik een rondje fietsen met m’n vader. Ik ben ook vooral een Marvel fan, vind het leuk om naar de film te gaan. 
                            </div>
                        </div>
                    </FadeLeftToRight>
                    <FadeRightToLeft>
                        <div className={styles.section}>
                            <Image
                                src="/profile.png"
                                width="434"
                                height="575"/>
                        </div>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
