import React from 'react'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import SkillChart from './SkillChart'
import styles from '../styles/Skills.module.scss'

export default function Skills() {
    const skillData = [
        {
            name: 'NextJS',
            grade: 3,
            color: 'rgb(0, 128, 107)'
        },
        {
            name: 'NuxtJS',
            grade: 2,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'HTML5',
            grade: 9,
            color: 'rgb(0, 128, 107)'
        },
        {
            name: 'SCSS',
            grade: 8,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'WordPress',
            grade: 9,
            color: 'rgb(0, 128, 107)'
        },
        {
            name: 'PHP',
            grade: 8,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'Strapi',
            grade: 3,
            color: 'rgb(0, 128, 107)'
        },
        {
            name: 'Photoshop',
            grade: 3,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'JavaScript',
            grade: 8,
            color: 'rgb(0, 128, 107)'
        }
    ];

    return (
        <div className={styles.skills}>
            <div className='container'>
                <div className={styles.skillsWrapper}>
                    <FadeLeftToRight className={styles.graphSection}>
                        <div className={styles.skillsGraph}>
                            {skillData.map((skill, index) => (
                                <SkillChart
                                    key={index}
                                    skill={skill}/>
                            ))}
                        </div>
                        <div className={styles.underline}></div>
                    </FadeLeftToRight>
                    <FadeRightToLeft className={styles.textSection}>
                        <span className={styles.subtitle}>Skills</span>
                        <span className={styles.title}>Wat kan ik?</span>                    
                        <div className={styles.description}>
                            In de grafiek hiernaast zie je een vertoning van de skills die ik bezit. <br/>
                            Verder zijn er ook nog verschildende tools waar ik mee kan werken.
                        </div>
                    </FadeRightToLeft>
                </div>
            </div>
        </div>
    )
}
