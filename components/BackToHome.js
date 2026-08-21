import React from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/BackToHome.module.scss'

export default function BackToHome() {
  return (
      <>
        <Link href="/" className={ styles.back }>
                <FaChevronCircleLeft className={ styles.back__icon }/> Terug naar home
        </Link>
      </>
  )
}
