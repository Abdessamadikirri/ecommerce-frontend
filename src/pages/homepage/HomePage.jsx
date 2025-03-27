import Conetentsection from '../../components/contentsection/conetentsection'
import NavBar from '../../components/header/navbar'
import HeroSection from '../../components/herosection/herosection'
import Footer from '../../components/footer/footer'
import styles from './homepage.module.css'
import { useRef } from 'react'
export default function HomePage() {

    const productreference = useRef(null)
    const scrolltoproduct = () => {
        productreference.current.scrollIntoView({ behavior: "smooth" })

    }

    return (
        <div className={styles.homepage}>
            <NavBar />
            <HeroSection scrolltoproduct={scrolltoproduct} />
            <Conetentsection productreference={productreference} />
            <Footer />
        </div>
    )
}