import { getProducts } from "@/prisma-db";


type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function Productsdb() {
    const products: Product[] = await getProducts(); 
    console.log('products -> ' , products)
    return (
        <ul className="space-y-4 p-4 bg-[#374151]">
            {
                products.map((product) => 
                    <li
                        key={product.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="">{product.description}</p>
                        <p className="text-lg font-medium">{product.price}</p>
                    </li>
                )
            }
        </ul>
    )
}