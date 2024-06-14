import Image from "next/image";
import styles from "./about.module.css"
const AboutPage = () => {
    return (
       <div className={styles.container}>
       <div className={styles.textContainer}>
        <p className={styles.heroText}>Whether you are seeking creative inspiration, practical advice, or a fresh perspective on life, you'll find it here.</p>


        <div className={styles.littleImg}>
        <Image className={styles.kurbaga} src="/kurbaga.jpeg" alt="" width={150} height={150} style={{borderRadius:"50%"}}/>
        <Image className={styles.kalp} src="/kalp.jpeg" alt="" width={150} height={150} style={{borderRadius:"50%"}}/>
        <Image className={styles.seftali} src="/seftali.jpeg" alt="" width={150} height={150} style={{borderRadius:"50%"}}/>
       </div>
       </div>

       <div className={styles.imgContainer}>
       <Image src="/flower.jpeg" alt="" width={450} height={450} style={{borderRadius:"50%"}}/>
       </div>

   
       </div>
    )
}

export default AboutPage;