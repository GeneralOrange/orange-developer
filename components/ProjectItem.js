import React, { useEffect } from 'react'
import Link from 'next/link'
import TechStack from './TechStack'
import { FaChevronRight, FaServer} from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { isMobile, isDesktop } from 'react-device-detect'
import styles from '../styles/ProjectItem.module.scss'

export default function ProjectItem(props) {

    let timeout = null;
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const item = props.item;
    const debounce = props.index * 500;

    useEffect(()=>{
        if(inView){
            timeout = setTimeout(()=>{
                animation.start({
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'linear',
                        duration: 1
                    }
                })
            }, debounce);
        }
        if(!inView){
            animation.start({
                x: 0,
                opacity: 0,
                transition: {
                    type: 'linear',
                    duration: 1
                }
            })
        }
    },[inView, animation])

    return (
        <motion.div 
            key={item.id}
            className={styles.item}
            ref={ref}
            initial={{
                opacity: 0,
                x: 0
            }}
            animate={animation}>

            { item.image && <img className={styles.image} src={item.image} alt={item.name} /> }

            <span className={styles.name}>{item.name}</span>

            <div className={styles.description}>
                {item.description}
                <TechStack stack={item.stack}/>
            </div>

            <div className={styles.buttons}>

                { item.url && <Link href={item.url} target="_blank" rel="nofollow noopener" className={styles.button}>
                        Naar Website <FaChevronRight/>
                </Link> }
                
                { item.repo && <Link href={item.repo} target="_blank" rel="nofollow noopener" className={styles.repoButton}>
                        Naar Repo <FaServer/>
                </Link> }

            </div>
        </motion.div>   
    )
}
