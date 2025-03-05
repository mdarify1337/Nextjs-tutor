import { notFound } from "next/navigation";

type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
};

async function getProduct(id: string): Promise<Product | null> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) 
        return null;
    return res.json();
}

export default async function ProductDetailPage(
    { params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    if (!product) return notFound();

    return (
        <div key={product.id}
            className="flex flex-col justify-between border-[1px]
                     border-black rounded-xl p-4 items-center 
                     bg-[#add8e6] gap-3">
            <p
                className="font-semibold">
                {"* " + product.title}
            </p>
            <img
                src={product.image}
                alt={product.title}
                width={80}
                height={80}
                className="rounded-xl"
            />
            <p className="font-semibold">{product.description}</p>
            <p
                className="bg-green-700 border-[1px] border-black
                         rounded-md p-2 font-bold text-white 
                         h-fit w-[75px]
                          flex justify-center">
                ${product.price}
            </p>
        </div>
    );
}
