import styles from './contentsection.module.css'
import { Link } from 'react-router-dom'
export default function () {
    return (
        <div className={styles.contentsection}>
            <h3 className={styles.maintitle}>Proudly made by bees </h3>
            <div className={styles.topsection}>
                <div className={styles.card}>
                    <img className={styles.image} src="image12.jpg" alt="" />
                    <h4 className={styles.title}> Orange tree Honey</h4>
                    <p className={styles.description}>Light, fragrant, and subtly citrusy, perfect for teas and desserts.</p>
                    <p className={styles.price}></p>

                </div>
                <div className={styles.card}>
                    <img className={styles.image} src="image10.jpg" alt="" />
                    <h4 className={styles.title}>Thyme honey</h4>
                    <p className={styles.description}>Rich, aromatic, and slightly herbal, perfect for boosting flavor and wellness</p>
                    <p className={styles.price}></p>
                </div>
                <div className={styles.card}>
                    <img className={styles.image} src="image11.jpg" alt="" />
                    <h4 className={styles.title}>
                        Multiflower Honey
                    </h4>
                    <p className={styles.description}>A balanced, floral blend with a rich, natural sweetness.</p>
                    <p className={styles.price}></p>
                </div>
            </div>
            <button className={styles.button}><Link to="/shop">See all products</Link></button>
            <div className={styles.centersection}>
                <img className={styles.imagecenter} src="image5.jpg" alt="" />
                <div className={styles.centerleft}>
                    <p className={styles.center}>THE ONE THING THAT CAN DO</p>
                    <img className={styles.icon} src="honey-icon.png" alt="" />
                    <h1 className={styles.titlecenter}>ANYTHINGS</h1>
                    <p className={styles.pcenter}>Honey is a one-ingredient recipe made by bees, flowers and mother nature herself.</p>
                    <button className={styles.buttoncenter}><Link to="/abouthoney">more about Honey</Link></button>
                </div>
            </div>
            <div className={styles.buttomsection}>

            </div>
        </div >
    )
}