import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Personal from '../components/Personal'
import Skills from '../components/Skills'
import Socials from '../components/Socials'
import BackToTop from '../components/BackToTop'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.scss'
import { FaChevronDown } from 'react-icons/fa'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { isMobile, isDesktop } from 'react-device-detect'

export default function Home(){
  const ref = useRef(null);
  const [socialStyling, setSocialStyling] = useState(
    {
      minHeight: '100px',
      top: 'calc(50vh - (187px / 2))',
      left: '10px',
      width: '80px'
    }
  );

  useEffect(()=>{
    if(isMobile){
      setSocialStyling(
        {
          minHeight: '100px',
          top: '0',
          left: '0',
          width: '100%',
          height: '0'
        }
      ); 
    }

    if(isDesktop){
      setSocialStyling(
        {
          minHeight: '100px',
          top: 'calc(50vh - (187px / 2))',
          left: '10px',
          width: '80px'
        }
      );
    }
  },[isMobile, isDesktop])

  return (
    <>
      <Head>
        <title>Orange Developer | Erik van der Schaaf</title>
        <meta name="description" content="Front-end Developer" />
        <link rel="icon" href="/generalOrangeLogo.png" />
      </Head>

      <Parallax 
        pages={5} 
        ref={ref}>

        <ParallaxLayer 
          speed={0} 
          factor={1} 
          style={{
            backgroundColor: 'rgb(232, 230, 250)'
          }}
          onClick={() => ref.current.scrollTo(1)}
          >

          <Hero />

          <FaChevronDown className={styles.down}/>

        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={1}
          onClick={() => ref.current.scrollTo(2)}
          style={{
            backgroundColor: 'rgb(0, 128, 107)'
          }} 
          factor={1}>

          <Personal/>

          <FaChevronDown className={styles.down}/>

        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={.005}
          >

          <Skills/>

          <FaChevronDown
            onClick={() => ref.current.scrollTo(3)}
            className={styles.down}/>

        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundColor: 'rgb(0, 128, 107)'
          }} >

          <Projects 
            show={3} 
            mobileShow={2} 
            toScreen={true} />

          <FaChevronDown
            onClick={() => ref.current.scrollTo(4)}
            className={styles.down}/>

        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          style={{
            backgroundColor: 'rgb(255, 173, 66)'
          }} >

          <Contact/>

        </ParallaxLayer>
        
        <ParallaxLayer
          sticky={{ start: 1, end: 3}}
          offset={1}
          speed={.00005}
          style={socialStyling}
          >

          <Socials/>

        </ParallaxLayer>

      </Parallax>
    </>
  )
}
