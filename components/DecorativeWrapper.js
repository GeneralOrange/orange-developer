import React from 'react'
import styles from '../styles/DecorativeWrapper.module.scss'

export default function DecorativeWrapper(props) {
  return (
    <div className={styles.container}>
        {React.Children.map(props.children, child => {
          return React.cloneElement(child, {
            className: `${child.props.className} ${styles.child}`
          })
        })}
        <div className={styles.yellowDecoration}></div>
        <div className={styles.blueDecoration}></div>
        <div className={styles.greenDecoration}></div>
    </div>
  )
}
