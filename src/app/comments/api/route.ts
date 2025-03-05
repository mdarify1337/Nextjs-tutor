import { comments } from '../data'

// first Method for making a get httpmethod 
// export async function GET() {
//     return  Response.json(comments);
// }

import { type NextRequest } from "next/server";

// second method for get (best practice in nextjs)
// export async function GET() {
//     const response = await fetch("http://localhost:3000/comments");
//     const data = await response.json();
//     return NextResponse.json(comments);
// }

// third method for get with using query to filter

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
    return Response.json(filteredComments);
  }

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    });
}
