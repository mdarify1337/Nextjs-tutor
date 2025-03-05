"use client"

import { useState } from "react"
import { ClientComponentTwo } from "./client-component-two";

export function ClientComponentOne() {
    const [name, setName] = useState("Component");
    // console.log(setName("BatMan"));
    return (
        <>
            <h1>Client Component One {name}</h1>
            <ClientComponentTwo/>
        </>
    )
}