import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Socials from '../components/Socials'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import BackToHome from '../components/BackToHome'
import styles from '../styles/Home.module.scss'
import { FaChevronDown } from 'react-icons/fa'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { isMobile, isDesktop } from 'react-device-detect'

export default function ProjectsPage(){
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>Projecten | Orange Developer | Erik van der Schaaf</title>
        <meta name="description" content="Projecten" />
        <link rel="icon" href="/generalOrangeLogo.png" />
      </Head>
      <Parallax 
        pages={3} 
        ref={ref}>

        <ParallaxLayer
          factor={2}
          style={{
            backgroundColor: 'rgb(0, 128, 107)'
          }} >
            <BackToHome/>
            <Projects show={-1} mobileShow={-1} />
            
        </ParallaxLayer>

        <ParallaxLayer
            offset={2}
            style={{
                backgroundColor: 'rgb(255, 173, 66)'
            }} >
          <Contact/>
        </ParallaxLayer>
        
      </Parallax>
    </>
  )
}
