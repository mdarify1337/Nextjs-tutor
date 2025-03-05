import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Products page</h1>
      <Link href="/dynamic/1">Product 1</Link>
      <Link href="/dynamic/2">Product 2</Link>
      <Link href="/dynamic/3">Product 3</Link>
    </>
  );
}