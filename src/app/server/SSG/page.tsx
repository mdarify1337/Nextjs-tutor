type Post = {
  id: number;
  title: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 60 } });
  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
