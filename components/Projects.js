import React from 'react'
import FadeLeftToRight from './FadeLeftToRight'
import styles from '../styles/Projects.module.scss'

export default function Projects() {
  return (
      <div className={styles.wrapper}>
          <FadeLeftToRight>
            <h2 className={styles.title}>Projects coming soon...</h2>
          </FadeLeftToRight>
      </div>
  )
}
