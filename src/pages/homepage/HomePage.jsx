import Conetentsection from '../../components/contentsection/conetentsection'
import NavBar from '../../components/header/navbar'
import HeroSection from '../../components/herosection/herosection'
import Footer from '../../components/footer/footer'
import styles from './homepage.module.css'
export default function HomePage() {
    return (
        <div className={styles.homepage}>
            <NavBar />
            <HeroSection />
            <Conetentsection />
            <Footer />
        </div>
    )
}