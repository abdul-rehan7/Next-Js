import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1>I am Products Page</h1>
      <div className="prods bg-green-100 flex space-x-7">
      <Link href="product/product">Product 1</Link>
      <Link href="product/product1">Product 1</Link>
      <Link href="product/product1">Product 1</Link>
      </div>
    </div>
  );
}
