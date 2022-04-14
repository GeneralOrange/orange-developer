import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeLeftToRight = ({ children }) => {
    
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(()=> {
        if(inView){
            animation.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'linear',
                    duration: 1
                }
            })
        }
        if(!inView){
            animation.start({
                x: -200,
                opacity: 0,
                transition: {
                    type: 'linear',
                    duration: 1
                }
            })
        }
    }, [inView]);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ 
                    opacity: 0,
                    x: -200
                }}
                animate={animation}
                >
                    {children}
            </motion.div>
        </>
    )
}

export default FadeLeftToRight;
  