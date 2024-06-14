"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function page() {

    const router = useRouter();
    const pathname = usePathname();


const handleClick = () => {
    console.log("Button clicked");
  
    router.push("/blog");
    
}


  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <br/>  <br/>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default page
