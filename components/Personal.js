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
                        <span className={styles.subtitle}>Persoonlijk</span>
                        <span className={styles.title}>Dit is mijn verhaal</span>                    
                        <div className={styles.description}>
                            Ik woon samen met m’n verloofde en dochter in een appartement in Zoetermeer. <br/>
                            Tegenwoordig (sinds eind februari 2022) loop ik graag een rondje door de wijk met z’n 3tjes, lekker genieten van het mooie weer en samen een gezinnetje zijn. <br/>  
                            Aan de andere kant probeer ik ook sportief te blijven en ga ik een rondje fietsen met m’n vader of ben ik te vinden op de tennisbaan. <br/>
                            Als het gaat om hobbies hou ik er vooral van om lekker naar de film te gaan of om te gamen met vrienden.
                        </div>
                    </FadeLeftToRight>
                    <FadeRightToLeft className={styles.section}>
                        <ImageWrapper>
                            <Image
                                priority={true}
                                src="/profile_forest_flexing.jpeg"
                                alt="Profiel foto in het bos"
                                width="365"
                                height="483"/>
                        </ImageWrapper>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
