import React, { useState } from 'react'
import FadeRightToLeft from './FadeRightToLeft'
import FadeLeftToRight from './FadeLeftToRight'
import SkillChart from './SkillChart'
import { FaChevronRight } from 'react-icons/fa'
import FadeFromButtonUp from './FadeFromBottomUp'
import styles from '../styles/Skills.module.scss'

export default function Skills() {

    const skillsData = [
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

    const toolsData = [
        {
            name: 'Jira',
            grade: 5,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'Scrum',
            grade: 7,
            color: 'rgb(0, 128, 107)'
        },
        {
            name: 'Agile',
            grade: 7,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'Git',
            grade: 6,
            color: 'rgb(0, 128, 107)'
        },
        {
            name: 'webpack',
            grade: 6,
            color: 'rgb(255, 173, 66)'
        },
        {
            name: 'gulp',
            grade: 7,
            color: 'rgb(0, 128, 107)'
        }
    ];

    const [data, setData] = useState({
        items: skillsData,
        set: 'skills'
    });
    const [buttonText, setButtonText] = useState('Toon tools');

    const toggleSwitchData = (e) => {
        e.preventDefault();

        if (data.set == 'skills'){
            
            setData({
                items: toolsData,
                set: 'tools'
            });

            setButtonText('Toon skills');

        } else {

            setData({
                items: skillsData,
                set: 'skills'
            });

            setButtonText('Toon tools');

        }

        
    }

    return (
        <div className={styles.skills}>
            <div className='container'>
                <div className={styles.skillsWrapper}>

                    <FadeLeftToRight className={styles.graphSection}>
                        <div className={styles.skillsGraph}>
                            {data.items.map((skill, index) => (
                                <SkillChart
                                    key={index}
                                    skill={skill}/>
                            ))}
                        </div>
                        <div className={styles.underline}></div>
                    </FadeLeftToRight>

                    <FadeRightToLeft className={styles.textSection}>
                        <span className={styles.subtitle}>Skills & Tools</span>
                        <span className={styles.title}>Wat kan ik?</span>                    
                        <div className={styles.description}>
                            In de grafiek hiernaast zie je een vertoning van de skills die ik bezit. <br/>
                            Verder zijn er ook nog verschildende tools waar ik mee kan werken.
                        </div>

                        <FadeFromButtonUp>
                            <a className={styles.button} onClick={ toggleSwitchData }>
                                { buttonText } <FaChevronRight/>
                            </a>
                        </FadeFromButtonUp>

                    </FadeRightToLeft>

                </div>
            </div>
        </div>
    )
}
