import Image from 'next/image';
import styles from './singlePost.module.css'
import postUser from '@/components/postUser/postUser';
const getData = async (slug) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
}
const SinglePostPage = async ({params}) => {

    const {slug} = params;
    
    const post = await getData(slug);
return (
<div className={styles.container}>
<div className={styles.imgContainer}>
<Image
className={styles.image} 
src="/newyork.jpeg" alt='' height={500} width={350}/>
</div>

<div className={styles.textContainer}>
<h1 className={styles.title}>{post.title}</h1>
<div className={styles.details}>
<Image className={styles.avatar} 
src="/newyork.jpeg" alt='' width={50} height={50} style={{borderRadius:"50%"}}/>

<postUser userId = {post.userId}/>

<div className={styles.detailText}>
<span className={styles.detailTitle}>Published</span>
<span className={styles.detailValue}>01.01.2024</span>
</div>

</div>
<div className={styles.content}>
{post.body}
</div>
</div>
</div>
    )
}

export default SinglePostPage;