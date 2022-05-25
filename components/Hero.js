import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import ImageWrapper from './DecorativeWrapper'
import styles from '../styles/Hero.module.scss'

export default function Hero() {

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(()=> {
        const options = {
            strings: [
                '<span style="color: rgb(45, 45, 45)">WordPress</span>',
                '<span style="color: rgb(45, 45, 45)">PHP</span>',
                '<span style="color: rgb(45, 45, 45)">JavaScript</span>',
                '<span style="color: rgb(45, 45, 45)">Creatieve</span>',
                '<span style="color: rgb(45, 45, 45)">Front-end</span>'
            ],
            typeSpeed: 100,
            backSpeed: 50
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className={styles.hero}>
            <div className='container'>
                <div className={styles.heroWrapper}>
                    <FadeLeftToRight className={styles.section}>
                        <ImageWrapper>
                            <Image
                                className={styles.profile}
                                src="/profile_forest.jpeg"
                                alt="Profiel foto in het bos"
                                priority={true}
                                width="280"
                                height="375"/>
                        </ImageWrapper>
                    </FadeLeftToRight>
                    <FadeRightToLeft className={styles.section}>
                        <Image
                            className={styles.logo}
                            src="/generalOrangeLogo.png"
                            alt="Mijn logo"
                            width="50"
                            height="50"/>
                        <span className={styles.subtitle}>Hallo, mijn naam is Erik</span>
                        <h1 className={styles.title}>
                            Ik ben een <br/> <span ref={el}/> Developer
                        </h1>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
