import React from 'react'
import styles from '../styles/DecorativeWrapper.module.scss'

export default function DecorativeWrapper(props) {
  return (
    <div className={styles.container}>
        {props.children}
        <div className={styles.decoration}></div>
    </div>
  )
}
