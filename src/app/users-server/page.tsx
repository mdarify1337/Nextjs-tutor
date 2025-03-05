type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

async function getUsers() : Promise<User[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
}

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const users = await getUsers();
    console.log(users)
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