"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
  return (
    <div>
        <h2>
            Review {reviewId} Not Found for the product {productId}
        </h2>
    </div>
  )
}

export default NotFound