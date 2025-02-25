import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href={"/blog"} >blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Frensh</Link>
    </>
  );
}