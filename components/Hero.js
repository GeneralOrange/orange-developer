import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import styles from '../styles/Hero.module.scss'

export default function Hero() {

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(()=> {
        const options = {
            strings: [
                '<span style="color: rgb(45, 45, 45)">Leuke</span> ^200Developer',
                '<span style="color: rgb(45, 45, 45)">Creatieve</span> ^200Developer',
                '<span style="color: rgb(45, 45, 45)">Front-end</span> ^200Developer'
            ],
            typeSpeed: 150,
            backSpeed: 100
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
                    <FadeLeftToRight>
                        <div className={styles.section}>
                            <Image
                                className={styles.profile}
                                src="/profile.png"
                                alt="Profiel foto"
                                width="434"
                                height="575"/>
                        </div>
                    </FadeLeftToRight>
                    <FadeRightToLeft>
                        <div className={styles.section}>
                            <Image
                                className={styles.logo}
                                src="/generalOrangeLogo.png"
                                alt="Mijn logo"
                                width="50"
                                height="50"/>
                            <span className={styles.subtitle}>Hallo, mijn naam is Erik</span>
                            <h1 className={styles.title}>
                                Ik ben een <br/> <span ref={el}/>
                            </h1>
                        </div>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
