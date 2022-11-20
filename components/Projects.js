import React from 'react'
import FadeLeftToRight from './FadeLeftToRight'
import ProjectOverview from './ProjectOverview'
import { BrowserView, MobileView } from 'react-device-detect'
import styles from '../styles/Projects.module.scss'

export default function Projects( props ) {

  return (
      <div className={`${styles.wrapper} ${props.toScreen ? styles.screen : '' }`}>
        <div className="container">
          <FadeLeftToRight className={styles.section}>
            <span className={styles.subtitle}>Waar heb ik aan gewerkt?</span>
            <span className={styles.title}>Projecten</span>      
          </FadeLeftToRight>
          <BrowserView>
            <ProjectOverview show={ props.show } />
          </BrowserView>
          <MobileView>
            <h2>Mobile view word nog aan gewerkt.</h2>
          </MobileView>
        </div>
      </div>
  )
}
