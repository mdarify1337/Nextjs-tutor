import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Products page</h1>
      <Link href="/prd/1">Product 1</Link>
      <Link href="/prd/2">Product 2</Link>
      <Link href="/prd/3">Product 3</Link>
    </>
  );
}