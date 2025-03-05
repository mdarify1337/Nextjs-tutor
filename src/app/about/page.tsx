import { cookies } from 'next/headers'
import React from 'react'

async function AboutPage() {
    const cookiesStore = await cookies();
    const theme = cookiesStore.get("theme");
    // console.log('theme -> ', theme);
    console.log('aboout Server component');
    return (
        <div>AboutPage {new Date().toLocaleTimeString()}</div>
    )
}

export default AboutPage