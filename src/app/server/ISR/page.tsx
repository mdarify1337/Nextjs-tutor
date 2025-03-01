"use client"
import { useState, useEffect } from "react";

type Product = {
    id: string;
    name: string;
    price: number;
};

async function getProduct(): Promise<Product> {
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}

export default async function ProductPage() {
    const product = await getProduct();
    return <ClientComponent product={product} />;
}
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
