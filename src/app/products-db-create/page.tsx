"use client"
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { Submit } from "../components/submit";
import { useActionState } from "react";

import { FormState, CreateProduct } from "@/actions/products";

export default function AddproductPage() {
    const initialState: FormState = {
        errors: {}
    };
    const [state, formAction, ispending] =
        useActionState(CreateProduct, initialState);

    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <div>
                <label className="text-white">
                    Title
                    <input
                        type="text"
                        className="block w-full p-2 text-black border rounded"
                        name="title"

                    />
                </label>
                {
                    state.errors.title &&
                    <p className="text-red-600">{state.errors.title}</p>
                }
            </div>
            <div>
                <label className="text-white">
                    Price
                    <input
                        type="number"
                        className="block w-full p-2 text-black border rounded"
                        name="price"

                    />
                </label>
                {
                    state.errors.price &&
                    <p className="text-red-600">{state.errors.price}</p>
                }
            </div>
            <div>
                <label className="text-white">
                    Description
                    <textarea
                        className="block w-full p-2 text-black border rounded"
                        name="description"
                    />
                </label>
                {
                    state.errors.description &&
                    <p className="text-red-600">{state.errors.description}</p>
                }
            </div>
            <button
                type="submit"
                className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
                disabled={ispending}
            >
                Add Product
            </button>
            {/* <Submit /> */}
        </form>
    )
}