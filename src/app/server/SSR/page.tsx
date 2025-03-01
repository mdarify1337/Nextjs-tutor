type Product = {
    id: number;
    title: string;
    price: number;
};

async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
    return res.json();
}

export default async function Store() {
    const products = await getProducts();

    return (
        <div>
            {products.map((p) => (
                <p key={p.id}>{p.title} - ${p.price}</p>
            ))}
        </div>
    );
}
