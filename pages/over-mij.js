
import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Center, Button } from '@chakra-ui/react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import Cube from '../components/Cube.js'

export default function Home() {
    return (
        <>
          <Head>
            <title>Orange Developer | Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.Home}>
            <Layout>
    
              <Container>
                <Center h='100vh'>
                    <Heading as='h1' size='4x1' fontSize='72' className={styles.Home__title}>
                      Over mij pagina 
                        <Link href='/'>
                            <Button>
                                Terug naar home
                            </Button>
                        </Link>
                    </Heading>
                </Center> 
              </Container>
            </Layout>
          </div>
        </>
    )
}
