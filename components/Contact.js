import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeLeftToRight from './FadeLeftToRight'
import FadeRightToLeft from './FadeRightToLeft'
import { FaDownload, FaPaperPlane } from 'react-icons/fa'
import styles from '../styles/Contact.module.scss'
import { BrowserView } from 'react-device-detect'

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null}
  });

  const [inputs, setInputs] = useState({
    to_adres: 'erik.17021995@gmail.com',
    name: '',
    email: '',
    subject: '',
    message: ''    
  });

  const handleResponse = (status, msg) => {
    if(status === 200){
      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, msg: msg }
      })
      setInputs({
        to_adres: 'erik.17021995@gmail.com',
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleFormChange = e => {
    //e.persists()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/ContactFormSend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <div className={styles.contact}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.column}>
            <FadeLeftToRight>
              <h2 className={styles.title}>Contact</h2>
              <p className={styles.description}>
                Mocht je contact zoeken, kan dat via dit formulier.
              </p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                  <input
                    id="name"
                    type="text"
                    onChange={handleFormChange}
                    required
                    value={inputs.name}
                    className={styles.field}
                    placeholder="Uw Naam"/>
                </div>
                <div className={styles.group}>
                  <input
                    id="email"
                    type="email"
                    onChange={handleFormChange}
                    required
                    value={inputs.email}
                    className={styles.field}
                    placeholder="Uw Email"/>
                </div>
                <div className={styles.group}>
                  <input
                    id="subject"
                    type="text"
                    onChange={handleFormChange}
                    required
                    value={inputs.subject}
                    className={styles.field}
                    placeholder="Het Onderwerp"/>
                </div>
                <div className={styles.group}>
                  <textarea
                    id="message"
                    rows="10"
                    onChange={handleFormChange}
                    required
                    value={inputs.message}
                    className={styles.field}
                    placeholder="Typ hier uw bericht..."/>
                </div>
                <div className={styles.group}>
                  <button
                    type="submit"
                    className={styles.submit}
                    disabled={status.submitting}>
                      {!status.submitting
                        ? !status.submitted
                        ? 'Verstuur'
                        : 'Verstuurd'
                        : 'Versturen...'}
                      <FaPaperPlane/>
                  </button>
                  <Link 
                    href='/CV.pdf'>
                    <a 
                      target="_blank"
                      className={styles.download}>
                      Download CV <FaDownload/>
                    </a>
                  </Link>
                </div>
              </form>
              {status.info.error && (
                <div className={styles.danger}>{status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <div className={styles.success}>{status.info.msg}</div>
              )}
            </FadeLeftToRight>
          </div>
          <div className={styles.column}>
            <BrowserView>
                <FadeRightToLeft>
                  <Image
                    src="/profile.png"
                    alt="Profiel foto"
                    width="434"
                    height="575"/>
                </FadeRightToLeft>
            </BrowserView>
          </div>
        </div>
      </div>
    </div>
  )
}
