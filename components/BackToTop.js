import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from '../styles/BackToTop.module.scss'

export default function BackToTop() {
  return (
      <>
        <FaChevronUp className={styles.up}/>
      </>
  )
}
