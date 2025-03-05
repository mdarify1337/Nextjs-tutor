"use client"
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsersData() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                });
                if (!response.ok)
                    throw new Error("failed to fetch data");
                const data = await response.json();
                console.log('fetching data -> : ', data);
                setUsers(data);
            } catch (error) {
                if (error instanceof Error)
                    setError(error.message)
                else
                    setError("an unknown the error message");
            } finally {
                setLoading(false)
            }
        }
        fetchUsersData();
    }, []);
    // console.log('set the user value -> ', users);
    if (loading) return <div>loading...........</div>
    if (error) return <div>{error}</div>
    return (
        <div
            className="flex flex-col border-black border-[2px] rounded-md p-4"
        >
            {
                users.map((user) =>
                    <div
                        className="flex flex-row justify-between gap-3 items-center p-4"
                        key={user.id}>
                        <div className="font-bold flex bg-[#3b82f680] border-black border-[2px] rounded-md w-6 justify-center items-center">
                            <p>{user.id}</p>
                        </div>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                )
            }
        </div>
    )
}