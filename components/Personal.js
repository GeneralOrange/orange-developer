import React from 'react'
import Image from 'next/image'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import ImageWrapper from './DecorativeWrapper'
import styles from '../styles/Personal.module.scss'

export default function Personal() {

    return (
        <div className={styles.personal}>
            <div className='container'>
                <div className={styles.personalWrapper}>
                    <FadeLeftToRight className={styles.section}> 
                        <span className={styles.subtitle}>Profiel</span>
                        <span className={styles.title}>Dit is mijn verhaal</span>                    
                        <div className={styles.description}>
                            IT-professional met ervaring in webdevelopment, low-code en bedrijfsapplicaties. Begonnen als WordPress- en front-end developer en inmiddels werkzaam als Low-code Developer, waarbij de focus is verschoven van websites naar het ontwikkelen van applicaties en digitale oplossingen.<br/>
                            Daarnaast ben ik medeoprichter van CuppaCode, waar ik samen met een compagnon digitale oplossingen ontwikkel voor klanten.<br/>
                            Door mijn brede technische achtergrond kan ik goed schakelen tussen gebruikers, business en development. Ik krijg steeds meer energie van het analyseren van vraagstukken, het bedenken van oplossingen en het samenwerken met klanten en collega's.
                        </div>
                    </FadeLeftToRight>
                    <FadeRightToLeft className={styles.section}>
                        <ImageWrapper>
                            <Image
                                priority={true}
                                src="/profile_forest_flexing.jpeg"
                                alt="Profiel foto in het bos"
                                width="280"
                                height="371"/>
                        </ImageWrapper>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
