import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
        At Creative Thoughts Agency, we believe in the power of imagination and the endless possibilities it brings. 
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnkwM2IzYzZwd3pzOGI1b3VidXk1Ymp1Y3BqYXdwcXo1MHNmb2llYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/og7NGYFkgdHSc9vO9J/giphy.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;