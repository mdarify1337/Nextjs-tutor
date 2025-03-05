import ClientComponent from "../components/ClientComponent";

type Product = {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
};


async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 }, // ISR behavior
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export default async function ProductPage() {
    const products = await getProducts();
    return <ClientComponent products={products} />;
}
