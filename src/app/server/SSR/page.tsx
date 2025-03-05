type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
};

async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
    return res.json();
}

export default async function Store() {
    const products = await getProducts();

    return (
        <div
            className="flex flex-col border-slate-700 border-[2px] 
            p-5 gap-2 rounded-lg bg-[#f8f8ff]">
            {
                products.map((p) =>
                    p.price > 100 ? (
                        <div key={p.id}
                            className="flex flex-col justify-between border-[1px]
                     border-black rounded-xl gap-3 p-4 items-center bg-[#add8e6]">
                            <p
                                className="font-semibold">
                                {"* " + p.title}
                            </p>
                            <img 
                                src={p.image} 
                                alt={p.title} 
                                width={80} 
                                height={80} 
                                className="rounded-xl"
                            />
                            <p className="font-semibold">{p.description}</p>
                            <p
                                className="bg-red-700 border-[1px] border-black
                         rounded-md p-2 font-bold text-white h-fit w-[75px]
                          flex justify-center">
                                ${p.price}
                            </p>
                        </div>
                    ) : (
                        <div key={p.id}
                            className="flex flex-col justify-between border-[1px]
                     border-black rounded-xl p-4 items-center bg-[#add8e6] gap-3">
                            <p
                                className="font-semibold">
                                {"* " + p.title}
                            </p>
                            <img 
                                src={p.image} 
                                alt={p.title} 
                                width={80} 
                                height={80} 
                                className="rounded-xl"
                            />
                            <p className="font-semibold">{p.description}</p>
                            <p
                                className="bg-green-700 border-[1px] border-black
                         rounded-md p-2 font-bold text-white h-fit w-[75px]
                          flex justify-center">
                                ${p.price}
                            </p>
                        </div>
                    ))
            }
        </div>
    );
}
