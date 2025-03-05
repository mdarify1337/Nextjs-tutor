
import ClientComponent from "@/app/components/ClientComponent";
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
    return <ClientComponent products={product} />;
}

