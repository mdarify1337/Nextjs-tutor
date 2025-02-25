"use client"

import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();
    const handleSumbit = () =>{
        console.log("click submit");
        router.push("/");
    }
    return (
        <>
            <h1>
                Order Product
            </h1>
            <button
                onClick={handleSumbit}
            >
                place order
            </button>
        </>
    )
}