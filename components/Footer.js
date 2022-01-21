import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer>
                <Image 
                    src='/wavesOpacity.svg'
                    height='200'
                    layout='fill'
                />
            </footer>
        </>
    )
}

export default Footer;