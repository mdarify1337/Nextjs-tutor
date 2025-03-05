import { comments } from "./data";

// import { useState, useEffect } from "react";
// first method to fetch data -> client side
// export default function Comments() {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch(`http://localhost:3000/comments/api`, {
//                     method: "GET",
//                     credentials: "include",
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setComments(data);
//                 }
//             } catch (error) {
//                 console.log("Error fetching comments:", error);
//             }
//         }

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h2>Comments</h2>
//             <ul>
//                 {comments.map((comment: any) => (
//                     <li key={comment.id}> 
//                         <p><strong>ID:</strong> {comment.id}</p>
//                         <p>{comment.text}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// 2️⃣ Fetching Data in a Server Component (Recommended)
// app/comments/page.tsx (or wherever your component is)
// async function getComments() {
//     const response = await fetch("http://localhost:3000/comments/api", {
//         method: "GET",
//         credentials: "include",
//         cache: "no-store", // Prevents caching
//     });

//     if (!response.ok) {
//         throw new Error("Failed to fetch comments");
//     }

//     return response.json();
// }

export default async function CommentsPage() {
    // const comment =comments; // Fetch on the server
    const Comments = comments;
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {Comments.map((comment) => (
                    <li key={comment.id}>
                        <p><strong>ID:</strong> {comment.id}</p>
                        <p>{comment.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/*

    Which One Should You Use?
    Use Case	Best Approach
    Fast loading & SEO	-> Server Component ✅
    Dynamic updates (after page load)	-> Client Component (useEffect) ✅
    If comments should be loaded immediately, -> use server-side fetching.
    If comments are frequently updated (e.g., user interactions), -> use client-side fetching.
*/

/*
    🚀 Best of Both Worlds? Use API Routes
    You can also create an API route in Next.js and fetch data from there:
    // app/api/comments/route.ts
    import { NextResponse } from "next/server";

    export async function GET() {
        const response = await fetch("http://localhost:3000/comments");
        const data = await response.json();
        return NextResponse.json(data);
    }
    Then, fetch from /api/comments instead of localhost:3000/comments.
    This helps secure your backend requests and reduces CORS issues.
*/