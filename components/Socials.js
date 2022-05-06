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
                    href="https://www.linkedin.com/in/erik-van-der-schaaf-202674167/">
                        <a
                            target="_blank"
                            rel="nofollow">
                            <FaLinkedin className={styles.linkedin}/>
                        </a>
                </Link>
            </li>
            <li className={styles.githubList}>
                <Link
                    href="https://github.com/GeneralOrange">
                        <a
                            target="_blank"
                            rel="nofollow">
                            <FaGithub className={styles.github}/>
                        </a>
                </Link>
            </li>
            <li className={styles.emailList}>
                <Link
                    href="mailto:erik.17021995@gmail.com">
                        <a
                            rel="nofollow">
                            <FaEnvelope className={styles.mail}/>
                        </a>
                </Link>
            </li>
        </ul>
    </div>
  )
}