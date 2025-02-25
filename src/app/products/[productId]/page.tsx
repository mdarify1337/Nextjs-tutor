import { Metadata } from "next";
import { resolve } from "path";

type props = {
    params : Promise<{productId : string}>
}

export const generateMetadata = async({
    params,
}: props) : Promise<Metadata> => 
{
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`)
        }, 100)
    })
    return {
        title: `product ${title}`
    }
}

export default async function ProductsDetails(
    {params}: 
    {params: Promise<{productId: string}>}
) {
    const productId = (await params).productId;
    return (
        <div>
            <h1>
                Product Details about {productId}
            </h1>
        </div>
    );
}