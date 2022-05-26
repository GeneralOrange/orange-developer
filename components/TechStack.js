import React from 'react'
import styles from '../styles/TechStack.module.scss'

export default function TechStack(props) {
    const stack = props.stack;

    return (
        <ul className={styles.list}>
            {stack.map((item, index) => (
                <li
                    key={index}
                    className={styles.item}>
                    {item}
                </li>
            ))}
        </ul>
    )
}
