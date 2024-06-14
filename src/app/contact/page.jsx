"use client";
import Image from "next/image";
import styles from "./contact.module.css";


const ContactPage = () => {
return (
<div className={styles.container}>
<div className={styles.imgContainer}>
<Image className={styles.image} src="/contact.jpeg" alt="" width={650} height={650} style={{borderRadius:"50%"}}/>
</div>
<div className={styles.formContainer}>

<div className={styles.contactForm}>
<form>
<input className={styles.inputField} type="text" placeholder="Name"></input>
<input className={styles.inputField} type="text" placeholder="Lastname"/>
<input className={styles.inputField} type="email" placeholder="Email" />
<input className={styles.inputField} type="phone" placeholder="Phone Number(Optional)"/>
<textarea className={styles.textArea} name="" id="" cols="30" rows="10" placeholder="message"></textarea>
</form>
<button className={styles.submitButton}>Send</button>
</div>
</div>


</div>
    )
}

export default ContactPage;