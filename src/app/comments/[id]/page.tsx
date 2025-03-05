// import { comments } from "../data";
// import { Comment } from "../data";


// export default function CommentPage(
//     { params }:
//         { params: { id: string } }) {
//     const id = Number(params.id);
//     const comment: Comment | undefined = comments.find((c) => c.id === id);
//     if (!comment || id > comments.length) {
//         return <p>Comment not found</p>;
//     }
//     return (
//         <div className="flex flex-col p-4 w-24 h-fit font-bold">
//             <p>{"Storage Id -> : "}{comment.id}</p>
//             <p>{"Description -> : "}{comment.text}</p>
//         </div>
//     );
// }

export default function CommentPage() {
    return <h1>Comment homme Page</h1>
}