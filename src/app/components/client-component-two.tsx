"use client"

import { useState } from "react"

export function ClientComponentTwo() {
    const [name, setName] = useState("Component");
    // console.log(setName("BatMan-2"));
    return (
        <>
            <h1>Client Component Two {name}</h1>
        </>
    )
}