import { Suspense } from "react";

import ProductFilter, { type Product } from "./ProductFilter";

async function ProductList() {
  const res = await fetch(`http://localhost:3001/products`, { cache: "no-store" });
  console.log(res);
  

  if (!res.ok) {
    throw new Error(`Failed to fetch products (${res.status})`);
  }

  const { data }: { data: Product[] } = await res.json();

  return <ProductFilter products={data} />;
}

export default function ProductsPage() {
  return (
    <main className="page">
      <section className="content-section">
        <p className="subtitle">OUR CATALOG</p>
        <h1>Products</h1>

        <p className="description">
          Products fetched from the backend API and rendered on the server.
        </p>

        <Suspense fallback={<p>Loading products...</p>}>
          <ProductList />
        </Suspense>
      </section>
    </main>
  );
}
