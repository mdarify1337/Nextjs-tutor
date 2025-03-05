"use client";

import { useState } from "react";

export default function DashboardPage() {
    console.log("Dashboard client component");
    const [name, setName] = useState("");
    return (
        <div 
            className="
            bg-black text-white p-2 font-bold 
            rounded-md flex flex-row justify-between
            ">
            <h1>Dashboard</h1>
            <input
                className="rounded-sm text-black font-semibold"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
            />
            <p>Hello, {name}!</p>
        </div>
    );
}
