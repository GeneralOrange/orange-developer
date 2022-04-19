import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/SkillChart.module.scss'

export default function SkillChart({ skill }) {

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                height: `${skill.grade * 25}px`,
                opacity: 1,
                backgroundColor: skill.color,
                transition: {
                    type: 'spring',
                    duration: 3
                }
            })
        }
        if(!inView){
            animation.start({
                height: 0,
                opacity: 0,
                transition: {
                    type: 'spring',
                    duration: 1
                }
            })
        }
    },[inView, animation, skill.grade, skill.color]);

    return (
        <div className={styles.chart}>
            <motion.div 
                ref={ref}
                initial={{ 
                    height: 0
                }}
                animate={animation}>
            </motion.div>
            <div className={styles.name}>{skill.name}</div>
        </div>
    )
}
