"use client"
import { useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

// Fetch data at build time with ISR-like behavior
async function getProduct(): Promise<Product> {
  const res = await fetch("https://api.example.com/product/123", {
    next: { revalidate: 60 }, // ISR-like behavior
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductPage() {
  const product = await getProduct(); // Fetch product data at build time
  return <ClientComponent product={product} />;
}

// Client component to handle dynamic price updates
function ClientComponent({ product }: { product: Product }) {
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    fetch(`/api/live-price?productId=${product.id}`)
      .then((res) => res.json())
      .then((data: { price: number }) => setPrice(data.price))
      .catch((error) => console.error(error));
  }, [product.id]);

  return <div>Price: {price}</div>;
}
