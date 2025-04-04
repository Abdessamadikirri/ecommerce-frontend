import Conetentsection from '../../components/contentsection/conetentsection'

import HeroSection from '../../components/herosection/herosection'

import styles from './homepage.module.css'
import { useRef } from 'react'
export default function HomePage() {

    const productreference = useRef(null)
    const scrolltoproduct = () => {
        productreference.current.scrollIntoView({ behavior: "smooth" })

    }

    return (
        <div className={styles.homepage}>

            <HeroSection scrolltoproduct={scrolltoproduct} />
            <Conetentsection productreference={productreference} />

        </div>
    )
}