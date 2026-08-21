import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styles from '../styles/Socials.module.scss'

export default function Socials() {
  return (
    <div className={styles.socials}>
        <ul className={styles.list}>
            <li className={styles.linkedinList}>
                <Link
                    href="https://www.linkedin.com/in/erik-van-der-schaaf-202674167/"
                    target="_blank"
                    rel="nofollow">
                            <FaLinkedin className={styles.linkedin}/>
                </Link>
            </li>
            <li className={styles.githubList}>
                <Link
                    href="https://github.com/GeneralOrange"
                    target="_blank"
                    rel="nofollow">
                            <FaGithub className={styles.github}/>
                </Link>
            </li>
            <li className={styles.emailList}>
                <Link
                    href="mailto:erik.17021995@gmail.com"
                    rel="nofollow">
                            <FaEnvelope className={styles.mail}/>
                </Link>
            </li>
        </ul>
    </div>
  )
}