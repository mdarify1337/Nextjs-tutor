import Link from "next/link";
import Search from "./components/search";
import { Counter } from "./components/counter";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Counter/>
      <Search/>
      <Link href={"/dashpage"}>Dashboard</Link>
      <Link href={"/side"} >Side</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Frensh</Link>
    </>
  );
}