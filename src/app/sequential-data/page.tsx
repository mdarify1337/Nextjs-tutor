import { Suspense } from "react";
import { Author } from "./author";
import LoadingPage from "./laoding"
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default async function SequentialData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data: Post[] = await response.json();
    const filteredPosts = data.filter((post) => post.id % 10 === 1);
    return (
        <div className="flex flex-col bg-black gap-2 text-white p-4 font-bold rounded-xl">
            <Suspense fallback={<LoadingPage/>}>
            {
                filteredPosts.map((data) =>
                    <div
                        key={data.id}
                        className="flex flex-row gap-4"
                    >
                        {/* <Suspense > fallback={<LoadingPage/>} */}
                            <Author userId={data.userId} />
                        {/* </Suspense> */}
                        <div className="flex flex-col p-4 rounded-md gap-4 w-[85%] border-white border-[2px] justify-center ">
                            <p>{data.title}</p>
                            <p>{data.body}</p>
                        </div>
                    </div>
                )
            }
            </Suspense>
        </div>
    )
}