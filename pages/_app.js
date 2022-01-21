import '../styles/globals.scss'
import Footer from '../components/Footer';
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer/>
    </>
      
  );
}

export default MyApp
