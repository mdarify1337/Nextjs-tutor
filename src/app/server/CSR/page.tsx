"use client"
import { useEffect, useState } from "react";

type StatsData = { value: string }; // Define expected data structure

export default function Dashboard() {
    const [data, setData] = useState<StatsData | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");

                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
                console.log('response ', res.json())
                const result: StatsData = await res.json();
                setData(result);
            } catch (err) {
                setError("Failed to fetch data");
            }
        };

        fetchData();
    }, []);

    if (error) return <p className="text-red-500">{error}</p>;

    return <div>{data ? <p>{data.value}</p> : <p>Loading...</p>}</div>;
}
