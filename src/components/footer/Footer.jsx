import styles from "./footer.module.css";


const Footer = () => {
return(
<div className={styles.container}>
<div className={styles.logo}>SerenBlog</div> 
<div className={styles.text}>
All rights reserved | 2024
</div>      
</div>
    )
}

export default Footer;