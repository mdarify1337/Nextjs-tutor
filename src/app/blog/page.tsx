import { Metadata } from 'next';
import { resolve } from 'path';
import React from 'react'
export const metadata: Metadata = {
    title: {
        absolute: "blog",
    },
};

async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("waiting for this time")
        }, 2000);
    })
    return (
        <div>Blog</div>
    )
}

export default Blog